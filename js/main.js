let navBtn = document.getElementById("navbtn");
let navurls = document.getElementById("navurls")
let logo = document.getElementById("logo")

navBtn.addEventListener('click',()=>{

    if(logo.style.display !== "none"){
        logo.style.display = "none";
        logo.style.marginLeft="-200px";
        navurls.style.display="flex";
        navurls.style.marginRight="60px"
    }
    else{
        logo.style.display = "block";
        logo.style.marginLeft = "0px";
        navurls.style.display="none";
        navurls.style.marginRight="100px"
    }
   
})