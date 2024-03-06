/* eslint-disable import/no-import-module-exports */

import nextJest from "next/jest";

// Sync object
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverage: true,
  automock: false,
  coverageProvider: "v8",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/out/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.js",
    "!<rootDir>/coverage/**",
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  preset: "ts-jest",
  moduleNameMapper: {
    // "^@/(.*)$": "<rootDir>/src/$1",
    "^d3$": "<rootDir>/node_modules/d3/dist/d3.min.js",
  },
  modulePathIgnorePatterns: ["cypress"],
};

module.exports = createJestConfig(customJestConfig);
