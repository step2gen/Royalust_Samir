const currentPage = "";

$(document).ready(function () {
    debugger;
    onProfileSaveSuccess();

    if (document.getElementsByClassName('validation-summary-errors').length > 0) {
        onEditProfile();
    }

   

    $(".indexLink").classList.add("active");
    $(".passwordLink").classList.remove("active");

});

function onEditProfile() {
    $("#update-profile-button").show();
    $("#reset-profile-button").show();
    $("#profile_edit").hide();
    ProfileEditable(false);
}


function onProfileSaveSuccess() {
    $("#update-profile-button").hide();
    $("#reset-profile-button").hide();
    $("#profile_edit").show();
    ProfileEditable(true);
}

function onProfileReset() {
    debugger;
    $("#update-profile-button").hide();
    $("#reset-profile-button").hide();
    $("#profile_edit").show();
    ProfileEditable(true);
    if (document.getElementsByClassName('validation-summary-errors').length > 0) {
        let get = document.querySelectorAll('.validation-summary-errors');
        get.forEach(element => {
            element.remove();
        });
    }
    $("#profile_firstname-error").html("");
    $("#profile_dob-error").html("");
}

function ProfileEditable(res) {
    debugger;
    document.getElementById('profile_firstname').readOnly = res;
    document.getElementById('profile_lastname').readOnly = res;
    document.getElementById('profile_dob').readOnly = res;
    document.getElementById('profile_phone_number').readOnly = res;
    document.getElementById('profile_address').readOnly = res;

    if (res) {
        $("#profile_firstname").addClass("disabled_field");
        $("#profile_lastname").addClass("disabled_field");
        $("#profile_dob").addClass("disabled_field");
        $("#profile_phone_number").addClass("disabled_field");
        $("#profile_address").addClass("disabled_field");
    }
    else {
        $("#profile_firstname").removeClass("disabled_field");
        $("#profile_lastname").removeClass("disabled_field");
        $("#profile_dob").removeClass("disabled_field");
        $("#profile_phone_number").removeClass("disabled_field");
        $("#profile_address").removeClass("disabled_field");
    }

}
