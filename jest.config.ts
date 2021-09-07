import { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';
import tsconfig from './tsconfig.json';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  modulePathIgnorePatterns: ['build'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootDir>/src'
  }),
  setupFilesAfterEnv: [
    './setup.ts'
  ]
};

export default config;