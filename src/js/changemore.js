function changemoreenter () {
    this.style.visibility = "hidden";
    this.nextElementSibling.style.display = "block"
}
function changemoreleave() {
    this.style.display = "none";
    this.previousElementSibling.style.visibility = "visible";
}