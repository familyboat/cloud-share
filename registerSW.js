if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/cloud-share/sw.js', { scope: '/cloud-share/' })})}