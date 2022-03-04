/** Comment out this line and addFourNumbers for the unit test to run successfully */
import { addTwoNumbers } from 'utils/addTwoNumbers';

export const addFourNumbers = (a: number, b: number, c: number, d: number): number =>
  addTwoNumbers(a, b) + addTwoNumbers(c, d);

export const subtractTwoNumbers = (a: number, b: number): number => a - b;
