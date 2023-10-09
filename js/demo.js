// Solves for x but the equation must not contain symbols [/,*]

let eq = "", operators = "/*+-=";
// Returns a list of grouped data
function extractQuotient (equation) {
    let quotients = [[], [], []],
        symb = "/*", expression = "",
        isAfter = false;

    for (let i=0; i<equation.length; i++) {
        if (symb.includes(equation[i])) {
            return null;
        } else if ( i>0 && operators.includes(equation[i]) || equation.length-1 == i) {
            if ( equation.length-1 == i ) {
                expression += equation[i];
            }

            if (expression.includes("=")) {
                expression = expression.slice(1, expression.length)
            }

            valueAndGroup = getValue(expression, isAfter);
            console.log(valueAndGroup)
            quotients[valueAndGroup[1]].push(valueAndGroup[0]);
            expression = "";

            if (equation[i] === "=") {
                isAfter = true;
            }
        }

        expression += equation[i];
        console.log(expression)
    }

    return quotients;
}

function getValue(exp, isAfterEqualSign) {
    let value = "", symb="";
    for (let i=0; i<exp.length; i++) {
        if ((parseInt(exp[i]) + "") === "NaN" && !operators.includes(exp[i])) {
            symb += exp[i];
            continue;
        }

        value += exp[i];
    }
    (value.length === 0) ? value = 1 : (operators.includes(value)) ? value += "1"  : value;

    return [(isAfterEqualSign ? parseInt(value) * -1 : parseInt(value)), (symb.length===1 ? 1 : symb.length>1 ? 0 : 2)];
}

console.log(extractQuotient("2xs+4x+4=0"))