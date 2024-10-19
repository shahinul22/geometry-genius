
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
function ellipseArea() {
    const apotem =   inputData('ellipse-semi-major-axis');
    const perimeter  = inputData('ellipse-semi-minor-axis');
    const area = .5 * apotem * perimeter;
    displayArea(area, 'ellipse-area', 'ellipse-area-unit');


    // const majorAxis = inputData('ellipse-semi-major-axis');
    // const minorAxis = inputData('ellipse-semi-minor-axis');

    // // Log the values to check if they're correctly retrieved
    // console.log("Major Axis:", majorAxis);
    // console.log("Minor Axis:", minorAxis);

    // const area = 3.1416 * majorAxis * minorAxis;
    // console.log("Area:", area);  // Log the area for debugging
    

    // displayArea(area, 'ellipse-area', 'ellipse-area-unit');
}
