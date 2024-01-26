import sharedConfig from "@marinhomich/tailwind-config"
import type { Config } from "tailwindcss"

const config: Pick<Config, "presets"> = {
  presets: [sharedConfig],
}

export default config
