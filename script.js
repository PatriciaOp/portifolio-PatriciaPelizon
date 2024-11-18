


   // Pega o botão
   var mybutton = document.getElementById("scrollTopBtn");

   // Mostra o botão quando o usuário rolar 20px para baixo da parte superior da página
   window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
       if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
           mybutton.style.display = "block";
       } else {
           mybutton.style.display = "none";
       }
   }
   // Quando o usuário clicar no botão, rola para o topo da página
   mybutton.onclick = function() {
       document.body.scrollTop = 0; // Para Safari
       document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
   }

// Ativa o menu lateral em mobile
const menuLateral = document.querySelector('.menu-lateral');
const navMenu = document.getElementById('nav-menu');

menuLateral.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
