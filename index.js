

let icon = document.querySelector("#icon");
icon.addEventListener("click" , () => {
    let icon = document.querySelector(".toggt");
    icon.classList.toggle("toggt2") 

    
})


let hover = document.querySelector(".image-container_section3");

hover.addEventListener('mouseover' , () => {

   // let image = "url('https://eecenvironmental.com/wp-content/uploads/2017/08/GIS-1024x524.jpg')"
    let d = document.querySelector("#section3_data_div1");
    d.style.background = "rgba(0, 0, 0, 0.4)";
   // d.style.height ="400px";
   // d.style.width = "650px";
   

   
     



    
    // d.style.opacity = "0.5"
})

hover.addEventListener('mouseout' , () => {
    let d = document.querySelector("#section3_data_div1");
    d.setAttribute("style" , "")
})