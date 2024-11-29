// ❓ DESCRIPTION
/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot
return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the
change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to
lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

// ✅ SOLUTION
const curUnitBases = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100,
};

function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    if (change === 0) {
        return {
            status: 'OPEN',
            change: [],
        };
    }

    const cidSum = cid.reduce((sum, cur) => +(cur[1] + sum).toFixed(2).toString(), 0);
    if (cidSum === change) {
        return {
            status: 'CLOSED',
            change: cid,
        };
    }

    const resChange = [];
    for (const cidItem of cid.reverse()) {
        const base = curUnitBases[cidItem[0]];
        if (cidItem[1] > 0 && base <= change) {
            const ideallyPayedWithCur = change - change % base;
            const curPayed = Math.min(cidItem[1], ideallyPayedWithCur);
            resChange.push([cidItem[0], curPayed]);
            change -= curPayed;
            change = +change.toFixed(2);

            if (change === 0) {
                return {
                    status: 'OPEN',
                    change: resChange,
                }
            }
        }
    }

    return {
        status: "INSUFFICIENT_FUNDS",
        change: [],
    };
}

const res = checkCashRegister(3.26, 100,
    [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
        ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(res);