/*
drawRectangle(3, 5);

it will console log
***
* *
* *
* *
***

 */
function drawRectangle(width, height) {
    // console.log("insert code here");
    drawRectangleTop(width);
    drawRectangleMiddle(width, height);
    drawRectangleTop(width);
}

function drawRectangleTop(width) {
    let output = "";
    for (let i = 0; i < width; i++) {
        output += "*";
    }
    console.log(output);
}


function drawRectangleMiddle(width, height) {
    // output a single line of the middle
    for (let i = 0; i < (height - 2); i++) {
        drawRectangleMiddleLine(width);
    }
}

function drawRectangleMiddleLine(width) {
    let output = "";
    for (let i = 0; i < width; i++) {
        if(i === 0 || i === (width - 1)) {
            output += "*";
        } else {
            output += " ";
        }
    }
    console.log(output);
}

drawRectangle(3, 5);
