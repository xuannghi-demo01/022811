const text =
"💌 Chúc cậu tuổi mới thật nhiều niềm vui, luôn giữ được nụ cười trên môi và gặp thật nhiều điều may mắn. Mong rằng những ngày sắp tới của cậu sẽ có thật nhiều khoảnh khắc đáng nhớ, những chuyện buồn thì nhanh chóng qua đi, còn những điều vui vẻ sẽ ở lại thật lâu. Chúc cậu học tập ngày càng tiến bộ, làm được những điều mình mong muốn và luôn có đủ tự tin để theo đuổi những mục tiêu của mình. Dù sau này có bận rộn hay gặp những lúc không vui, cũng mong cậu vẫn luôn nhớ rằng bản thân đã cố gắng rất nhiều rồi. Tuổi mới hãy thật vui, thật hạnh phúc và có thật nhiều kỷ niệm đẹp nhé! 🎂💗✨";

let index = 0;
let heartInterval;

// =========================
// MỞ HỘP QUÀ
// =========================

function showGift() {

    const giftBox = document.getElementById("giftBox");

    giftBox.classList.add("open");

    setTimeout(() => {

        giftBox.style.display = "none";

        document.getElementById("guide").style.display = "none";

        const gift = document.getElementById("gift");

        gift.style.display = "block";

        gift.classList.add("pop");

        confetti({
            particleCount: 150,
            spread: 110,
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

       document.getElementById("message").innerHTML +=
            text.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    } else {

        setTimeout(() => {

            document.getElementById("endMessage").style.display = "block";

            confetti({
                particleCount: 80,
                spread: 90,
                origin: { y: 0.7 }
            });

        }, 1000);

    }

}

// =========================
// TIM BAY
// =========================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.5 ? "💖" : "💗";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    heart.style.opacity =
        0.6 + Math.random() * 0.4;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}
function toggleMusic() {

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicBtn");

    if (music.paused) {

        music.play();

        button.innerHTML = "🎵 Nhạc: ON";

    } else {

        music.pause();

        button.innerHTML = "🔇 Nhạc: OFF";

    }

}
function restartPage() {

    location.reload();

}