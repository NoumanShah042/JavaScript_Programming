// closure example with arguments

function makeSize(size){

    return function(){

        document.body.style.fontSize = size + "px";
    }
}

function makeFont(font){

    return function(){

        document.body.style.fontFamily = font;
    }
}

let size20 = makeSize(20);
let size30 = makeSize(30);
let size40 = makeSize(40);

let fontInkFree = makeFont("Ink Free");
let fontConsolas = makeFont("consolas");
let fontCourierNew = makeFont("courier new");

size20();
size30();
size40();

fontInkFree();
fontConsolas();
fontCourierNew();