const menuClose= document.querySelector('.menu.close')
const menuOpen= document.querySelector('.menu.open')
const wrap= document.querySelector('#wap')

// console.log('ddd')

menuClose.addEventListener('click', ()=> {
    wrap.classList.add('close-box')
})
menuopen.addEventListener('click', ()=> {
    wrap.classList.remove('close-box')
})