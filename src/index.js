const accountTypeChecker = (accountBalanceHistory) => {
    let result = false;

    //This will assume that the array minimum length is 3 and the object also provided in correct format
    const balanceDifference = accountBalanceHistory[1].account.balance.amount - accountBalanceHistory[0].account.balance.amount
    for (let i = 2; i < accountBalanceHistory.length; i++) {
        if ((accountBalanceHistory[i].account.balance.amount - accountBalanceHistory[i - 1].account.balance.amount) !== balanceDifference) {
            result = true;
            break;
        }
    }
    return result ? "A" : "B";
};

module.exports = {
    accountTypeChecker
}

