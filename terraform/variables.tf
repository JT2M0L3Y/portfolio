variable "account_id" {
  type        = string
  description = "Cloudflare Account ID"
}

variable "zone_id" {
  type        = string
  description = "Cloudflare Zone ID"
}

variable "worker_name" {
  type    = string
  default = "portfolio"
}

variable "custom_domain" {
  type        = string
  default     = null
  description = "Optional custom domain (e.g. example.com)"
}

variable "compatibility_date" {
  type    = string
  default = null
}
