function greet() {
    alert("hallo!");
}

function changeBackgroundColorAndHideElement() {
    let color = document.getElementById("kleur").value;
    // achtergrond naar opgegeven kleur
    document.body.style.backgroundColor = color;
    // hide the divs
    let divs = document.getElementsByTagName("div");
    for(let div of divs) {
        div.style.display = "none";
    }

}