function calculate() {
    const money = parseInt(sum.value);

    if (money % 2 == 1) {
        document.getElementById("result").value = "Данную сумму нельзя разменять указанными купюрами и монетой.";
    }
    else {
        num500 = parseInt(money / 500);
        res500 = `Количество купюр 500 руб.: ${num500}`;
        rem500 = money % 500;

        num100 = parseInt(rem500 / 100);
        res100 = `Количество купюр 100 руб.: ${num100}`;
        rem100 = rem500 % 100;

        num10 = parseInt(rem100 / 10);
        res10 = `Количество купюр 10 руб.: ${num10}`;
        rem10 = rem100 % 10;

        num2 = rem10 / 2;
        res2 = `Количество монет 2 руб.: ${num2}`;

        document.getElementById("result").value = `${res500}. ${res100}. ${res10}. ${res2}.`;

    }

}

const sum = document.getElementById("sum");

const elementCalculate = document.getElementById("calculate");
elementCalculate.addEventListener('click', calculate);
