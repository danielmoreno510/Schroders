// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

/* eslint-disable */
jest.mock('d3', () => ({
  scalePoint: () => ({
    domain: () => ({range: () => ({padding: () => jest.fn()})}),
  }),
  max: jest.fn(),
  scaleLinear: () => ({domain: () => ({range: () => jest.fn()})}),
}));
