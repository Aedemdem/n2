/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// anim
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

let height = screen.height;
document.getElementById("flip-book").innerHTML = height + "px";


window.onbeforeunload = function (e) {
    var message = "Buru buru amat, mau udahan ?";
    var firefox = /Firefox[\/\s](\d+)/.test(navigator.userAgent);
    if (firefox) {
        //Add custom dialog
        //Firefox does not accept window.showModalDialog(), window.alert(), window.confirm(), and window.prompt() furthermore
        var dialog = document.createElement("div");
        document.body.appendChild(dialog);
        dialog.id = "dialog";
        dialog.style.visibility = "hidden";
        dialog.innerHTML = message;
        var left = document.body.clientWidth / 2 - dialog.clientWidth / 2;
        dialog.style.left = left + "px";
        dialog.style.visibility = "visible";
        var shadow = document.createElement("div");
        document.body.appendChild(shadow);
        shadow.id = "shadow";
        //tip with setTimeout
        setTimeout(function () {
            document.body.removeChild(document.getElementById("dialog"));
            document.body.removeChild(document.getElementById("shadow"));
        }, 0);
    }
    return message;
};