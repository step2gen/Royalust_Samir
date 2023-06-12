function openProfileMenu() {
    document.getElementById("myprofile_Dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

$(document).ready(function () {
    window.onclick = function (event) {
        if (!event.target.matches('.profile_dropbtn')) {
            var dropdowns = document.getElementsByClassName("profile_dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }



});
