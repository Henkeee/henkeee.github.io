var slideImgNbr = 0;
showDivs(slideImgNbr);

function changeDivs(n) {
    showDivs(slideImgNbr += n);
}

function showDivs(n) {
    slideImgNbr=n;
    var i;
    var slides = document.getElementsByClassName("slide");
    if(n>slides.length-1) {
        slideImgNbr=0;
    } 
    if (n<0) {
        slideImgNbr=slides.length-1;
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slideImgNbr].style.display = "block";
    
}