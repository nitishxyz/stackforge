/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */

declare module "sst" {
  export interface Resource {
    "ForgeApiRouter": {
      "type": "sst.aws.Router"
      "url": string
    }
    "ForgeAuth": {
      "type": "sst.aws.Auth"
      "url": string
    }
    "ForgeBackendService": {
      "service": string
      "type": "sst.aws.Service"
      "url": string
    }
    "ForgeDatabase": {
      "database": string
      "host": string
      "password": string
      "port": number
      "type": "sst.aws.Postgres"
      "username": string
    }
    "ForgePlatform": {
      "type": "sst.aws.Nextjs"
    }
    "FrogeVpc": {
      "bastion": string
      "type": "sst.aws.Vpc"
    }
    "GithubClientId": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "GithubClientSecret": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "PolarAccessToken": {
      "type": "sst.sst.Secret"
      "value": string
    }
  }
}
/// <reference path="sst-env.d.ts" />

import "sst"
export {}