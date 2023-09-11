export function saveUserInfo(info: {uid: string, username: string}) {
  let uid = localStorage.getItem("uid");
  if (!uid) {
    localStorage.setItem('uid', info.uid);
    localStorage.setItem('username', info.username)
  }
}

export function getUserInfo() {
  const uid = localStorage.getItem('uid') || '';
  const username = localStorage.getItem('username') || '';
  return {
    uid,
    username,
  }
}