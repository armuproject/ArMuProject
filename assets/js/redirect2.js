var twrite = document.getElementById("typewrite");

var typewriter = new Typewriter(twrite, {
    loop: true,
    autoStart: true,
    delay: 75,
    cursor: "",
});

let write_delay = 150; // 60 sec

var mask = $(".welcome .mask");

typewriter
    /*.callFunction(() => {
        mask.removeClass("hide");
    })*/
    .typeString(`<span class="type">.</span>`)
    .pauseFor(write_delay)
    .deleteAll()
    /*.callFunction(() => {
        mask.addClass("hide");
    })*/
    .typeString(`<span class="type">..</span>`)
    .pauseFor(write_delay)
    .deleteAll()
    .typeString(`<span class="type">...</span>`)
    .pauseFor(write_delay)
    .deleteAll()
    .start();

$(document).on("mousemove", function (event) {
    var x = parseInt((event.clientX / window.innerWidth) * 100);
    var y = parseInt((event.clientY / window.innerHeight) * 100);

    if ($("body").width() > 900) {
        mask.css("--mouse-x", x + "%");
        mask.css("--mouse-y", y + "%");
    }
});

const swiper = new Swiper("#feedbacks_slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    spaceBetween: 30,
    slidesPerView: 2,
    speed: 100,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
    },
});
