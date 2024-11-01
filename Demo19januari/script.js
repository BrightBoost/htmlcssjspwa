function sayBlabla(inhoud) {
    if(!inhoud) {
        inhoud = document.getElementById("name").value;
        document.body.style.backgroundColor = inhoud;
    }
    alert(inhoud);
    
}
