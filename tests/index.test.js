const assert = require('assert');
const { accountTypeChecker } = require('../src/index');

describe('Unit test', () => {
  it('should be able to equal to B with values ascending from 0', () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 100 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 200 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 300 },
        },
      },
    ];
    assert.strictEqual(accountTypeChecker(accountBalanceHistory), 'B');
  });
  it('should be able to equal to B with values ascending from 100', () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 100 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 200 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 300 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 400 },
        },
      },
    ];
    assert.strictEqual(accountTypeChecker(accountBalanceHistory), 'B');
  });
  it('should be able to equal to B with values ascending from -200', () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: -200 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: -100 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 100 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 200 },
        },
      },
    ];
    assert.strictEqual(accountTypeChecker(accountBalanceHistory), 'B');
  });
  it('should be able to equal to B with values descending from 400', () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 400 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 300 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 200 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 100 },
        },
      },
    ];
    assert.strictEqual(accountTypeChecker(accountBalanceHistory), 'B');
  });
  it('should be able to equal to B with values descending from 200', () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 200 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 100 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: -100 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: -200 },
        },
      },
    ];
    assert.strictEqual(accountTypeChecker(accountBalanceHistory), 'B');
  });
  it('should be able to equal to B with starting value -100.55', () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: -100.56 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 100.56 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 201.12 },
        },
      },
    ];
    assert.strictEqual(accountTypeChecker(accountBalanceHistory), 'B');
  });
  it('should be able to equal to B with values descending from 0', () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: -100 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: -200 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: -300 },
        },
      },
    ];
    assert.strictEqual(accountTypeChecker(accountBalanceHistory), 'B');
  });
  it('should be able to equal to A with starting value 0', () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 150 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 200 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 300 },
        },
      },
    ];
    assert.strictEqual(accountTypeChecker(accountBalanceHistory), 'A');
  });
  it('should be able to equal to A with starting value 100', () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: 100 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 150 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 200 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 300 },
        },
      },
    ];
    assert.strictEqual(accountTypeChecker(accountBalanceHistory), 'A');
  });
  it('should be able to equal to A with starting value -12', () => {
    const accountBalanceHistory = [
      {
        monthNumber: 0,
        account: {
          balance: { amount: -12 },
        },
      },
      {
        monthNumber: 1,
        account: {
          balance: { amount: 150 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 0 },
        },
      },
      {
        monthNumber: 2,
        account: {
          balance: { amount: 300 },
        },
      },
    ];
    assert.strictEqual(accountTypeChecker(accountBalanceHistory), 'A');
  });
});
