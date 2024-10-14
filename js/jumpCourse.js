function redirectToCourse() {
    var select = document.getElementById("course-select");
    var selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}