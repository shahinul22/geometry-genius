function calculateTriangleArea() {
    // base
    const triangleBaseInput = document.getElementById('triangle-base');
    const base = parseFloat(triangleBaseInput.value);

    // height
    const triangleHeightInput = document.getElementById('triangle-height');
    const height = parseFloat(triangleHeightInput.value);

    // area calculation
    const area = 0.5 * base * height;

    // display area
    const triangleAreaSpan = document.getElementById('triangle-area');
    const triangleAreaUnit = document.getElementById('triangle-area-unit');

    if (!isNaN(area) && base > 0 && height > 0) {
        triangleAreaSpan.innerText = area.toFixed(2);  // limit to 2 decimal places
        triangleAreaUnit.style.display = "inline";     // show the cm² label
    } else {
        triangleAreaSpan.innerText = '';               // clear the area value
        triangleAreaUnit.style.display = "none";       // hide the cm² label
    }
}
