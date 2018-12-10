declare function startApp (conf: KuenAppOptions): Promise<void>

export interface KuenAppOptions {
  storeConf: {},
  routerConf: {},
  appConf: {
    scpNonce: String
  },
  appName: String,
  methods: {},
  theme: {},
  globalConf: {}
}
