terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.26"
    }
  }
}

provider "cloudflare" {
  # Leave blank. Terraform automatically reads the environment variable.
}
