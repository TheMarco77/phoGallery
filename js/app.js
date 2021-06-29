baguetteBox.run('.gallery', {
    "captions": true,
    "buttons": true,
    "overlayBackgroundColor": "rgb(0, 0, 0, 0.8)"
});
document.getElementById("query").addEventListener("keyup", myFunction);

function myFunction() {
    let x = document.getElementById("query");
    x.value = x.value.toLowerCase();
}

// const search = new filter('search', 'data-caption');


