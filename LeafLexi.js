var img_nbr = 1;
var slideImageEl = document.getElementById("slide_img");
var leftEl = document.getElementById("left_button");
var rightEl = document.getElementById("right_button");
var naviconEl = document.getElementById("header_dropdown_icon");


var switchImage = function(imgInt) {

    img_nbr=imgInt;

    switch(imgInt){

            case 1: slideImageEl.src = "Pictures/img_fjords_wide.jpg";
            break;

            case 2: slideImageEl.src = "Pictures/img_lights_wide.jpg";
            break;

            case 3: slideImageEl.src = "Pictures/img_mountains_wide.jpg";
            break;

            case 4: slideImageEl.src = "Pictures/img_nature_wide.jpg";
            break;    
    };
}

var incImgNbr = function() {
    img_nbr++;
    if(img_nbr>4){img_nbr=1};
    switchImage(img_nbr);
}

var decImgNbr = function() {
    img_nbr--;
    if(img_nbr<1){img_nbr=4};
    switchImage(img_nbr);
}

var showMenu = function() {
    document.getElementById("header_dropdown_content").classList.toggle("show");
}

window.setInterval(incImgNbr,5000);

leftEl.addEventListener("click",decImgNbr);
rightEl.addEventListener("click",incImgNbr);
naviconEl.addEventListener("click",showMenu);
