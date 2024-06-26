const output = document.getElementById("output");

// Display the selceting numbers
const appendToDisplay = (input) => {
    output.value += input;
}

// Clear the Calculaor
const clearDisplay = () => {
    output.value = ""
}

// Calcutaing the Values
const calculate = () => {
    try {
        if (eval(output.value) == undefined || isNaN(eval(output.value))) {
            window.alert("Please Enter a Valid Value to Continue.")
            throw new Error("Undefined Error!");
        } else {
            output.value = eval(output.value);
        }
    } catch (error) {
        output.value = "ERROR";
    }
}