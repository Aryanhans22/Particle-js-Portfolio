$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Validation logic
        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const phoneInput = document.querySelector('input[name="phone"]');
        const messageInput = document.querySelector('textarea[name="message"]');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = subjectInput.value.trim();
        const message = messageInput.value.trim();

        // Regular expression for checking if the name contains only alphabets
        const nameRegex = /^[A-Za-z\s]+$/;

        // Regular expression for checking if the email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;

        // Check if name is alphabetic
        if (!nameRegex.test(name)) {
            alert('Please enter a valid name (only alphabets are allowed).');
            isValid = false;
            nameInput.focus();
            return;
        }
        //phone
        phoneInput.addEventListener("input", function() {
            if (phoneInput.value.length > 10) {
              phoneInput.value = phoneInput.value.slice(0, 10);
            }
          });

        // Check if email is valid
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
            emailInput.focus();
            return;
        }

        // Check if all fields are filled
        if (name === '' || email === '' || phone === '' || message === '') {
            alert('Please fill in all fields.');
            isValid = false;
            return;
        }

        // If all fields are valid and filled, submit the form
        if (isValid) {
            // Submit the form
            form.submit();
            // Show a thank you message after 3 seconds
            setTimeout(function() {
                alert('Thank you for submitting!');
                // Reset the form
                form.reset();
            }, 2000);
        }
    });
});
