function validarCheckbox(checkbox) {
    var checkboxes = document.getElementsByName('plan');

    checkboxes.forEach(function (currentCheckbox) {
        if (currentCheckbox !== checkbox) {
            currentCheckbox.checked = false;
        }
    });
}