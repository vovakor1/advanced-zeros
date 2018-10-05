module.exports = function getZerosCount(number, base) {
    let zerosAmount = 0;
    let number1 = number;
    let system = base;
    let a = 0;
    let b = 0;

    if( Math.sqrt(base)%1 === 0){
        a = Math.sqrt(base);
    }
   else
    {
        for (let i = 2; i <= system; i++) {
            while (system % i === 0) {
                console.log(i);
                system = system / i;
                b++
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