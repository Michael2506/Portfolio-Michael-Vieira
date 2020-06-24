let Menu = document.querySelector('.BurgerMenu')
let MenuOpen = document.querySelector('.BurgerMenuOpen')

Menu.addEventListener('click', () => {
  Menu.classList.toggle('active');
})

Menu.addEventListener('click', ()=>{
  MenuOpen.classList.toggle('visible');
})