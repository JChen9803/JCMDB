function movieValidation() {
    var movieTitle = document.getElementById("inputMovieTitle").value;
    var year = document.getElementById("inputYear").value;
    var genre = document.getElementById("inputGenre").value;
    var stars = document.getElementById("inputActors").value;
    var directors = document.getElementById("inputDirectors").value;
    var summary = document.getElementById("inputSummary").value;

    console.log("year" + year.length)
    let valid = true;

    if(movieTitle == "") {
        valid = false;
        document.getElementById("inputMovieTitle").style.borderColor = "red";
        document.getElementById("movieTitleError").style.visibility = "visible";
    }
    else {
        document.getElementById("inputMovieTitle").style.borderColor = "#32CD32";
        document.getElementById("movieTitleError").style.visibility = "hidden";
    }

    let pat = /[0-9]/;
    if(year == "" || year.length != 4 || !pat.test(year)) {
        valid = false;
        document.getElementById("inputYear").style.borderColor = "red";
        document.getElementById("yearError").style.visibility = "visible";
    }
    else {
        document.getElementById("inputYear").style.borderColor = "#32CD32";
        document.getElementById("yearError").style.visibility = "hidden";
    }

    if(genre == "Choose...") {
        valid = false;
        document.getElementById("inputGenre").style.borderColor = "red";
        document.getElementById("genreError").style.visibility = "visible";
    }
    else {
        document.getElementById("inputGenre").style.borderColor = "#32CD32";
        document.getElementById("genreError").style.visibility = "hidden";
    }

    if(stars == "") {
        valid = false;
        document.getElementById("inputActors").style.borderColor = "red";
        document.getElementById("actorError").style.visibility = "visible";
    }
    else {
        document.getElementById("inputActors").style.borderColor = "#32CD32";
        document.getElementById("actorError").style.visibility = "hidden";
    }

    if(directors == "") {
        valid = false;
        document.getElementById("inputDirectors").style.borderColor = "red";
        document.getElementById("directorError").style.visibility = "visible";
    }
    else {
        document.getElementById("inputDirectors").style.borderColor = "#32CD32";
        document.getElementById("directorError").style.visibility = "hidden";
    }

    if(summary == "") {
        valid = false;
        document.getElementById("inputSummary").style.borderColor = "red";
        document.getElementById("summaryError").style.visibility = "visible";
    }
    else {
        document.getElementById("inputSummary").style.borderColor = "#32CD32";
        document.getElementById("summaryError").style.visibility = "hidden";
    }

    if (valid) {
        document.getElementById("closeMovieModal").click();
        document.getElementById("createMovieSuccessMessage").style.display = "block";
        setTimeout(function() {
            document.getElementById("createMovieSuccessMessage").style.display = "none";
        }, 4000);
    }

}

let resetMovieModal = () => {
    document.getElementById("inputMovieTitle").style.removeProperty("border-color");
    document.getElementById("inputYear").style.removeProperty("border-color");
    document.getElementById("inputGenre").style.removeProperty("border-color");
    document.getElementById("inputActors").style.removeProperty("border-color");
    document.getElementById("inputDirectors").style.removeProperty("border-color");
    document.getElementById("inputSummary").style.removeProperty("border-color");
    document.getElementById("movieTitleError").style.visibility = "hidden";
    document.getElementById("yearError").style.visibility = "hidden";
    document.getElementById("genreError").style.visibility = "hidden";
    document.getElementById("actorError").style.visibility = "hidden";
    document.getElementById("directorError").style.visibility = "hidden";
    document.getElementById("summaryError").style.visibility = "hidden";
    document.getElementById("inputMovieTitle").value = "";
    document.getElementById("inputYear").value = "";
    document.getElementById("inputGenre").value = "Choose...";
    document.getElementById("inputActors").value = "";
    document.getElementById("inputDirectors").value = "";
    document.getElementById("inputSummary").value = "";
}
