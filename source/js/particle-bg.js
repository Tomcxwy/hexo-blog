(function() {
    // 1. 判断是否为首页 (根据根目录路径判断)
    // 如果你的博客不在子目录，location.pathname === '/' 就是首页
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        return; // 如果不是首页，直接退出，不执行后续代码
    }

    const banner = document.querySelector('#banner');
    if (!banner) return;

    // 2. 创建 Canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    // 设置样式使其固定在背景
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1'; // 确保在所有内容层之下
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let colorShift = 0;
    class SimpleParticle {
        constructor(canvas) {
            this.canvas = canvas;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 0.8 + 0.5;
            this.speedX = Math.random() * 0.2 + 1.2;
            this.speedY = (Math.random() - 0.5) * 0.1;
            this.alpha = Math.random() * 0.5 + 0.3;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x > this.canvas.width) this.x = 0;
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        for (let i = 0; i < 100; i++) particles.push(new SimpleParticle(canvas));
    }

    function animate() {
        colorShift = (colorShift + 0.0005) % 1;
        const wave = Math.sin(colorShift * Math.PI * 2) * 0.05;
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
        gradient.addColorStop(Math.max(0, 0.01 + wave * 0.1), '#f5e1b0');
        gradient.addColorStop(Math.max(0, 0.17 + wave * 0.25), '#eea4a0');
        gradient.addColorStop(Math.max(0, 0.40 + wave * 0.1), '#d2698e');
        gradient.addColorStop(Math.max(0, 0.60 + wave * 0.4), '#6e4e79');
        gradient.addColorStop(Math.min(1, 0.85 + wave * 0.2), '#343558');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    animate();
})();