module.exports = {
  verbose: false,
  roots: [
    '<rootDir>/backpacks/components/src',
    '<rootDir>/tests/unit'
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@/test$': '<rootDir>/test/index.js',
    '^@/test/(.*)$': '<rootDir>/test/$1',
    '^@/components/(.*)$': '<rootDir>/backpacks/components/src/$1'
  },
  transform: {
    "\\.(js)$": "babel-jest",
    "\\.(vue)$": "vue-jest",
    '\\.(styl)$': 'jest-css-modules'
  },
  collectCoverageFrom: [
    "backpacks/**/*.{js,ts,vue}",
    "!**/node_modules/**",
    "!**/*.d.ts"
  ],
  snapshotSerializers: [
    "jest-serializer-vue"
  ],
  coverageReporters: ["html", "text-summary"],
  transformIgnorePatterns: [
    'node_modules/(?!vue-router)'
  ],
  coverageDirectory: "./coverage/"
}
