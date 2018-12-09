import { PluginFunction, VueConstructor } from 'vue'

export * from './components'

declare const Kuen: KuenComponents
export default Kuen

export interface KuenComponents {
  install: PluginFunction<ComponentsUseOptions>
}

export interface ComponentsUseOptions {
  // todo
}
