// Hide header and adjust image margin on scroll
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var image = document.querySelector('.image');

    if (window.scrollY > 0) {
        header.classList.add('hidden');
        image.style.marginTop = '10px'; // Adjust this value as needed
    } else {
        header.classList.remove('hidden');
        image.style.marginTop = '60px'; // Adjust this value as needed
    }
});



var slideIndex = 0; // Ubah indeks awal menjadi 0
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n === undefined) { // Tambahkan penanganan jika n tidak diberikan
        n = ++slideIndex;
    }
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Menetapkan timeout untuk menjalankan fungsi plusSlides setiap 2 detik
setInterval(function() { // Menggunakan setInterval agar slideshow berjalan secara otomatis setiap 2 detik
    plusSlides(1);
}, 10000); // 2000 milidetik = 2 detik



