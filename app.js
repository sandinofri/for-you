function playLoveSong() {
  var loveSong = document.getElementById("loveSong");

  loveSong.play();
}

// ... kode lainnya

function getGreeting() {
  var date = new Date();
  var hour = date.getHours();
  var greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Selamat Pagi Juni sayang";
  } else if (hour >= 12 && hour < 15) {
    greeting = "Selamat Siang Juni sayang";
  } else if (hour >= 15 && hour < 18) {
    greeting = "Selamat Sore Juni sayang";
  } else {
    greeting = "Selamat Malam Juni sayang";
  }
  return greeting;
}

var greetingText = getGreeting();
var greetingElement = document.getElementById("greeting");
greetingElement.innerHTML = greetingText;

var images = ["OIP.jpg", "OIP(1).jpg", "OIP(2).jpg"];
var currentIndex = 0;
var slideInterval;

function showSlide() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[currentIndex].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide();
}

slideInterval = setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik

showSlide();
