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

// 2. 頂部驚喜按鈕 (改為開信封)
    const btn = document.getElementById('surpriseBtn');
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const envelope = document.getElementById('envelope');
    const audio = document.getElementById('bgm');

    if (btn) {
        btn.onclick = function() {
            btn.style.display = 'none';
            envelopeWrapper.style.display = 'block';
            if (audio) audio.play();

            // 延遲一點點再打開信封
            setTimeout(() => {
                envelope.classList.add('open');
                startTyping(); // 啟動打字效果
            }, 500);
        };
    }

    function startTyping() {
        const fullText = "你太壞了！昨天中午12點後都沒有傳訊息給我 😤 但還是最愛你了！希望未來的每個情人節都有你。❤️";
        const typewriterEl = document.getElementById("typewriter");
        let index = 0;
        function play() {
            if (index < fullText.length) {
                typewriterEl.innerText += fullText.charAt(index);
                index++;
                setTimeout(play, 100);
            }
        }
        play();
    }

    // 許願池邏輯 (放這外面或 window.onload 裡面都可以)
    window.sendWish = function() {
        const wish = document.getElementById('wishInput').value;
        const result = document.getElementById('wishResult');
        if (wish.trim() !== "") {
            result.innerText = `願望已收錄：『${wish}』。我們明天一起去吧！✨`;
            result.style.display = 'block';
            document.getElementById('wishInput').value = ""; // 清空
        } else {
            alert("請先寫下你的願望喔！");
        }
    };

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
            alert("確認成功！🥰");
            // 點擊成功後噴發大量愛心
            for(let i=0; i<30; i++) { 
                setTimeout(createHeart, i * 100); 
            }
        };
    }
};
