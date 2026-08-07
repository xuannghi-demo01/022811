const text =
"💌 Chúc cậu tuổi mới luôn vui vẻ, mạnh khỏe, học thật giỏi, luôn gặp nhiều điều may mắn và luôn nở nụ cười thật tươi nhé! 🎉";

let index = 0;
let heartInterval;

// =========================
// MỞ HỘP QUÀ
// =========================

function showGift(){

    const giftBox = document.getElementById("giftBox");

    giftBox.classList.add("shake");

    setTimeout(() => {
        giftBox.classList.add("glow");
    }, 300);

    setTimeout(() => {

        giftBox.style.display = "none";

        document.getElementById("guide").style.display = "none";

        const gift = document.getElementById("gift");

        gift.style.display = "block";

        gift.classList.add("pop");

        confetti({
            particleCount: 120,
            spread: 100,
            origin: { y: 0.6 }
        });

    }, 900);

}

// =========================
// HIỆN LÁ THƯ
// =========================

function showLetter() {

    document.getElementById("gift").style.display = "none";

    document.getElementById("letter").style.display = "block";

    document.getElementById("letterGuide").style.display = "block";

}

// =========================
// MỞ THƯ
// =========================

function openLetter() {

    document.getElementById("letter").style.display = "none";

    document.getElementById("letterGuide").style.display = "none";

    const message = document.getElementById("message");

    message.style.display = "block";

    message.classList.add("fadeIn");

    document.getElementById("bgMusic").play();

    confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 }
    });

    heartInterval = setInterval(createHeart, 300);

    typeWriter();
}

// =========================
// CHẠY CHỮ
// =========================

function typeWriter() {

    if (index < text.length) {

        document.getElementById("message").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 60);

    }

}

// =========================
// TIM BAY
// =========================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 4000);

}