const barr = document.getElementsByClassName('barr')[0];
const navlink = document.getElementsByClassName('navlink')[0];

barr.addEventListener('click',()=>{
    navlink.classList.toggle('active');
});