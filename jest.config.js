module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*Styled.{js,jsx,ts,tsx}',
    '!./*',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!jest.config.js',
    '!**/.next/**',
    '!**/out/**',
    '!./coverage/**/*',
    '!./config/**/*',
    '!**/__tests__/**/*',
  ],
  coverageDirectory: './coverage',
  coverageReporters: [
    'json',
    'lcov',
    'html',
    'json-summary',
    'text',
    'text-summary',
  ],
  watchPathIgnorePatterns: ['<rootDir>/coverage/'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup-tests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/css-transform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '~UTIL(.*)$': '<rootDir>/util$1',
    '~PAGES(.*)$': '<rootDir>/pages$1',
    '~COMPONENT(.*)$': '<rootDir>/component$1',
  },
  reporters: ['default'],
  snapshotSerializers: ['jest-emotion'],
};
