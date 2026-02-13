window.onload = function() {
    // 1. 計算天數
    const startDate = new Date("2023-04-14"); 
    const daysEl = document.getElementById("days");
    if (daysEl) {
        const now = new Date();
        const diff = now - startDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        daysEl.innerText = days;
    }

    // 2. 頂部驚喜按鈕 + 音樂播放
    const btn = document.getElementById('surpriseBtn');
    const msg = document.getElementById('secretMessage');
    const audio = document.getElementById('bgm'); 

    if (btn && msg) {
        btn.onclick = function() {
            msg.style.display = 'block';
            
            // 嘗試播放音樂
            if (audio) {
                audio.play().catch(function(error) {
                    console.log("音樂播放被瀏覽器阻擋，需使用者互動才能播放");
                });
            }

            alert("情人節快樂！❤️");
            msg.scrollIntoView({ behavior: 'smooth' });
            btn.style.display = 'none';
        };
    }

    // 3. 愛心特效函數
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

    // 4. 捉弄人的「不答應」按鈕
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const questionText = document.getElementById('question-text');

    if (noBtn) {
        const moveButton = function() {
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);
            noBtn.style.position = 'fixed';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
            noBtn.style.zIndex = '9999'; // 確保按鈕在最上層
        };
        noBtn.addEventListener('mouseover', moveButton);
        noBtn.addEventListener('touchstart', moveButton);
    }

    if (yesBtn) {
        yesBtn.onclick = function() {
            questionText.innerText = "我就知道你會答應！最愛你了 💖";
            noBtn.style.display = 'none';
            alert("確認成功！這輩子你跑不掉囉 🥰");
            // 點擊成功後噴發大量愛心
            for(let i=0; i<30; i++) { 
                setTimeout(createHeart, i * 100); 
            }
        };
    }
};
