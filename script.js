
document.querySelector(".menu-button").onclick =
    function (e) {
        document.querySelector(".menu").classList.toggle("hide")

    }
let urls=[
    "https://www.youtube.com/embed/UItWltVZZmE",
    "https://www.youtube.com/embed/MTU4iCDntjs",
    "https://www.youtube.com/embed/R0Z7Hzuo5HE"
]
let links=document.querySelectorAll(".category-link") 
for (let i=0; i<3;i++){
    links[i].onclick=function(e){
        e.preventDefault()
        let iframe=document.querySelector(".frame iframe")
        let frame=document.querySelector(".frame")
        iframe.setAttribute("src",urls[i])
        frame.classList.remove("hide")
    }

}   