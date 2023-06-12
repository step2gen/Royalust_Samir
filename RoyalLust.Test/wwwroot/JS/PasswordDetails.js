$(document).ready(function () {
    debugger;
    onPasswordSaveSuccess();

    if (document.getElementsByClassName('validation-summary-errors').length > 0) {
        onEditPassword();
    }

    ////Mark all steps unfinished
    //document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
    //    formStepHeader.classList.add("form-stepper-unfinished");
    //    formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
    //});

    //const formStepCircle = document.querySelector('li[step="' + 2 + '"]');

    //formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
    //formStepCircle.classList.add("form-stepper-active");

    //for (let index = 0; index < stepNumber; index++) {

    //    const formStepCircle = document.querySelector('li[step="' + index + '"]');

    //    if (formStepCircle) {
    //        formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
    //        formStepCircle.classList.add("form-stepper-completed");
    //    }
    //}

    $(".passwordLink").classList.add("active");
    $(".indexLink").classList.remove("active");
});

function onEditPassword() {
    $("#update-pass-button").show();
    $("#reset-pass-button").show();
    $("#password_edit").hide();
    PasswordEditable(false);
}

function onPasswordSaveSuccess() {
    $("#update-pass-button").hide();
    $("#reset-pass-button").hide();
    $("#password_edit").show();
    PasswordEditable(true);
}

function onPasswordReset() {
    debugger;
    $("#update-pass-button").hide();
    $("#reset-pass-button").hide();
    $("#password_edit").show();
    PasswordEditable(true);
    if (document.getElementsByClassName('validation-summary-errors').length > 0) {
        let get = document.querySelectorAll('.validation-summary-errors');
        get.forEach(element => {
            element.remove();
        });
    }
    $("#password_oldPass-error").html("");
    $("#password_newPass-error").html("");
    $("#password_ReNewPass-error").html("");
}

function PasswordEditable(res) {
    debugger
    document.getElementById('password_oldPass').readOnly = res;
    document.getElementById('password_newPass').readOnly = res;
    document.getElementById('password_ReNewPass').readOnly = res;

    if (res) {

        document.getElementById('password_oldPass').style.pointerEvents = "none";
        document.getElementById('password_newPass').style.pointerEvents = "none";
        document.getElementById('password_ReNewPass').style.pointerEvents = "none";
    }
    else {
        document.getElementById('password_oldPass').style.pointerEvents = "auto";
        document.getElementById('password_newPass').style.pointerEvents = "auto";
        document.getElementById('password_ReNewPass').style.pointerEvents = "auto";
    }
}
