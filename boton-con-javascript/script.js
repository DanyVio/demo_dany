const divContent = document.querySelector('#app')
const btn = document.createElement('button')
btn.textContent = 'Youtube'
btn.style.backgroundColor = 'red'
btn.style.color = 'white'
btn.style.padding = '15px'
btn.style.border = 'none'
btn.style.borderRadius = '10px'

divContent.appendChild(btn)

btn.addEventListener('click', function() {
       window.location.href = 'https://www.youtube.com'
})