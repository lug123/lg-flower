/* 
获取屏幕宽度
动态设置html字体大小
*/

const setRem = () => {
  // 获取屏幕宽度
  const html = document.documentElement
  const width = html.getBoundingClientRect().width
  // 动态设置html字体大小
  html.style.fontSize = width / 10 + 'px'
}
setRem()
// 屏幕的宽度 发生改变时
window.addEventListener('orientationchange', setRem)
window.addEventListener('resize', setRem)
