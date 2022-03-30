function myFunction() {
    let text;
    if (confirm("Press the button") == true) {
        text = "Done";
    } else {
        text = "Bruh";
    }
    document.getElementById("demo").innerHTML = text;
}
