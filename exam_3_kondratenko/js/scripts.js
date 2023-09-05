// @ts-nocheck
window.addEventListener("DOMContentLoaded", function () {
  function burgerMenu() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");
    const burgerMenu = document.querySelector(".menu__burger");
    const overlay = document.querySelector(".menu__overlay");
    const handlbag = document.querySelector(".menu__handlbag");
    burger.addEventListener("click", () => {
      if (!menu.classList.contains("active")) {
        menu.classList.add("active");
        burger.classList.add("active-burger");
        body.classList.add("locked");
        burgerMenu.classList.add("active");
        overlay.classList.add("active");
        handlbag.style.display = "none";
      } else {
        menu.classList.remove("active");
        burger.classList.remove("active-burger");
        body.classList.remove("locked");
        burgerMenu.classList.remove("active");
        overlay.classList.remove("active");
        handlbag.style.display = "block";
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove("active");
        burger.classList.remove("active-burger");
        body.classList.remove("locked");
        burgerMenu.classList.remove("active");
        overlay.classList.remove("active");
      }
    });
  }
  burgerMenu();

  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector("nav");

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1;
    if (window.scrollY >= breakpoint) {
      nav.classList.add("fixed__nav");
    } else {
      nav.classList.remove("fixed__nav");
    }
  }
  window.addEventListener("scroll", fixedNav);

  //search-bar
  (function () {
    const search = document.querySelector(".search-bar"),
      triggerSearch = document.querySelector("[data-search]"),
      menu = document.querySelectorAll(".menu__item"),
      closeBtn = document.querySelector(".search__close");

    triggerSearch.addEventListener("click", () => {
      menu.forEach((item) => {
        item.classList.add("active");
      });
      search.classList.add("active");
      triggerSearch.classList.add("active");
    });
    closeBtn.addEventListener("click", () => {
      menu.forEach((item) => {
        item.classList.remove("active");
      });
      search.classList.remove("active");
      triggerSearch.classList.remove("active");
    });
  })();

  //slider
  if (document.querySelector(".slider__bouquets")) {
    (function () {
      $(document).ready(function () {
        $(".slider__bouquets").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow:
            '<img src="../../img/icons/arrow-right.svg" class="slick-next" alt="next">',
          prevArrow:
            '<img src="../../img/icons/arrow-left.svg" class="slick-prev" alt="prev">',
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 576,
              settings: "unslick",
            },
          ],
        });
      });
    })();
  }

  // Аккордеон
  function accordion() {
    const accordionItemTitles = document.querySelectorAll(
      ".accordion-item__title"
    );

    for (var i = 0; i < accordionItemTitles.length; i++) {
      accordionItemTitles[i].addEventListener("click", function (event) {
        event.preventDefault();
        event.target.classList.toggle("active");
        const accordionItemContent = event.target.nextElementSibling;

        if (!accordionItemContent.classList.contains("active")) {
          accordionItemContent.classList.add("active");
          accordionItemContent.style.height = "auto";

          var height = accordionItemContent.clientHeight + "px";

          accordionItemContent.style.height = "0px";

          setTimeout(function () {
            accordionItemContent.style.height = height;
          }, 0);
        } else {
          accordionItemContent.style.height = "0px";

          accordionItemContent.addEventListener(
            "transitionend",
            function () {
              accordionItemContent.classList.remove("active");
            },
            {
              once: true,
            }
          );
        }
      });
    }
  }
  accordion();

  // Каталог
  if (document.querySelector(".catalog")) {
    (function () {
      const openCatalog = document.querySelector(".catalog__buttons-title"),
        buttons = document.querySelector(".catalog__buttons"),
        openFilter = document.querySelector(".catalog__filter-title"),
        filter = document.querySelector(".catalog__filter");

      openCatalog.addEventListener("click", () => {
        buttons.classList.toggle("active");
      });

      openFilter.addEventListener("click", () => {
        filter.classList.toggle("active");
      });
    })();
  }

  // Модальное окно
  if (document.querySelector(".modal__wrapper")) {
    (function () {
      const modalTrigger = document.querySelectorAll(".modal__btn"),
        modal = document.querySelector(".modal__wrapper"),
        modalCloseBtn = document.querySelector("[data-close]");

      modalTrigger.forEach((btn) => {
        btn.addEventListener("click", () => {
          modal.classList.add("active");
          document.body.style.overflow = "hidden";
        });
      });

      function closeModal() {
        modalCloseBtn.addEventListener("click", () => {
          modal.classList.remove("active");
          document.body.style.overflow = "";
        });
      }
      closeModal();

      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("active")) {
          modal.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    })();
  }
});
