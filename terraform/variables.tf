variable "cloudflare_api_token"  { type = string }

variable "cloudflare_account_id" { type = string }

variable "cloudflare_zone_id"    { type = string }

variable "custom_domain"         { type = string }

variable "worker_name"           { 
  type    = string 
  default = "portfolio"
}
