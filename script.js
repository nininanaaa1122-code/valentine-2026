// 1. 計算在一起的天數
const startDate = new Date("2023-04-14"); // 
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
/* 時間軸圖片美化 */
.timeline-img {
    width: 100%;             /* 讓圖片寬度自動適應手機螢幕 */
    max-width: 400px;        /* 限制最大寬度，避免在電腦上看太大 */
    border-radius: 15px;     /* 增加圓角，看起來更溫柔 */
    margin-top: 15px;        /* 與上方的文字保持一點距離 */
    box-shadow: 0 4px 15px rgba(0,0,0,0.1); /* 增加淡淡的陰影，讓照片有立體感 */
    display: block;          /* 確保圖片置中對齊 */
    margin-left: auto;
    margin-right: auto;
    transition: transform 0.3s; /* 增加滑鼠移上去的動畫效果 */
}

/* 當滑鼠移到照片上時，稍微放大一點 */
.timeline-img:hover {
    transform: scale(1.03);
}
