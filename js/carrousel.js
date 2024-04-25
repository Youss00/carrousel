(function () {
  // console.log('début du carrousel')
  let carrousel = document.querySelector(".carrousel");
  // console.log("carrousel = " + carrousel.tagName)
  let bouton = document.querySelector(".bouton__ouvrir");
  // console.log("bouton = " + bouton.tagName)
  let carrousel__x = document.querySelector(".carrousel__x");

  let galerie = document.querySelector('.galerie');
  // let galerie__img = galerie.querySelector('img') // première image seulement
  let index = 0;


  let carrousel__figure = document.querySelector(".carrousel__figure");
  let galerie__img = galerie.querySelectorAll('img'); // la collection des images de la galerie


  for (const elm of galerie__img) {
    // console.log(elm.src)
    creer_image_carrousel(elm);
    index = index + 1;
    creer_radio_carrousel(index - 1);
  }
  /***
   * @param {*} index numéro de l'image
   */
  function creer_image_carrousel(elm, index) {
    let carrousel__img = document.createElement('img');
    carrousel__img.classList.add('carrousel__img');
    carrousel__img.dataset.index = index;
    carrousel__img.src = elm.src;
    carrousel__figure.appendChild(carrousel__img);

  }

  function creer_radio_carrousel(index) {
    let carrousel__form = document.querySelector('.carrousel__form')
    let carrousel_radio = document.createElement('input');
    //class 
    carrousel_radio.classList.add('carrousel_radio');
    //index
    carrousel_radio.dataset.index = index;
    //type
    carrousel_radio.type = 'radio';
    //name
    carrousel_radio.name = 'imageRadio';
    //ajouter dans carrousel__form
    carrousel__form.appendChild(carrousel_radio);



    carrousel_radio.addEventListener('click', function () {
      let index = this.dataset.index;
      let carrousel__imgs = carrousel__figure.children;
      for (const img of carrousel__imgs) {

        img.style.opacity = 0;

      }
      carrousel__imgs[index].style.opacity = 1;
    })

  }








  bouton.addEventListener('mousedown', function () {
    console.log("bouton mousedown ")
    carrousel.classList.add('carrousel--ouvrir');
  })

  carrousel__x.addEventListener('mousedown', function () {
    console.log("bouton mousedown ");
    carrousel.classList.remove('carrousel--ouvrir');

  })

})()