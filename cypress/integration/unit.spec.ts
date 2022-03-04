import { subtractTwoNumbers } from '../../utils/someMath';

describe('Math', () => {
  it('subtracts two numbers', () => {
    const result = subtractTwoNumbers(2, 1);
    expect(result).to.equal(1);
  });
});
