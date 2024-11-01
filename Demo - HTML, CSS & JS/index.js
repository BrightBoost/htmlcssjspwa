function printHoiInConsole() {
    // get the value that's entered in the input box
    let name = document.getElementById("name").value;
    let greeting = "hoi " + name;
    console.log(greeting);

    let color = document.getElementById("color").value;

    // haal het html element voor de message paragraph op
    let message = document.getElementById("message");
    // adjust layout with js
    message.style.color = color;
    // set innerhtml
    message.innerHTML = greeting;
}