//reusable nav bar
fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("div#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

//reusable footer
fetch('footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("div#replace_with_footer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

function scrollToTop() 
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}

let imgIndex = 0
function changeImage(el, delta)
{
    let carousel = el.parentElement
    let imgElements = carousel.getElementsByTagName("img")

    if (delta > 0) //index++
    {
        imgIndex = (imgIndex + 1 > imgElements.length - 1)? 0 : (imgIndex + 1);
        // imgElements.item(imgIndex).style.transform = "translateX(100%)"
    }
    else //index--
    {
        imgIndex = (imgIndex - 1 < 0)? (imgElements.length - 1) : (imgIndex - 1);
        // imgElements.item(imgIndex).style.transform = "translateX(-100%)"
    }
    
    console.log("delta = " + delta + ", img index = " + imgIndex + " out of " + imgElements.length)
    //get cur index (check style.display)?
    //change index n display
    
}