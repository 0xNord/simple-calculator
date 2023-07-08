let parent = document.getElementById('btns')
console.log(parent)

parent.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains("calculator__buttons-button")) { e.target.classList.toggle('active');}
})
parent.addEventListener('mouseup', (e) => {
    if (e.target.classList.contains("calculator__buttons-button")) { e.target.classList.toggle('active');}
})

