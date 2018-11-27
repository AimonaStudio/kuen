module.exports = {
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-object-rest-spread",
    "transform-vue-jsx"
  ],
  env: {
    build: {
      presets: [
        "@vue/app"
      ]
    },
    test: {
      plugins: [
        // [
        //   "module-resolver",
        //   {
        //     root: [
        //       "./backpacks"
        //     ],
        //     alias: {
        //       "~components": "components/src"
        //     },
        //     extensions: [
        //       '', '.vue', '.js', '.json'
        //     ]
        //   }
        // ]
      ],
      presets: [
        [
          "@babel/env",
          {
            "targets": {
              "node": "current"
            },
          },
        ]
      ]
    }
  }
}
