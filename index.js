

let icon = document.querySelector("#icon");
icon.addEventListener("click" , () => {
    let icon = document.querySelector(".toggt");
    icon.classList.toggle("toggt2") 

    
})


let hover = document.querySelector(".image-container_section3");

hover.addEventListener('mouseover' , () => {
    let d = document.querySelector(".section3_datas2");
    d.style.backgroundImage = "https://thumbs.dreamstime.com/b/map-mountain-peaks-tops-coloured-geospatial-data-gis-usage-digital-elevation-model-gis-product-made-305203475.jpg"
})