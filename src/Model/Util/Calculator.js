const money = {
    3: 5_000,
    4: 50_000,
    5: 1_500_000,
    bonus: 30_000_000,
    6: 2_000_000_000,
  };



class Calculator {

    #rateOfReturn

    #result

    constructor() {
        this.#result = {
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            bonus: 0,
        };
    }

    matchRanks(result,bonusNumber, number) {
        this.#result[result] !== undefined && (this.#result[result] += 1);
      if (this.#result['5'] && number.includes(Number(bonusNumber))) {
        this.#result['5'] -= 1;
        this.#result.bonus += 1;
      }

    }

    calculateRateOfReturn(amountPurchased) {
        let result = 0;
        for (let count in this.#result) {
          result += money[count] * this.#result[count];
        }
        this.#rateOfReturn = ((result / amountPurchased) * 100).toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        });
    }

    getResult() {
        const rateOfReturn = this.#rateOfReturn
        const result = this.#result
        return {rateOfReturn, result}
    }
}

module.exports = Calculator