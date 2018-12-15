import Vue, { PluginFunction, VueConstructor } from 'vue'

export interface InstallOptions {
  /** todo */
}

export const version: string

/** Use `Vue.use(Kuen)` */
export default function install (vue: typeof Vue, options: InstallOptions): void

export * from './components'
