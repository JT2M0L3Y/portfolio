variable "cloudflare_api_token" {
  type        = string
  description = "Cloudflare API Token"
}

variable "account_id" {
  type        = string
  description = "Cloudflare Account ID"
}

variable "cf_zone_id" {
  type        = string
  description = "passed via TF_VAR_cf_zone_id from GitHub secrets"
}

variable "worker_name" {
  type    = string
  default = "portfolio"
}

variable "custom_domain" {
  type        = string
  description = "passed via TF_VAR_custom_domain from GitHub variables"
}

variable "compatibility_date" {
  type    = string
  default = null
}
