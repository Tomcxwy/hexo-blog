// 音乐播放器控制器
(function() {
  // 等待DOM加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusicPlayer);
  } else {
    initMusicPlayer();
  }

  function initMusicPlayer() {
    // 检查当前页面是否为音乐页面
    const isMusicPage = window.location.pathname.includes('/music/');

    if (isMusicPage) {
      // 给body添加音乐页面标识类
      document.body.classList.add('music-page');

      // 添加键盘快捷键支持 (按M键切换播放器)
      document.addEventListener('keydown', function(e) {
        if (e.key === 'm' || e.key === 'M') {
          toggleMusicPlayer();
        }
      });
    }
  }

  function toggleMusicPlayer() {
    const musicPlayer = document.getElementById('global-music-player');
    const toggleBtn = document.querySelector('.music-player-toggle-btn');

    if (musicPlayer) {
      const isShowing = musicPlayer.classList.toggle('show');

      // 更新按钮图标
      if (toggleBtn) {
        const showIcon = toggleBtn.querySelector('.show-icon');
        const hideIcon = toggleBtn.querySelector('.hide-icon');

        if (isShowing) {
          showIcon.style.display = 'none';
          hideIcon.style.display = 'block';
        } else {
          showIcon.style.display = 'block';
          hideIcon.style.display = 'none';
        }
      }

      // 如果播放器显示，确保它在最上层
      if (isShowing) {
        musicPlayer.style.zIndex = '10001';
      }
    }
  }
})();