/*darkmode*/ 
const html=document.querySelector('html')
const darkmode=document.getElementById('darkmode')

darkmode.addEventListener('change',()=>{
    html.classList.toggle('dark')
})
/*btnvoltar ao topo*/
const buttonBackToTop=document.getElementById('btntop')

document.addEventListener('scroll',ocultarButton)

buttonBackToTop.addEventListener('click',()=>{
    window.scrollTo(0,0)
})

function ocultarButton(){
    if(window.scrollY > 500){
        buttonBackToTop.style.display='flex'
    }else{
        buttonBackToTop.style.display='none'
    }
}

ocultarButton()

            