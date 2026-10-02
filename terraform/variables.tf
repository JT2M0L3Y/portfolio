variable "cloudflare_api_token" {
  type      = string
  sensitive = true
}

variable "account_id" {
  type      = string
  sensitive = true
}

variable "zone_id" {
  type      = string
  sensitive = true
}

variable "custom_domain" {
  type      = string
  sensitive = true
}

variable "worker_name" {
  type    = string
  default = "portfolio"
}
