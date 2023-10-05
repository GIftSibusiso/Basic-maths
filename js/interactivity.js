const button = document.querySelector("button"),
      operators = ["Plus", "Minus", "Mult", "Divide"],
      operator = {
        "Plus": "+",
        "Minus": "-",
        "Divide": "÷", 
        "Mult": "×"
      };

for ( let i=0; i<10; i++ ) {
    document.querySelector(".btn"+i).addEventListener("click", () => {
        document.querySelector("p").innerHTML += i;
    })
}

document.querySelector(".btnC").addEventListener("click", () => {
    document.querySelector("p").innerHTML = "";
})

for ( let i=0; i<4; i++ ) {
    document.querySelector(".btn"+operators[i]).addEventListener("click", () => {
        document.querySelector("p").innerHTML += operator[operators[i]];
    });
}

document.querySelector(".btnDel").addEventListener("click", () => {
    let text = document.querySelector("p").innerText,
        txtLen = text.length;

    if (txtLen>1) {
        document.querySelector("p").innerHTML = text.slice(0, txtLen-1);
    } else {
        document.querySelector("p").innerHTML = "";
    }
})

document.querySelector(".btnEqual").addEventListener("click", () => {
    console.log(validateEquation())
    document.querySelector("p").innerHTML = eval(validateEquation())
})

document.querySelector(".btnDot").addEventListener("click", function () {
    let text = document.querySelector("p").innerText;
    if (text[text.length-1] !== "." && !lastValue(text).includes("."))
    document.querySelector("p").innerHTML += ".";
})

function isLastInputOperator( expression ) {
    return operators.includes(expression[expression.length-1]);
}

function lastValue(equation) {
    let value = "";

    for (let i=equation.length-1; i>=0; i--){
        if ("+-×÷".includes(equation[i] )) {
            break;
        }
        value = equation[i] + value;
    }
    return value;
}

function validateEquation() {
    let eq = "";
    const equation = document.querySelector("p").innerText,
        operatorMapper = { "÷": "/", "×": "*" };

    for (let i=0; i<equation.length; i++) {
        if ("÷×".includes(equation[i])) {
            eq += operatorMapper[equation[i]];
            continue;
        }

        eq += equation[i];
    }

    return eq
}