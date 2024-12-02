let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    document.getElementById('result').value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += ` ${operator} `;
    document.getElementById('result').value = currentExpression;
}

function calculateResult() {
    try {
        currentExpression = eval(currentExpression.replace('÷', '/').replace('×', '*'));
        document.getElementById('result').value = currentExpression;
    } catch {
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    currentExpression = '';
    document.getElementById('result').value = '';
}
