import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import axios from 'axios';
vi.mock('./services/api', () => ({
  createAPI: vi.fn(() => axios.create()),
}));

expect.extend(matchers);
