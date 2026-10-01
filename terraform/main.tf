resource "cloudflare_workers_script" "portfolio" {
  account_id  = var.cloudflare_account_id
  script_name = var.worker_name

  compatibility_date = formatdate("YYYY-MM-DD", timestamp())

  assets = {
    directory = "${path.module}/../dist"
  }
}

resource "cloudflare_workers_custom_domain" "portfolio_domain" {
  account_id = var.cloudflare_account_id
  zone_id    = var.cloudflare_zone_id
  hostname   = var.custom_domain
  service    = cloudflare_workers_script.portfolio.script_name
}
