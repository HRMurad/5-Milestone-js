// ........................
function triangleBtn() {
    // call base input
    let inputBase = getInputValueById('inputBase');
    let inputHeight = getInputValueById('inputHeight');

    // operation
    let area = 0.5 * inputBase * inputHeight;
    
    // call output area
    setElementById('outputAreaTriangle', area);
    // 
    if (isNaN(inputBase) || isNaN(inputHeight)) {
        alert('please enter valid number');
        return;
    }
        // add new data into calculation area
        addNewCalculatorArea('triangle', area)

}
// ............................
function rectangleBtn() {
    // call input with
    let inputWight = getInputValueById('inputWight');
    let inputLength = getInputValueById('inputLength');

    // operation
    let area = inputWight * inputLength;

    // call output area
    setElementById('outputAreaRectangle', area);

    // add new data into calculation area
        addNewCalculatorArea('rectangle', area)
}

// ...............................

function parallelogramBtn() {
    let inputParallelogramBase = getInputValueById('inputParallelogramBase');
    let inputParallelogramHeight = getInputValueById('inputParallelogramHeight');
    // operation
    let area = inputParallelogramBase * inputParallelogramHeight;
    // call output by using setFunction
    setElementById('outputParallelogram', area);

    // add new data into calculation area
        addNewCalculatorArea('param:', area)
}