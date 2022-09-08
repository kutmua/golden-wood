document.addEventListener('DOMContentLoaded', function(){
  const btnsOpenBurger = document.querySelectorAll('._btn-open-burger');
  const btnsBurgerCatalogLink = document.querySelectorAll('.burger-catalog__link');
  const inputCountProduct = document.querySelector('.product-count');
  const itemMarkWood = document.querySelectorAll('.item__mark-wood');
  const itemMarkSteel = document.querySelectorAll('.item__mark-steel');
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
    if(document.documentElement.clientWidth <= 470){
      menuHeight = 250;

      btnsBurgerCatalogLink.forEach(btn => {
        btn.setAttribute('data-bs-offset','10,14');
      })

      document.querySelectorAll('.product__dropdown-menu-list-item').forEach(elem => {
        elem.classList.remove('dropend');
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

  itemMarkWood.forEach(btn => {
    btn.addEventListener('click',() => {
      itemMarkWood.forEach(btn => {
        btn.classList.remove('focus');
      })

      btn.classList.add('focus')
    })
  })

  itemMarkSteel.forEach(btn => {
    btn.addEventListener('click',() => {
      itemMarkSteel.forEach(btn => {
        btn.classList.remove('focus');
      })

      btn.classList.add('focus')
    })
  })

  inputCountProduct.addEventListener('input', countPrice);

  adaptiveLink();
  window.addEventListener('resize', adaptiveLink);
})