var dropdowns = document.getElementsByClassName("dropdown_content");

function showDropdown(n){
    
    switch(n){
              
        case 1:
            document.getElementById("header_dropdown_content").classList.toggle("show");
            break;
        
        default:
            console.log("switch default")
            break;
    }
}
        
document.onclick = function(event) {
    if(!event.target.matches('.dropdown_button')){
        var i;
        for(i=0;i<dropdowns.length;i++){
           dropdowns[i].classList.remove("show"); 
        }
    }  
        
}        