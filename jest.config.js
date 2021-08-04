module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  // transform: {
  //   '^.+\\.vue$': 'vue-jest',
  //   '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  //   '^.+\\.jsx?$': 'babel-jest'
  // },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  // coverageDirectory: 'coverage',
  // snapshotSerializers: [
  //   'jest-serializer-vue'
  // ],
  testMatch: [
    '**/tests/**/*.(spec|test).(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/'
  // collectCoverage: true,
  // collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**']
}