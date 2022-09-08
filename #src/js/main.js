document.addEventListener('DOMContentLoaded', function(){
  const btnsOpenBurger = document.querySelectorAll('._btn-open-burger');
  const btnsBurgerCatalogLink = document.querySelectorAll('.burger-catalog__link');
  const inputCountProduct = document.querySelector('.product-count');
  let menuHeight = 0;

  function closeMenu(menu){
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');

      gsap.fromTo(`.${menu.className}`,{
        y: 0,
        height: menuHeight,
        opacity: 1,
        display: "block"

      },{
        opacity: 0,
        height:0,
        y: -5,
        duration: .2,
        display: "none"
      });
    }
  }

  function adaptiveLink() {
    if(window.innerWidth <= 320){
      menuHeight = 250;

      btnsBurgerCatalogLink.forEach(btn => {
        btn.setAttribute('data-bs-offset','0,13');
      })
    }
    else menuHeight = 300;
  }

  function countPrice(){
    let price = Number(document.querySelector('.product-price-enter').textContent.trim().slice().slice(0, -1));
    let totalAmount;
    if (inputCountProduct.value === 0 || inputCountProduct.value === '') {
      document.querySelector('.product-price').textContent = `${price}₽`;
    }
    else {
      totalAmount = price * Math.abs(inputCountProduct.value);
      document.querySelector('.product-price').textContent = `${totalAmount}₽`;
    }
  }

  btnsOpenBurger.forEach(btn => {
    btn.addEventListener('click',(event) => {

      btnsOpenBurger.forEach(btn => {
        btn.classList.remove('btn-active');
      })

      if (!event.currentTarget.nextElementSibling.classList.contains('open')) {
        event.currentTarget.classList.add('btn-active');
        if (event.currentTarget.classList.contains('mobile-burger__menu-btn')) {
          closeMenu(document.querySelector('.burger-catalog'));
          document.querySelector('.burger-menu').classList.add('open');

          gsap.fromTo('.burger-menu.open',{
            opacity: 0,
            height:0,
            y: -5,
            display: "none"
          },{
            y: 0,
            height: menuHeight,
            opacity: 1,
            duration: .2,
            display: "block"
          });

          gsap.fromTo('.burger-menu__list',{
            opacity: 0,
            y: -5,
            display: "none"
          },{
            y: 0,
            opacity: 1,
            delay: .200,
            duration: .2,
            display: "block"
          })
        }
        else if (event.currentTarget.classList.contains('mobile-burger__catalog-btn')){
          closeMenu(document.querySelector('.burger-menu'));
          document.querySelector('.burger-catalog').classList.add('open');

          gsap.fromTo('.burger-catalog.open',{
            opacity: 0,
            height:0,
            y: -5,
            display: "none"
          },{
            y: 0,
            height: menuHeight,
            opacity: 1,
            duration: .2,
            display: "block"
          });

          gsap.fromTo('.burger-catalog__list',{
            opacity: 0,
            y: -5,
            display: "none"
          },{
            y: 0,
            opacity: 1,
            delay: .200,
            duration: .2,
            display: "block"
          })
        }
      }
      else {
        closeMenu(event.currentTarget.nextElementSibling);
      }
    })
  });

  inputCountProduct.addEventListener('input', countPrice);

  adaptiveLink();
  window.addEventListener('resize', adaptiveLink);
})