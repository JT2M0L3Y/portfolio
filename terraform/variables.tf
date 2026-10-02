variable "cloudflare_api_token"  { type = string }

variable "account_id" { type = string }

variable "zone_id"    { type = string }

variable "custom_domain"         { type = string }

variable "worker_name"           { 
  type    = string 
  default = "portfolio"
}
