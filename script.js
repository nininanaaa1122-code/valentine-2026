// 1. 計算在一起的天數
const startDate = new Date("2023-04-14"); 
const daysEl = document.getElementById("days");

function updateTimer() {
    if (daysEl) {
        const now = new Date();
        const diff = now - startDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        daysEl.innerText = days;
    }
}
updateTimer();

// 2. 愛心飄落特效
function createHeart() {
    const container = document.getElementById("heart-container");
    if (!container) return;
    
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    container.appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);

// 3. 按鈕點擊功能 (新增這段)
window.addEventListener('DOMContentLoaded', (event) => {
    const btn = document.getElementById('surpriseBtn');
    const msg = document.getElementById('secretMessage');

    if (btn && msg) {
        btn.addEventListener('click', function() {
            msg.style.display = 'block';
            alert("寶貝，情人節快樂！我愛你喔！🌹");
            msg.scrollIntoView({ behavior: 'smooth' });
            btn.style.display = 'none';
        });
    }
});
