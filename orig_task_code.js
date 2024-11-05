function calculate() {
    const A = parseInt(elementA.value);
    const B = parseInt(elementB.value);

    const answer = (A**2 + B**2)**(1/2)
    document.getElementById("result").value = answer

}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");

const elementCalculate = document.getElementById("calculate");
elementCalculate.addEventListener('click', calculate);