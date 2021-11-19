import { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';
import tsconfig from './tsconfig.json';
import path from 'path';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/*.{ts,tsx}",
    "src/**/*.{ts,tsx}"
  ],
  coveragePathIgnorePatterns: [
    "src/index.tsx",
    "src/API/JSC",
    "src/Store",
    "src/Setup"
  ],
  coverageReporters: ["json", "text", "clover", "html", "json-summary"],
  coverageDirectory: path.resolve(__dirname, 'coverage'),
  modulePathIgnorePatterns: ['build'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootDir>/src'
  }),
  setupFilesAfterEnv: [
    './setup.ts'
  ]
};

export default config;