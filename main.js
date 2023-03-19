//reusable nav bar
// fetch('nav.html')
// .then(res => res.text())
// .then(text => {
//     let oldelem = document.querySelector("div#replace_with_navbar");
//     let newelem = document.createElement("div");
//     if (oldelem != null)
//     {
//         newelem.innerHTML = text;
//         oldelem.parentNode.replaceChild(newelem, oldelem);
//     }
// })

//reusable footer
fetch('footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("div#replace_with_footer");
    let newelem = document.createElement("div");
    if (oldelem != null)
    {
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    }
})

//sticky btn back to top
let btnToTop = document.getElementsByClassName("sticky-right").item(0)
if (!btnToTop.firstChild) 
{
    let btnImg = document.createElement("img");
    // btnImg.src = "img/amputee.png";
    btnImg.src = "img/bat2.png";
    btnToTop.appendChild(btnImg);
}

function scrollToTop() 
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}