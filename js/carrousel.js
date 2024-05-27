(function () {
  let carrousel = document.querySelector(".carrousel");
  let bouton = document.querySelector(".bouton__ouvrir");
  let carrousel__x = document.querySelector(".carrousel__x");
  let galerie = document.querySelector('.galerie');
  let carrousel__figure = document.querySelector(".carrousel__figure");
  let galerie__img = galerie.querySelectorAll('img'); // la collection des images de la galerie
  let index = 0;

  let carrousel__prev = document.querySelector(".carrousel__prev");
  let carrousel__next = document.querySelector(".carrousel__next");

  galerie__img.forEach((elm, idx) => {
    creer_image_carrousel(elm, idx);
    creer_radio_carrousel(idx);

    // Ajoute un événement de clic sur chaque image de la galerie
    elm.addEventListener('click', function () {
      index = idx;
      montrer_image(index);
      carrousel.classList.add('carrousel--ouvrir');
    });
  });

  function creer_image_carrousel(elm, idx) {
    let carrousel__img = document.createElement('img');
    carrousel__img.classList.add('carrousel__img');
    carrousel__img.dataset.index = idx;
    carrousel__img.src = elm.src;
    carrousel__img.style.opacity = idx === 0 ? 1 : 0; // Montre la première image par défaut
    carrousel__figure.appendChild(carrousel__img);
  }

  function creer_radio_carrousel(idx) {
    let carrousel__form = document.querySelector('.carrousel__form');
    let carrousel_radio = document.createElement('input');
    carrousel_radio.classList.add('carrousel_radio');
    carrousel_radio.dataset.index = idx;
    carrousel_radio.type = 'radio';
    carrousel_radio.name = 'imageRadio';
    carrousel__form.appendChild(carrousel_radio);

    carrousel_radio.addEventListener('click', function () {
      let idx = this.dataset.index;
      montrer_image(idx);
    });
  }

  function montrer_image(idx) {
    let carrousel__imgs = carrousel__figure.children;
    for (const img of carrousel__imgs) {
      img.style.opacity = 0;
    }
    carrousel__imgs[idx].style.opacity = 1;
  }

  carrousel__prev.addEventListener('click', function () {
    let carrousel__imgs = carrousel__figure.children;
    index = (index - 1 + carrousel__imgs.length) % carrousel__imgs.length;
    montrer_image(index);
  });

  carrousel__next.addEventListener('click', function () {
    let carrousel__imgs = carrousel__figure.children;
    index = (index + 1) % carrousel__imgs.length;
    montrer_image(index);
  });

  bouton.addEventListener('mousedown', function () {
    carrousel.classList.add('carrousel--ouvrir');
  });

  carrousel__x.addEventListener('mousedown', function () {
    carrousel.classList.remove('carrousel--ouvrir');
  });

  // Affiche la première image par défaut
  montrer_image(index);
})();
