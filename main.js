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

function changeImage(el, delta)
{
    let carousel = el.parentElement
    let imageElements = carousel.getElementsByTagName("img")
    //console.log(imageElements.item(0))

    //get cur index (check style.display)?
    //change index n display
    
}