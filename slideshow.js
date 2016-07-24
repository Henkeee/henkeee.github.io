//index for displayed division
var slideDivNbr = 0;
//slide Elements
var slides = document.getElementsByClassName("slide");
//navigation dot Elements
var dots = document.getElementsByClassName("dot");

//displays initial slide
showDivs(slideDivNbr);



//returns index for displayed division, currently unused
function checkActive(){
    return slideDivNbr;
}

//changes displayed division in slideshow, d = number of steps
function changeDivs(d) {
    showDivs(slideDivNbr += d);
}

//displays division with index n, loops within number of slides
function showDivs(n) {
    slideDivNbr=n;
    
    if(n>slides.length-1) {
        slideDivNbr=0;
    } 
    if (n<0) {
        slideDivNbr=slides.length-1;
    }
    //hide all slides
    var i;
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    //display slide n
    slides[slideDivNbr].style.display = "block";
    
    //highlight active dot
    highlightDot(slideDivNbr);
}

//highlights active dot
function highlightDot(n) {
    var i;
    for(i=0;i<dots.length;i++) {
        dots[i].classList.remove("dot_active");
    }
    dots[n].classList.toggle("dot_active");
}

