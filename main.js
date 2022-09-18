function scrollToTop() 
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}

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