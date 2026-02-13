// 1. 計算在一起的天數
const startDate = new Date("2024-05-20"); // ⚠️ 這裡改為你們在一起的日期
const daysEl = document.getElementById("days");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    daysEl.innerText = days;
}
updateTimer();

// 2. 愛心飄落特效
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.getElementById("heart-container").appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);
