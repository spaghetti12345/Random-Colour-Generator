function codeGenerator(){
    let x = Math.floor((Math.random()*225));
    let y = Math.floor((Math.random()*225));
    let z = Math.floor((Math.random()*225));
    let codeArr = [x, y, z];
    return codeArr;
}

function codeConverter(one,two,three){
    let x1 = Math.floor(one/16);
    let y1 = one%16;
    let x2 = Math.floor(two/16);
    let y2 = two%16;
    let x3 = Math.floor(three/16);
    let y3 = three%16;
    return [x1, y1, x2, y2, x3, y3];
}
function changeColor(){
    let colorA = codeGenerator()[0];
    let colorB = codeGenerator()[1];
    let colorC = codeGenerator()[2];
    //document.body.style.backgroundColor = `rgb(${colorA} ${colorB} ${colorC})`;
    document.getElementById("bg").style.backgroundColor = `rgb(${colorA} ${colorB} ${colorC})`;
    let hexcode = codeConverter(colorA, colorB, colorC);
    for (let i = 0; i < hexcode.length; i++){
        let n = hexcode[i];
        if (n == 10){
            hexcode[i] = "A";
        } else if (n == 11){
            hexcode[i] = "B";
        } else if (n == 12){
            hexcode[i] = "C";
        } else if (n == 13){
            hexcode[i] = "D";
        } else if (n == 14){
            hexcode[i] = "E";
        } else if (n == 15){
            hexcode[i] = "F";
        }      
    }
    const finalhex = hexcode.join("")
    document.getElementById("rgb").innerHTML = `rgb(${colorA}, ${colorB}, ${colorC})`;
    document.getElementById("hex").innerHTML = `#${finalhex}`;
}

let btn = document.getElementById("change-color");
btn.addEventListener("click", changeColor);




