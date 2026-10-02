resource "cloudflare_workers_script" "portfolio" {
  account_id  = var.account_id
  script_name = var.worker_name

  compatibility_date = formatdate("YYYY-MM-DD", timestamp())

  assets = {
    directory = "${path.module}/../dist"
    config = {
      not_found_handling = "404-page"
      html_handling      = "auto-trailing-slash"
    }
  }
}

resource "cloudflare_workers_custom_domain" "portfolio_domain" {
  account_id = var.account_id
  zone_id    = var.zone_id
  hostname   = var.custom_domain
  service    = cloudflare_workers_script.portfolio.script_name
}
