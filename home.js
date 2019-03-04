var slideIndex=0;
addEventListener('DOMContentLoaded',carousel);

function carousel(n) {
    var i;

    //get array of div elements that contain carousel images
    var carouselImages = document.getElementsByClassName('slideImg');

    //make all images invisible
    for(i = 0; i < carouselImages.length; i++) {
        carouselImages[i].style.display = "none";
    }

    slideIndex++;
    //adjust wrap index back to beginning when end is reached
    if (slideIndex > carouselImages.length) {
        slideIndex = 1;
    }

    carouselImages[slideIndex-1].style.display = "block";
    
    //fade in the label here
    var divChildren = carouselImages[slideIndex-1].children;
    var m;
    for(m = 0; m < divChildren.length; m++) {
        if(divChildren[m].className == 'label') {
            divChildren[m].style.opacity = 0;
            var j;
            setTimeout(fadeIn,500,divChildren[m],0);
            setTimeout(fadeOut,3500,divChildren[m],1);
        }
    }
    /*
    var j;
    */

    //call carousel again after 4.5 seconds
    console.log("a");
    setTimeout(carousel, 5000);
    console.log("b");

}

function fadeIn(element, opacity) {
    if (opacity < 1) {
        opacity += .01;
        setTimeout(fadeIn,10,element,opacity);
    }
    element.style.opacity = opacity;
}

function fadeOut(element, opacity) {
    if(opacity > 0) {
        opacity -= .01;
        setTimeout(fadeOut,10,element,opacity);
    }
    element.style.opacity = opacity;
}