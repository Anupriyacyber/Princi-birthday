// =================================
// OPENING SCREEN
// =================================

const openButton = document.getElementById("openBtn");
const welcomeScreen = document.querySelector(".welcome");
const birthdayScreen = document.getElementById("birthdayScreen");

const birthdaySong = document.getElementById("birthdaySong");

openButton.addEventListener("click", function () {

    // Start birthday song
    birthdaySong.currentTime = 0;

    birthdaySong.play().catch(function (error) {
        console.log("Song could not play:", error);
    });

    welcomeScreen.classList.add("hide");

    setTimeout(function () {

        welcomeScreen.style.display = "none";

        birthdayScreen.style.display = "flex";

        setTimeout(function () {
            birthdayScreen.classList.add("show");
        }, 50);

    }, 1000);

});


// =================================
// BIRTHDAY → MEMORIES
// =================================

const memoriesButton =
    document.getElementById("memoriesBtn");

const memoriesScreen =
    document.getElementById("memoriesScreen");

memoriesButton.addEventListener("click", function () {

    birthdayScreen.style.opacity = "0";

    setTimeout(function () {

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

memoryPhotos.forEach(function (photo, index) {

    photo.addEventListener("click", function () {

        popupImage.src = photo.src;

        popupCaption.textContent =
            captions[index];

        memoryPopup.classList.add("show");

    });

});

closeMemory.addEventListener("click", function () {

    memoryPopup.classList.remove("show");

});


// =================================
// MEMORIES → LETTER
// =================================

const letterButton =
    document.getElementById("letterBtn");

const letterScreen =
    document.getElementById("letterScreen");

letterButton.addEventListener("click", function () {

    memoriesScreen.style.opacity = "0";

    setTimeout(function () {

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

letterPaper.style.display = "none";

openLetterButton.addEventListener("click", function () {

    letterPaper.style.display = "block";

    letterPaper.classList.add("show");

    openLetterButton.style.display = "none";

});


// =================================
// FIREWORKS
// =================================

const fireworksContainer =
    document.getElementById("fireworks");

function createFirework() {

    const centerX =
        Math.random() * window.innerWidth;

    const centerY =
        Math.random() * (window.innerHeight * 0.55) + 80;

    const colors = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#ffffff",
        "#c77dff"
    ];

    for (let i = 0; i < 50; i++) {

        const particle =
            document.createElement("div");

        particle.className =
            "firework-particle";

        const angle =
            (Math.PI * 2 / 50) * i;

        const distance =
            Math.random() * 130 + 70;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        particle.style.left =
            centerX + "px";

        particle.style.top =
            centerY + "px";

        particle.style.setProperty(
            "--x",
            x + "px"
        );

        particle.style.setProperty(
            "--y",
            y + "px"
        );

        const randomColor =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        particle.style.background =
            randomColor;

        particle.style.boxShadow =
            "0 0 10px " + randomColor;

        fireworksContainer.appendChild(
            particle
        );

        setTimeout(function () {
            particle.remove();
        }, 1400);

    }

}


function startFireworks() {

    createFirework();

    setTimeout(createFirework, 300);
    setTimeout(createFirework, 600);
    setTimeout(createFirework, 900);
    setTimeout(createFirework, 1200);
    setTimeout(createFirework, 1500);
    setTimeout(createFirework, 1800);
    setTimeout(createFirework, 2100);

}


// =================================
// FINAL SURPRISE
// =================================

const finalButton =
    document.getElementById("finalBtn");

const finalScreen =
    document.getElementById("finalScreen");

finalButton.addEventListener("click", function () {

    startFireworks();

    letterScreen.style.opacity = "0";

    setTimeout(function () {

        letterScreen.style.display = "none";

        finalScreen.style.display = "flex";

        setTimeout(function () {

            finalScreen.classList.add("show");

        }, 50);

    }, 1000);

});


// =================================
// DON'T CLICK PRANK
// =================================

const prankBtn =
    document.getElementById("prankBtn");

const prankMessage =
    document.getElementById("prankMessage");

if (prankBtn) {

    prankBtn.addEventListener("click", function () {

        prankBtn.disabled = true;

        prankBtn.innerHTML =
            "⚠️ SYSTEM ACTIVATED...";

        prankMessage.innerHTML =
            "⚠️ WARNING! ⚠️<br>" +
            "You have activated the forbidden button! 😭<br><br>" +
            "💥 YOUR PHONE WILL BLAST IN...";

        let countdown = 10;

        const timer = setInterval(function () {

            prankMessage.innerHTML =
                "⚠️ WARNING! ⚠️<br><br>" +
                "💥 YOUR PHONE WILL BLAST IN...<br><br>" +
                "<span class='countdown-number'>" +
                countdown +
                "</span>";

            countdown--;

            if (countdown < 0) {

                clearInterval(timer);

                prankMessage.innerHTML =
                    "<div class='birthday-explosion'>💥</div>" +
                    "<div class='birthday-pop'>" +
                    "🎉 HAPPY BIRTHDAY PRINCI! 🎂❤️" +
                    "</div>" +
                    "<p>😂😂 Relax... your phone survived!</p>";

                prankBtn.innerHTML =
                    "😂 YOU SURVIVED!";

            }

        }, 1000);

    });

}


// =================================
// BEST FRIEND AWARD
// =================================

const awardBtn =
    document.getElementById("awardBtn");

const awardMessage =
    document.getElementById("awardMessage");

const awardCelebration =
    document.getElementById("awardCelebration");

if (awardBtn) {

    awardBtn.addEventListener("click", function () {

        // Show trophy
        awardCelebration.classList.add("show");

        // Start fireworks
        startFireworks();

        // Change button
        awardBtn.innerHTML =
            "🏆 Award Accepted!";

        // First message
        awardMessage.innerHTML =
            "🎉 CONGRATULATIONS, PRINCI! 🎉<br>" +
            "You have officially accepted your award. 😂";

        // Second message
        setTimeout(function () {

            awardMessage.innerHTML =
                "Wait... 😳<br>" +
                "There is one small problem...";

        }, 4000);

        // Final joke
        setTimeout(function () {

            awardMessage.innerHTML =
                "😂 This award has NO prize money!<br>" +
                "Your prize is... ME as your best friend! ❤️🫶";

        }, 8000);

    });

}
