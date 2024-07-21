// Get the modal
var modal = document.getElementById("myModal");

// Get the modal image container
var modalImg = document.getElementById("img01");

// Add click event listeners to each image in the gallery
document.querySelectorAll('.gallery-img').forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;

        // Set the title, size, and description for the modal
        document.getElementById('imgTitle').textContent = this.getAttribute('data-title');
        document.getElementById('imgSize').textContent = this.getAttribute('data-size');
        document.getElementById('imgDescription').textContent = this.getAttribute('data-description');
    }
});


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal and clear the image source
span.onclick = function() {
    modal.style.display = "none";
    modalImg.src = ''; // Clear the image source to ensure it doesn't flash the old image upon next modal open
}
