// 音乐播放器控制器 - 简版
(function() {
  // 等待DOM加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusicPageCheck);
  } else {
    initMusicPageCheck();
  }

  function initMusicPageCheck() {
    // 检查当前页面是否为音乐页面
    const isMusicPage = window.location.pathname.includes('/music/');

    if (isMusicPage) {
      // 给body添加音乐页面标识类
      document.body.classList.add('music-page');
    }
  }
})();