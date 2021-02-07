var slideCounter;
var scrollBreakpoint = 900;


function showMenu() {
    var x = document.getElementById('navigation').style;
    if (x.display === 'block') {
        x.display = 'none';
    } else {
        x.display = 'block';
    }
    
 
}
function navigationControl() {
    size = window.innerWidth;
    if (size > 600) {
        document.getElementById("navigation").style.display = "grid";
        document.getElementById("navigation").style.animation = "fadein 5s";
    }
    if (size < 600) {
        document.getElementById("navigation").style.display = "none";
        document.getElementById("navigation").style.animation = "none";
    }
}

function hide() {
    
    document.getElementById("loadAnimation").style.display = 'none';
    document.getElementById("body").style.animation = "fadein 2s";
   
    document.getElementById("body").style.animation = "fadein 2s";
    document.getElementById("body").style.animation = "fadein 2s";

}

function openSlideshow(currentSlide)
{
    slideCounter = currentSlide;
    var slideShow = document.getElementById('slideShow');
    slideShow.style.display = 'block';
    currentImage(slideCounter);

}
function hideSlideshow(x)
{
    slideCounter = 500;
    var temp = document.getElementById('currentImage');
    temp.src = '';
    x.style.display = 'none';
  
}
function contactMessage(form) {
    form.style.display = 'none';
    document.getElementById('thank').style.display = 'block'; 
    
}
function nextSlide() {
    slideCounter++;
    if (slideCounter === 21)
        slideCounter = 1;

    currentImage(slideCounter);
}

function previousSlide() {
    slideCounter--;
    if (slideCounter === 0)
        slideCounter = 20;

    currentImage(slideCounter);
}
function currentImage(index) {
    var x = document.getElementById('currentImage');

    switch (index) {
        case 1:
            x.src = './img/gallery/gallery_image_behind_tree.jpg';
            break;
        case 2:
            x.src = './img/gallery/gallery_image_berries.jpg';
            break;
        case 3:
            x.src = './img/gallery/gallery_image_bra.jpg';
            break;
        
        case 4:
            x.src = './img/gallery/gallery_image_drum.jpg';
            break;
        case 5:
            x.src = './img/gallery/gallery_image_feathers.jpg';
            break;
        case 6:
            x.src = './img/gallery/gallery_image_laying.jpg';
            break;
        case 7:
            x.src = './img/gallery/gallery_image_legs.jpg';
            break;
        case 8:
            x.src = './img/gallery/gallery_image_meditate.jpg';
            break;
        case 9:
            x.src = './img/gallery/gallery_image_blue.jpg';
            break;
        case 10:
            x.src = './img/gallery/gallery_image_shadows.jpg';
            break;
        case 11:
            x.src = './img/gallery/gallery_image_smoke_brighter.jpg';
            break;
        case 12:
            x.src = './img/gallery/gallery_image_smoke_low_light.jpg';
            break;
        case 13:
            x.src = './img/gallery/gallery_image_squat.jpg';
            break;
        case 14:
            x.src = './img/gallery/gallery_image_sun.jpg';
            break;
        case 15:
            x.src = './img/gallery/gallery_image_sun2.jpg';
            break;
        case 16:
            x.src = './img/gallery/gallery_image_tree.jpg';
            break;
        case 17:
            x.src = './img/gallery/gallery_image_vertical.jpg';
            break;
        case 18:
            x.src = './img/gallery/gallery_image_woman_sitting.jpg';
            break;
        case 19:
            x.src = './img/gallery/gallery_image_woman_standing.jpg';
            break;
        
        case 20:
            x.src = './img/gallery/gallery_image_camera.jpg';
            break;
    }
}

