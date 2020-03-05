<!-- Jason Chen (jc4rn) and Cody Miller (cm2gp) -->
window.onload = function() {
    document.getElementById("editProfile").onclick = function() {
        document.getElementById("inputTitle").value = document.getElementById("title").innerText;
        document.getElementById("inputYear").value = document.getElementById("year").innerText;
        document.getElementById("inputGenre").value = document.getElementById("genre").innerText;
        document.getElementById("inputDirector").value = document.getElementById("director").innerText;
        document.getElementById("inputSummary").value = document.getElementById("summary").innerText;
    };
}

function updateMovieInfo() {
    document.getElementById("title").innerText = document.getElementById("inputTitle").value;
    document.getElementById("year").innerText = document.getElementById("inputYear").value;
    document.getElementById("genre").innerText = document.getElementById("inputGenre").value;
    document.getElementById("director").innerText = document.getElementById("inputDirector").value;
    document.getElementById("summary").innerText = document.getElementById("inputSummary").value;
    document.getElementById("closeUserModal").click();
    document.getElementById("updateMovieSuccessMessage").style.display = "block";
    setTimeout(function() {
        document.getElementById("updateMovieSuccessMessage").style.display = "none";
    }, 9000);
}

