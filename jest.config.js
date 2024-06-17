module.exports = {
  preset: "jest-preset-angular",
  globalSetup: "jest-preset-angular/global-setup",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular",
  },
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      astTransformers: ["jest-preset-angular/InlineHtmlStripStylesTransformer"],
      isolatedModules: true,
      preserveSymlinks: true,
    },
  },
  moduleFileExtensions: ["ts", "html", "js", "json"],
  moduleDirectories: ["node_modules", "src"],
  modulePaths: ["<rootDir>"],
  moduleNameMapper: {
    "@elements/(.*)$": ["<rootDir>/src/app/elements/$1"],
    "@services/(.*)$": ["<rootDir>/src/app/services/$1"],
    "@translations/(.*)$": ["<rootDir>/src/app/translations/$1"],
    "@models/(.*)$": ["<rootDir>/src/app/models/$1"],
    "@utils/(.*)$": ["<rootDir>/src/app/utils/$1"],
    "@pages/(.*)$": ["<rootDir>/src/app/pages/$1"],
  },
};
