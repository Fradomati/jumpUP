window.onload = function() {
    Game.start()
}

document.addEventListener("keydown", function (e){
    if(e.keyCode == 13){
        document.getElementById("presentation").style.display = "none"
    }
})

