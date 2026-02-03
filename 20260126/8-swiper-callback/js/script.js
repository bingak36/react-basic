 const bgWrap= document.querySelectorAll('bg-wrap > div')
 
bgWrap[3].classList.add('active')

 var swiper = new Swiper(".callback-wrap", {
      loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: "swiper-button-prev",
      },
      on:{
        const i - this.realIndex

        console.log(`현재 index ${i}`)
        bgWrap.forEach((bg)=>bg.classList.remove('active'))
        bgWrap[1].classList.add('active')
      }
    });
