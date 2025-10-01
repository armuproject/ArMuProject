$("#scroll_down").on("click", function () {
    $("html, body").scrollTop($(".cloud-info").offset().top);
});

$(".mobile-menu-btn").on("click", function () {
    $("body").addClass("disabled");
    $(".mobile-menu").fadeIn("fast");
});
$(".mobile-menu a").on("click", function () {
    $("body").removeClass("disabled");
    $(".mobile-menu").fadeOut("fast");
});
$(".mobile-menu .close").on("click", function () {
    $("body").removeClass("disabled");
    $(".mobile-menu").fadeOut("fast");
});

var twrite = document.getElementById("typewrite");

var typewriter = new Typewriter(twrite, {
    loop: true,
    autoStart: true,
    delay: 75,
    cursor: "",
});

let write_delay = 1000; // 60 sec

var mask = $(".welcome .mask");

typewriter
    /*.callFunction(() => {
        mask.removeClass("hide");
    })*/
    .typeString(`<span class="type">участники</span>`)
    .pauseFor(write_delay)
    .deleteAll()
    /*.callFunction(() => {
        mask.addClass("hide");
    })*/
    .typeString(`<span class="type blue">участники</span>`)
    .pauseFor(write_delay)
    .deleteAll()
    .start();




