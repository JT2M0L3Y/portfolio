resource "cloudflare_workers_script" "portfolio" {
  account_id  = var.account_id
  script_name = var.worker_name

  compatibility_date = formatdate("YYYY-MM-DD", timestamp())

  main_module = "worker.js"
  content     = <<-EOT
    export default {
      async fetch(request, env) {
        return await env.ASSETS.fetch(request)
      }
    }
  EOT

  assets = {
    directory          = "${path.module}/../dist"
    binding            = "ASSETS"
    not_found_handling = "none"
  }
}

resource "cloudflare_workers_custom_domain" "portfolio_domain" {
  account_id = var.account_id
  zone_id    = var.zone_id
  hostname   = var.custom_domain
  service    = cloudflare_workers_script.portfolio.script_name
}
