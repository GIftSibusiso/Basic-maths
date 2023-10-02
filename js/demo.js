const operators = ["+", "-", "*", "/"]

function isLastInputOperator( expression ) {
    return operators.includes(expression[expression.length-1]);
}

