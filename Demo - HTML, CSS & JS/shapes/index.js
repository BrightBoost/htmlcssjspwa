function showShape() {
    // dynamisch een class toevoegen aan de div
    let shape = document.getElementById("shape").value;
    let shapeDiv = document.getElementById("shapeDiv");
    shapeDiv.className = "";
    shapeDiv.classList.add(shape);

    // kleur toevoegen aan div
    let color = document.getElementById("color").value;
    shapeDiv.style.backgroundColor = color;

}