
// common function section 
function inputData(elementId) {
    const value = parseFloat(document.getElementById(elementId).value);
    if (isNaN(value)) {
        console.log("Invalid input for:", elementId);  // Debugging step
    }
    return value;
}

function displayArea(area, areaId, areaUnitId){
    const areaSpan = document.getElementById(areaId);
    const areaUnit = document.getElementById(areaUnitId);
    if(!isNaN(area)){
        areaSpan.innerText = area.toFixed(4);
        areaUnit.style.display ='inline';
    }
    else{
        areaSpan.innerText = '';
        areaUnit.style.display ='none';
    }
}
// triangle area 
function triangleArea(){
    const base = inputData('triangle-base');
    const height = inputData('triangle-height');
    const area = .5 * base * height;
    displayArea(area, 'triangle-area', 'triangle-area-unit');
}
// rectangle area 
function rectangleArea(){
    const base = inputData('rectangle-base');
    const height = inputData('rectangle-height');
    const area = base * height;
    displayArea(area, 'rectangle-area', 'rectangle-area-unit');
}
// parallelogram area 
function parallelogramArea(){
    const base = inputData('parallelogram-base');
    const height = inputData('parallelogram-height');
    const area = base * height;
    displayArea(area, 'parallelogram-area', 'parallelogram-area-unit');
}
// rhombus area calculation 
function rhombusArea(){
    const d1 = inputData("rhombus-d-1");
    const d2 = inputData('rhombus-d-2');
    const area = .5 * d1 * d2;

    displayArea(area, 'rhombus-area', 'rhombus-area-unit');

}
// pentagon area 
function pentagonArea(){
    const apotem =   inputData('pentagon-apothem');
    const perimeter  = inputData('pentagon-perimeter');
    const area = .5 * apotem * perimeter;
    displayArea(area, 'pentagon-area', 'pentagon-area-unit');
}
// ellipse area 
function ellipseArea(){
    const minorAxis = inputData('ellipse-minor-axis');
    const majorAxis = inputData('ellipse-major-axis');
    const area = 3.1416 * minorAxis * majorAxis;
    displayArea ( area, 'ellipse-area', 'ellipse-area-unit');
}


