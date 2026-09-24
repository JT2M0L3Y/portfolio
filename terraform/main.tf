provider "cloudflare" {
  # uses CF_API_TOKEN environment variable
}

locals {
  compatibility_date = coalesce(var.compatibility_date, formatdate("YYYY-MM-DD", timestamp()))
}

resource "cloudflare_workers_script" "portfolio" {
  account_id  = var.account_id
  script_name = var.worker_name

  # worker code
  main_module    = "index.js"
  content_file   = "${path.module}/../dist-worker/index.js"
  content_sha256 = filesha256("${path.module}/../dist-worker/index.js")

  compatibility_date = local.compatibility_date

  # static assets
  assets = {
    directory = "${path.module}/../dist"
  }
}

resource "cloudflare_workers_custom_domain" "portfolio" {
  count = var.custom_domain != null && var.custom_domain != "" ? 1 : 0

  account_id = var.account_id
  zone_id    = var.zone_id
  hostname   = var.custom_domain
  service    = cloudflare_workers_script.portfolio.script_name
}
