// hamburger menu show / hide
document.querySelector(".menu-button").onclick =
    function (e) {
        document.querySelector(".menu").classList.toggle("hide")

    }
    //videos links 
let urls=[
    "https://www.youtube.com/embed/0-vBarJrrOk",
    "https://www.youtube.com/embed/MTU4iCDntjs",
    "https://www.youtube.com/embed/R0Z7Hzuo5HE"
]
// assign links to src of iframe tag
let links=document.querySelectorAll(".category-link") 
// iterate over category links.
for (let i=0; i<3;i++){
    links[i].onclick=function(e){
        e.preventDefault()
        let iframe=document.querySelector(".frame iframe")
        let frame=document.querySelector(".frame")       
        iframe.setAttribute("src",urls[i])
        // show iframe parent
        frame.classList.remove("hide")
    }

} 
//  hide video frame 
document.querySelector(".frame").onclick = function(e){
    document.querySelector(".frame").classList.add("hide")
    // remove src to stop video from playing    
    let iframe=document.querySelector(".frame iframe")      
    iframe.setAttribute("src","#")
   
} 