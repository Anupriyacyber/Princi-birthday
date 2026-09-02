// =================================
// OPENING SCREEN
// =================================

const openButton = document.getElementById("openBtn");
const welcomeScreen = document.querySelector(".welcome");
const birthdayScreen = document.getElementById("birthdayScreen");

openButton.addEventListener("click", function() {

    welcomeScreen.classList.add("hide");

    setTimeout(function() {

        welcomeScreen.style.display = "none";

        birthdayScreen.style.display = "flex";

        setTimeout(function() {
            birthdayScreen.classList.add("show");
        }, 50);

    }, 1000);
});


// =================================
// BIRTHDAY → MEMORIES
// =================================

const memoriesButton = document.getElementById("memoriesBtn");
const memoriesScreen = document.getElementById("memoriesScreen");

memoriesButton.addEventListener("click", function() {

    birthdayScreen.style.opacity = "0";

    setTimeout(function() {

        birthdayScreen.style.display = "none";

        memoriesScreen.style.display = "flex";

        memoriesScreen.style.opacity = "1";

        memoriesScreen.scrollTop = 0;

    }, 1000);
});


// =================================
// MEMORY PHOTO POPUP
// =================================

const memoryPhotos =
    document.querySelectorAll(".photo-gallery img");

const memoryPopup =
    document.getElementById("memoryPopup");

const popupImage =
    document.getElementById("popupImage");

const popupCaption =
    document.getElementById("popupCaption");

const closeMemory =
    document.getElementById("closeMemory");


const captions = [

    "Some moments are ordinary... until they become memories. ❤️",

    "A little moment that deserves to be remembered forever. ✨",

    "Too many laughs, and somehow never enough photos. 😂❤️",

    "One of those memories I'll always keep close. 🫶"

];


memoryPhotos.forEach(function(photo, index) {

    photo.addEventListener("click", function() {

        popupImage.src = photo.src;

        popupCaption.textContent =
            captions[index];

        memoryPopup.classList.add("show");

    });

});


closeMemory.addEventListener("click", function() {

    memoryPopup.classList.remove("show");

});


// =================================
// MEMORIES → LETTER
// =================================

const letterButton =
    document.getElementById("letterBtn");

const letterScreen =
    document.getElementById("letterScreen");


letterButton.addEventListener("click", function() {

    memoriesScreen.style.opacity = "0";

    setTimeout(function() {

        memoriesScreen.style.display = "none";

        letterScreen.style.display = "flex";

        letterScreen.style.opacity = "1";

    }, 1000);

});


// =================================
// BIRTHDAY LETTER
// =================================

const openLetterButton =
    document.getElementById("openLetterBtn");

const letterPaper =
    document.getElementById("letterPaper");


// IMPORTANT:
// Keep the letter hidden when the screen opens.

letterPaper.style.display = "none";


openLetterButton.addEventListener("click", function() {

    // Show the letter
    letterPaper.style.display = "block";

    // Start animation
    letterPaper.classList.add("show");

    // Hide the button
    openLetterButton.style.display = "none";

});// =================================
// FINAL SURPRISE
// =================================

const finalButton = document.getElementById("finalBtn");
const finalScreen = document.getElementById("finalScreen");

finalButton.addEventListener("click", function() {

    letterScreen.style.opacity = "0";

    setTimeout(function() {

        letterScreen.style.display = "none";

        finalScreen.style.display = "flex";

        setTimeout(function() {
            finalScreen.classList.add("show");
        }, 50);

    }, 1000);

});