module.exports = {
  verbose: false,
  roots: [
    '<rootDir>/backpacks/components/src',
    '<rootDir>/backpacks/loader/src',
    '<rootDir>/tests/unit'
  ],
  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@/test$': '<rootDir>/test/index.test.js',
    '^@/test/(.*)$': '<rootDir>/test/$1',
    '^@/(.*)$': '<rootDir>/backpacks/$1'
  },
  collectCoverageFrom: ['backpacks/**/*.{js}'],
  transformIgnorePatterns: ['node_modules']
}
