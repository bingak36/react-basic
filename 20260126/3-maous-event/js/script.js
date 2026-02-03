const btnwrap = document.querySelector('.btn-wrap')
const wrap= document.querySelector('#wap')

// console.log('ddd')

btnwrap.addEventListener('click', ()=> {
    wrap.classList.add('close-box')
})
btnwrap.addEventListener('click', ()=> {
    wrap.classList.remove('close-box')
})