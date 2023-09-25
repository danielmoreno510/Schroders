module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./src/setupTests.js'],
  transformIgnorePatterns: [
    /* eslint-disable */
    'node_modules/(?!(@react-native|react-native|native-base-shoutem-theme|@codler|react-native-iphone-x-helper)/)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/@types/*.{tsx}',
    '!src/**/*testData.{js,jsx,ts,tsx}',
    '!src/**/*index.{js,jsx,ts,tsx}',
    '!src/**/*styles.{js,jsx,ts,tsx}',
    '!src/services/httpUtils.tsx',
    '!src/services/http.tsx',
    '!src/ReactotronConfig.tsx',
    '!src/App.tsx',
    '!src/redux/StoreService.js',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};
