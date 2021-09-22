import { Config } from '@jest/types';
import path from 'path';
import { pathsToModuleNameMapper } from 'ts-jest/utils';
import tsconfig from './tsconfig.json';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  modulePathIgnorePatterns: ['build'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: path.resolve(__dirname, 'src')
  }),
  setupFilesAfterEnv: [
    './setup.ts'
  ]
};

export default config;