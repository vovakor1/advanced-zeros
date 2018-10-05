module.exports = function getZerosCount(number, base) {
    let zerosAmount = 0;
    const number1 = number;
    let system = base;
    let a = 0;

    if( Math.sqrt(base)%1 === 0){
        a = Math.sqrt(base);
    }
   else
    {
        for (let i = 2; i <= system; i++) {
            while (system % i === 0) {
                system = system / i;
                if (system === 1) {
                    a = i;
                    break;
                }
            }
        }
    }
    if (a % 2 === 0) a = 5;
    for (let i = a; i <= number1; i*=a) {
        zerosAmount += (number1 - number1 % i) / i;
    }
    return zerosAmount;
};