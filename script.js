document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
