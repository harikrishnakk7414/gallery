 var allImg = document.images;
function allImgTag(){
    for(i=0;i<=allImg.length;i++){
        allImg[i].src=`./assets/${i}.jpg`;
        allImg[i].style.width="400px"
        allImg[i].style.height="290px"
        allImg[i].addEventListener("click",function(){
            document.getElementById("bigImage").style.display="flex"
        })
    }
}
allImgTag();

var globalSrc;
function passSrc(urlOfimg){
    document.getElementById("bigimg").style.backgroundImage=`url(${urlOfimg})`
    globalSrc=urlOfimg;
}
//close window

function Closewindow(){
    document.getElementById("bigImage").style.display="none"
    document.getElementById("galleryImageEdit").style.display="none"
}

function openEditWindow(){
    document.getElementById("galleryImageEdit").style.display="flex"
    document.getElementById("image").style.backgroundImage=`url(${globalSrc})`
}

function imageEdit(){
    var blurValue = document.getElementById("blur").value
    var brightnessValue = document.getElementById("brightness").value
    var contrastValue = document.getElementById("Contrast").value
    var grayscaleValue = document.getElementById("Grayscale").value
    var HuerotateValue = document.getElementById("Hue-rotate").value
    var InvertValue = document.getElementById("Invert").value
    var OpacityValue = document.getElementById("Opacity").value
    var saturateValue = document.getElementById("Saturate").value
    var sepiaValue = document.getElementById("sepia").value
    
    document.getElementById("image").style.filter = `blur(${blurValue}px) 
    brightness(${brightnessValue}%) Contrast(${contrastValue}%)
    Grayscale(${grayscaleValue}%) Hue-rotate(${HuerotateValue}deg) 
    Invert(${InvertValue}%) Opacity(${OpacityValue}%) Saturate(${saturateValue}%)
    sepia(${sepiaValue}%)`

    var rotateXValue = document.getElementById("rotatez").value
    var rotateYValue = document.getElementById("rotatex").value
    var rotateZValue = document.getElementById("rotatey").value
    var ScaleXValue = document.getElementById("scalex").value
    var ScaleYValue = document.getElementById("scaley").value
    var skewXValue = document.getElementById("skewx").value
    var skewYValue = document.getElementById("skewy").value
    var translateXValue = document.getElementById("translatex").value
    var translateYValue = document.getElementById("translatey").value;    
    document.getElementById("image").style.transform =`rotatex(${rotateXValue}deg) 
    rotatey(${rotateYValue}deg) rotate(${rotateZValue}deg)
    scalex(${ScaleXValue}) scaley(${ScaleYValue}) 
    skewx(${skewXValue}deg) skewy(${skewYValue}deg) translatex(${translateXValue}px)
    translatey(${translateYValue}px)`
}
