function showMessage() {

    // Hiện lời chúc
    document.getElementById("message").innerHTML =
    "💌 Chúc cậu tuổi mới luôn vui vẻ, mạnh khỏe và đạt được thật nhiều điều mình mong muốn! 🎉";

    document.getElementById("message").style.display = "block";

    // Ẩn nút
    document.getElementById("giftBtn").style.display = "none";

    // Phát nhạc
    document.getElementById("bgMusic").play();

}