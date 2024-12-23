$(document).ready(function() {
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });

    // Change navbar background on scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('navbar-scrolled');
      } else {
        $('.navbar').removeClass('navbar-scrolled');
      }
    });

    var homeSection = document.getElementById("home");

    window.addEventListener("scroll", function () {
      var scrollPosition = window.scrollY;

      if (scrollPosition > homeSection.offsetTop) {
        homeSection.classList.add("scrolled");
      } else {
        homeSection.classList.remove("scrolled");
      }
    });

    $('.other-products-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1, 
            arrows: false,  
          }
        }
      ]
    });

    $('.deskripsi-btn').on('click', function () {
      var imageBox = $(this).closest('.image-box');
      var productName = imageBox.find('.card-title').text();
      var productPrice = imageBox.find('.card-text').text().replace('Price: ', '');
      var productDesc = imageBox.find('.card-desc').html();
      
      $('#deskripsiModalLabel1').text('Deskripsi ');
      $('#deskripsiModal1 .modal-body').html(
        '<p>Nama Barang: ' + productName + '</p>' +
        '<p>Harga: ' + productPrice + '</p>' +
        '<p>' + productDesc + '</p>'
      );
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll('.animate__animated');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const inAnimation = entry.target.getAttribute('data-animate-in'); 
      const outAnimation = entry.target.getAttribute('data-animate-out'); 
      
      if (entry.isIntersecting) {
        entry.target.classList.add(inAnimation); 
        if (outAnimation) {
          entry.target.classList.remove(outAnimation);
        }
      } else {
        if (outAnimation) {
          entry.target.classList.add(outAnimation);
        }
        entry.target.classList.remove(inAnimation);
      }
    });
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});
