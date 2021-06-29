baguetteBox.run('.gallery', {
    "captions": true,
    "buttons": true,
    "overlayBackgroundColor": "rgb(0, 0, 0, 0.8)"
});

document.getElementById("query").addEventListener("keyup", myFunction);

// line 11 makes the search available if user copy paste into the search Box
document.getElementById("query").addEventListener("input", myFunction);

function myFunction() {
    let searchBox = document.getElementById("query");
    let searchTerm = searchBox.value.toLowerCase();
    let picLinks = document.querySelectorAll(".gallery a");
    for ( let picture of picLinks) { 
        let caption = picture.getAttribute("data-caption").toLowerCase();
        if (caption.includes(searchTerm)){
            picture.style.display = "inherit";
        } else {
            picture.style.display = "none";
        }
    }
}


