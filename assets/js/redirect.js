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
    .typeString(`<span class="type">.</span>`)
    .pauseFor(write_delay)
    .typeString(`<span class="type">.</span>`)
    .pauseFor(write_delay)
    .deleteAll()
    .start();

