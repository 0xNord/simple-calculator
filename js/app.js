let parent = document.getElementById('btns')
console.log(parent)

// buttons.onmouseup = function(){
//     buttons.classList.toggle('active');
// }
// buttons.onmousedown = function(){
//     buttons.classList.toggle('active');
// }
parent.addEventListener('mousedown', (e)=>{e.target.classList.toggle('active');});
parent.addEventListener('mouseup', (e)=>{e.target.classList.toggle('active');});