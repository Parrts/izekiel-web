const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let isPlaying = false;


/* =========================
   MUSIC
========================= */

function toggleMusic() {

    if (isPlaying) {

        music.pause();

        musicButton.innerHTML = "🎵";

        isPlaying = false;

    } else {

        music.play();

        musicButton.innerHTML = "⏸️";

        isPlaying = true;

    }

}


/* =========================
   PHOTO MODAL
========================= */

function openPhoto(photo) {

    const modal = document.getElementById("photoModal");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = photo;

    modal.classList.add("active");

}


function closePhoto() {

    const modal = document.getElementById("photoModal");

    modal.classList.remove("active");

}


/* =========================
   FLOATING HEART
========================= */

document.addEventListener("click", function(event) {

    if (
        event.target.closest(".polaroid") ||
        event.target.closest(".music-btn") ||
        event.target.closest(".button")
    ) {
        return;
    }

    const heart = document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    heart.style.color = "#78b8dc";
    heart.style.fontSize = "22px";

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0) scale(1)",
                opacity: 1
            },
            {
                transform: "translateY(-80px) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 1000,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 1000);

});