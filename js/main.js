// 애니메이션 모션 제어
const circle = document.querySelector('#circle')
const article = circle.querySelectorAll('article')

for (let el of article) {
  el.addEventListener('mouseenter', (e) => {
    circle.style.animationPlayState = 'paused'
  })

  el.addEventListener('mouseleave', (e) => {
    circle.style.animationPlayState = 'running'
  })
}
