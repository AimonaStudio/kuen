import { PluginFunction, VueConstructor } from 'vue'

import './components'

declare const Kuen: Kuen
export default Kuen

export interface Kuen {
  install: PluginFunction<ComponentsUseOptions>
}

export interface ComponentsUseOptions {
  // todo
}
