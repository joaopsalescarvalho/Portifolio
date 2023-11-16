/*darkmode*/ 
const html=document.querySelector('html')
const darkmode=document.getElementById('darkmode')

darkmode.addEventListener('change',()=>{
    html.classList.toggle('dark')
})

/*imagem inincial*/

const imgHome= document.getElementById('imghome')
const shadow=document.querySelector('.shadow')

function moveForRight(){

    imgHome.style.transform='translateX(-50%)';
    shadow.style.transform='translateX(-30%) rotatey(180deg)';
    shadow.style.right='560px';
    shadow.style.boxShadow='inset 10px 10px 400px #48cae4b4';
    shadow.style.width='290px';

setTimeout(()=>{
    imgHome.style.transform='translateX(0%)';
    shadow.style.transform='translateX(50%) rotatey(180deg)';
    shadow.style.right='380px';
    shadow.style.boxShadow='inset 0px 0px 0px #0096C7';
    shadow.style.width='0';
},10)
}

moveForRight()

/*btn levantar conteiner*/
const projetosConteiner= document.querySelector('.projetos-conteiner')

const buttonOpenProjects=document.getElementById('btntop')

buttonOpenProjects.addEventListener('click',()=>{
    buttonBackToTop.style.display='none';
    projetosConteiner.style.display='flex';
    setTimeout(()=>{
    projetosConteiner.style.top='-90%';
    window.scrollTo(0,0)
    },1)
    setTimeout(()=>{
    buttonBackToTop.style.display='flex';
    buttonBackToTop.style.position='fixed';
    },1000)
})


/*btn abaixar conteiner*/

const buttonBackToTop=document.getElementById('btndown')

buttonBackToTop.addEventListener('click',()=>{
    projetosConteiner.style.top='50%';
    buttonBackToTop.style.position='absolute';
    window.scrollTo(0,0)
    setTimeout(()=>{
    buttonBackToTop.style.display='none';
    projetosConteiner.style.display='none';
    },400)
    
})

/*btn-info */
const btnTec= document.querySelectorAll('.btntec')
const btnDesc= document.querySelectorAll('.btndesc')
const screenTec= document.querySelectorAll('.tec')
const screenDesc= document.querySelectorAll('.desc')

for(let i=0 ;i < 10 ;i++){
    btnDesc[i].addEventListener('click',()=>{
    screenDesc[i].style.display="block";
    screenTec[i].style.display="none"; 
    }
    )
}

for(let i=0 ;i < 10 ;i++){
    btnTec[i].addEventListener('click',()=>{
    screenDesc[i].style.display="none";
    screenTec[i].style.display="block"; 
    }
    )
}

/*animação openinfoperfil*/
const perfilConteiner= document.querySelector('.perfil-conteiner')
const border1= document.querySelector('.border1')
const border2= document.querySelector('.border2')
const border3= document.querySelector('.border3')
const iconPerfil= document.querySelector('.icon-perfil')
const perfil= document.querySelector('.perfil')

perfilConteiner.addEventListener('click', openPerfil)
perfilConteiner.addEventListener('mouseenter', openPerfil)
perfilConteiner.addEventListener('mouseleave', closePerfil)

function openPerfil(){
    iconPerfil.style.display= "none";
    perfilConteiner.classList.add('open-conteiner');
    border1.classList.add('change-border1-position');
    border2.classList.add('change-border2-position');
    border3.classList.add('change-border3-position');
    perfilFixedPosition()
}
function perfilFixedPosition(){
    abrirPerfil=setTimeout(()=>{
        perfilConteiner.style.width='400px',
        perfilConteiner.style.height='300px',
        border1.style.top='-34px',
        border1.style.left='364px',
        border2.style.top='230px',
        border2.style.left='364px',
        border3.style.top='180px',
        border3.style.left='-17px',
        perfil.style.display='flex'
    },1000)
    
}
function closePerfil(){
    clearInterval(abrirPerfil)
    iconPerfil.style.display= "block";
    perfilConteiner.classList.remove('open-conteiner');
    border1.classList.remove('change-border1-position');
    border2.classList.remove('change-border2-position');
    border3.classList.remove('change-border3-position');
    setTimeout(()=>{
        perfilConteiner.style.width='70px',
        perfilConteiner.style.height='70px',
        border1.style.top='-34px',
        border1.style.left='34px',
        border2.style.top='0px',
        border2.style.left='34px',
        border3.style.top='-50px',
        border3.style.left='-17px',
        perfil.style.display='none'
},0)
}