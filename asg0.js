// DrawRectangle

let ctx 
let canvas

function main() {
// Retrieve <canvas> element
    canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    
    // Get the rendering context for 2DCG
    ctx = canvas.getContext('2d');

    // Draw a blue rectangle
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0 , canvas.width, canvas.height); // Fill a rectangle with the color
}


function drawVector(v,color) {

    ctx.strokeStyle = color

    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200+v.elements[0]*20, 200-v.elements[1]*20);
    ctx.stroke();

}

function handleDrawEvent(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0 , canvas.width, canvas.height);

    let v1x = document.getElementById("V1x").value
    let v1y = document.getElementById("V1y").value
    let v2x = document.getElementById("V2x").value
    let v2y = document.getElementById("V2y").value


    var v1 = new Vector3([v1x,v1y,0]);
    var v2 = new Vector3([v2x,v2y,0]);


    drawVector(v1,"red")
    drawVector(v2,"blue")
}

function handleOperationEvent(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0 , canvas.width, canvas.height);


    let v1x = document.getElementById("V1x").value
    let v1y = document.getElementById("V1y").value
    let v2x = document.getElementById("V2x").value
    let v2y = document.getElementById("V2y").value


    var v1 = new Vector3([v1x,v1y,0]);
    var v2 = new Vector3([v2x,v2y,0]);
    var v3;
    var v4;

    drawVector(v1,"red")
    drawVector(v2,"blue")

    let S = document.getElementById("scale").value
    let operation = document.getElementById("operation").value

    switch(operation){
        case"add":
            v3 = v1
            v3.add(v2)
            drawVector(v3,"green")
            break;
        case"sub":
            v3 = v1
            v3.sub(v2)
            drawVector(v3,"green")
            break;
        case"div":
            v3 = v1
            v4 = v2
            v3.div(S)
            v4.div(S)
            drawVector(v3,"green")
            drawVector(v4,"green")
            break;
        case"mul":
            v3 = v1
            v4 = v2
            v3.mul(S)
            v4.mul(S)
            drawVector(v3,"green")
            drawVector(v4,"green")
            break;
        case"magnitude":
            console.log("Magnitude V1: " + v1.magnitude());
            console.log("Magnitude V2: " + v2.magnitude());
            break;
        case"normalize":
            v3 = v1
            v4 = v2
            drawVector( v3.normalize(),"green")
            drawVector(v4.normalize(),"green")
            break;
        case"angleBetween":
            console.log("Angle: " + angleBetween(v1,v2));
            break;
        case"areaTriangle":
            console.log("Area of Triangle: " + areaTriangle(v1,v2));
            break;                                                    
                                                    
    }

    
}

function angleBetween(v1, v2){
    var x =Vector3.dot(v1.normalize(),v2.normalize())
    return Math.acos( x ) * (180/Math.PI);
}

function areaTriangle(v1, v2){
    return Vector3.cross(v1,v2).magnitude() / 2;
}


    