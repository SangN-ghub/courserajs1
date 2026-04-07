function upDate(previewPic) {
    console.log("Update!");

    console.log("View: " + previewPic.alt);
    console.log("Link: " + previewPic.src);

    let displayDiv = document.getElementById("image");

    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + ")";
}
function unDo() {
    let displayDiv = document.getElementById("image");

    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}


window.onload = function() {
    console.log("Load Succesfully!");
    
    let images = document.querySelectorAll(".preview");
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Add tabindex for image " + (i + 1));
    }
}