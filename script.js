// 数字矩阵背景
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

function initMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for(let i = 0; i < columns; i++) drops[i] = 1;

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for(let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if(drops[i] * fontSize > canvas.height && Math.random() > 0.975)
                drops[i] = 0;
            
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
    window.addEventListener('resize', initMatrix);
}

// 验证逻辑
document.getElementById('submitBtn').addEventListener('click', () => {
    const input = document.getElementById('keyInput');
    const message = document.getElementById('message');
    const correctKey = '202112100033';
    
    if(input.value === correctKey) {
        message.textContent = '记忆提取成功！请前往下载！';
        message.style.color = '#0F0';
        document.getElementById('downloadLink').classList.remove('hidden');
    } else {
        message.textContent = '记忆提取失败！请联系作者！';
        message.style.color = '#F00';
    }
});

// 初始化
window.onload = initMatrix;