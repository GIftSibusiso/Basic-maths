const button = document.querySelector("button"),
      operators = ["+", "-", "*", "/"];

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
        document.querySelector("p").innerHTML += operators[i];
        console.log(document.querySelector("p").innerHTML);
    });
}

function isLastInputOperator( expression ) {
    return operators.includes(expression[expression.length-1]);
}

