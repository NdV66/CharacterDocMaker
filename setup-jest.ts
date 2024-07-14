import 'jest-preset-angular/setup-jest';
import '@testing-library/jest-dom';
import 'jest-canvas-mock';

beforeEach(() => {
  jest.resetAllMocks();
  jest.clearAllMocks();
});
