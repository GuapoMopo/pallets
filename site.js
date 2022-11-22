

// (function() {
//     window.onmousemove = (e) => {
//         console.log(e)
//     }
// })();

const gallery = document.getElementById("wrapper");

window.onmousemove = (e) => {
    const xVal = e.clientX;
    const yVal = e.clientY;

    const xDecimal = xVal / window.innerWidth;
    const yDecimal = yVal / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth;
    const maxY = gallery.offsetHeight - window.innerHeight;

    const panX = (maxX+300) * xDecimal * -1;
    const panY = (maxY+300) * yDecimal * -1;
   // console.log(panX, panY)

    //gallery.style.transform = `translate(${panX}px, ${panY}px)`;

    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    },
    {
        duration: 4000,
        fill: 'forwards',
        easing: 'ease'
    }
    )
}