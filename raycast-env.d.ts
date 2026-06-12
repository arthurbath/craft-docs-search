/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Craft API URL - Create an API connection in Craft's Imagine view, then paste its URL here. */
  "apiEndpoint": string,
  /** Craft API Token - If this API connection has been set to require an API key, enter it here. */
  "apiToken"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-docs` command */
  export type SearchDocs = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-docs` command */
  export type SearchDocs = {}
}

