window.onload = function() {
    document.getElementById("editProfile").onclick = function() {
        document.getElementById("inputUsername").value = document.getElementById("name").innerText;
        document.getElementById("inputAge").value = document.getElementById("age").innerText;
        document.getElementById("inputFavMovie").value = document.getElementById("favMovie").innerText;
        document.getElementById("inputFavStar").value = document.getElementById("favStar").innerText;
        document.getElementById("inputBlurb").value = document.getElementById("userBlurb").innerText;
    };
}

function updateUserInfo() {
    document.getElementById("name").innerText = document.getElementById("inputUsername").value;
    document.getElementById("age").innerText = document.getElementById("inputAge").value;
    document.getElementById("favMovie").innerText = document.getElementById("inputFavMovie").value;
    document.getElementById("favStar").innerText = document.getElementById("inputFavStar").value;
    document.getElementById("userBlurb").innerText = document.getElementById("inputBlurb").value;
    document.getElementById("closeUserModal").click();
    document.getElementById("updateProfileSuccessMessage").style.display = "block";
    setTimeout(function() {
        document.getElementById("updateProfileSuccessMessage").style.display = "none";
    }, 4000);
}