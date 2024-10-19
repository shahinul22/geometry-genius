function calculateRectangleArea(){
    const lenghtInput = document.getElementById('rectangle-length');
    const length = parseFloat(lenghtInput.value);
    // console.log(length);

    const width = parseFloat(document.getElementById('rectangle-width').value);
    // console.log(width);

    const rectangleArea = length*width;

    console.log(rectangleArea);
    document.getElementById('ractangle-area').innerText = rectangleArea;

    lenghtInput.value='';
    document.getElementById('rectangle-width').value='';


}