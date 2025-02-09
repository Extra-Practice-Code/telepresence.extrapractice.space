document.getElementById('menu-toggle')
.addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
});

document.querySelectorAll('.nav a').forEach(function(a) {
    a.addEventListener('click', closeNav);
});

function closeNav() {
    document.body.classList.remove("nav-open");
}


function clock() {
    var d = new Date();
    var t = d.toLocaleTimeString("nl-NL", {timeZone: "Europe/Amsterdam"});
    document.getElementById("currentTime").innerHTML = t;
  
  }
  
  document.addEventListener("DOMContentLoaded", () => {
      clock();
      setInterval(clock, 1000);
  });

  // Light/darkmode toggle
function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 var toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("change", function (event) {
    if (event.target.checked) {
        document.body.classList.toggle("dark-mode");
    } else {
        document.body.classList.toggle("dark-mode");
    }
});



// LIGHTBOX

var imagesLightbox = []; // Store images of the clicked section
var currentIndexLightbox = 0;

function openLightbox(image) {
  // Get the closest section of the clicked image
  var section = image.closest("article");

  // Select all images within that section
  imagesLightbox = Array.from(section.querySelectorAll(".img"));

  // Set the current image
  document.getElementById("thisLightbox").style.display = "block";
  document.querySelector(".lightbox img").src = image.src;

  // Set the current index within this section
  currentIndexLightbox = imagesLightbox.indexOf(image);
}

function showNextImage() {
  if (imagesLightbox.length === 0) return; // Avoid errors if empty

  currentIndexLightbox = (currentIndexLightbox + 1) % imagesLightbox.length;
  document.querySelector(".lightbox img").src = imagesLightbox[currentIndexLightbox].src;
}

function showPreviousImage() {
  if (imagesLightbox.length === 0) return; // Avoid errors if empty

  currentIndexLightbox = (currentIndexLightbox - 1 + imagesLightbox.length) % imagesLightbox.length;
  document.querySelector(".lightbox img").src = imagesLightbox[currentIndexLightbox].src;
}

document.querySelector(".lightbox__close").addEventListener("click", function () {
  document.getElementById("thisLightbox").style.display = "none";
});

document.querySelector(".lightbox").addEventListener("click", function (event) {
  if (event.target === this) {
    document.getElementById("thisLightbox").style.display = "none";
  }
});

document.addEventListener("keydown", function (event) {
  if (document.getElementById("thisLightbox").style.display === "block") {
    if (event.key === "ArrowRight") {
      showNextImage();
    } else if (event.key === "ArrowLeft") {
      showPreviousImage();
    }
  }
});

// Attach event listeners to all images
document.querySelectorAll(".devices__item img").forEach(img => {
  img.addEventListener("click", function () {
    openLightbox(this);
  });
});
