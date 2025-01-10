function performOperation(operation){
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result;

    if (!isNaN(num1) && !isNaN(num2)) {
        switch(operation){
            case "addition":
                result = add(num1,num2);
                break
            case "multiplication":
                result = multiply(num1,num2);
                break
            case "division":
                result = divide(num1,num2);
                break;
            default:
                result = "Invalid operation"
        }
        

        displayResult(result)
    } else {
        displayResult("Please enter valid numbers")
    }
}

function add(a,b){
    return a + b;
}

function multiply(a,b){
    debugger;
    return a * b;
}

function divide(a,b){
    if (b == 0){
        return "Can't divide by zero"
    }
    return a / b;
}

function displayResult(result){
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result is: ${result}`;
}