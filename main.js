const images = [
  // array of all photo with all properities
  {
    src: "./animal.jpg",
    alt: "animal picture",
    id: 1,
    title: "Rappit",
    discription: "Cute rappit with baloon",
  },
  {
    src: "./nature2.jpg",
    alt: "Nature",
    id: 3,
    title: "Nature",
    discription: "Nature",
  },
  {
    src: "./animal0.jpg",
    alt: "animal picture",
    id: 1,
    title: "Giraffe",
    discription: "giraffe with sky ",
  },
  {
    src: "./animal1.jpg",
    alt: "animal picture",
    id: 1,
    title: "Tigers",
    discription: " tiger with a black leopard",
  },
  {
    src: "./nature3.jpg",
    alt: "Nature",
    id: 3,
    title: "Nature",
    discription: "Nature",
  },
  {
    src: "./space0.jpg",
    alt: "space picture",
    id: 2,
    title: "Aurora borealis",
    discription: "space & aurora borealis",
  },
  {
    src: "./cartoon4.jpg",
    alt: "cartoon",
    id: 4,
    title: "cartoon",
    discription: "cartoon ",
  },
  {
    src: "./animal5.jpg",
    alt: "animal picture",
    id: 1,
    title: "Lama",
    discription: " Fashion Lama",
  },
  {
    src: "./space1.jpg",
    alt: "space picture",
    id: 2,
    title: "Graphic",
    discription: "graphic of earth from space",
  },
  {
    src: "./animal2.jpg",
    alt: "animal picture",
    id: 1,
    title: "Lioness",
    discription: "queen lioness",
  },
  {
    src: "./tourism3.jpg",
    alt: "tourism",
    id: 5,
    title: "tourism",
    discription: "tourism ",
  },
  {
    src: "./cartoon0.jpg",
    alt: "cartoon",
    id: 4,
    title: "cartoon",
    discription: "cartoon ",
  },
  {
    src: "./space3.jpg",
    alt: "space picture",
    id: 2,
    title: "Far Away",
    discription: "earth from satellite",
  },
  {
    src: "./tourism2.jpg",
    alt: "tourism",
    id: 5,
    title: "tourism",
    discription: "tourism ",
  },
  {
    src: "./animal4.jpg",
    alt: "animal picture",
    id: 1,
    title: "Lama",
    discription: " Cute Lama",
  },
  {
    src: "./space.jpg",
    alt: "space picture",
    id: 2,
    title: "Earth",
    discription: "earth from space",
  },
  {
    src: "./tourism1.jpg",
    alt: "tourism",
    id: 5,
    title: "tourism",
    discription: "tourism ",
  },
  {
    src: "./cartoon2.jpg",
    alt: "cartoon",
    id: 4,
    title: "cartoon",
    discription: "cartoon ",
  },
  {
    src: "./animal3.jpg",
    alt: "animal picture",
    id: 1,
    title: "Tiger",
    discription: "tiger with a sea ",
  },
  {
    src: "./tourism0.jpg",
    alt: "tourism",
    id: 5,
    title: "tourism",
    discription: "tourism ",
  },
  {
    src: "./space5.jpg",
    alt: "space picture",
    id: 2,
    title: "Far Away",
    discription: "earth from satellite",
  },
  {
    src: "./cartoon1.jpg",
    alt: "cartoon",
    id: 4,
    title: "cartoon",
    discription: "cartoon ",
  },
  {
    src: "./tourism.jpg",
    alt: "tourism",
    id: 5,
    title: "tourism",
    discription: "tourism ",
  },
  {
    src: "./nature.jpg",
    alt: "Nature",
    id: 3,
    title: "Nature",
    discription: "Nature",
  },
  {
    src: "./nature1.jpg",
    alt: "Nature",
    id: 3,
    title: "Nature",
    discription: "Nature",
  },
  {
    src: "./space2.jpg",
    alt: "space picture",
    id: 2,
    title: "Stars",
    discription: "space from dark earth ",
  },
  {
    src: "./nature0.jpg",
    alt: "Nature",
    id: 3,
    title: "Nature",
    discription: "Nature ",
  },
  {
    src: "./cartoon.jpg",
    alt: "cartoon",
    id: 4,
    title: "cartoon",
    discription: "cartoon ",
  },
  {
    src: "./space4.jpg",
    alt: "space picture",
    id: 2,
    title: "Milky Way",
    discription: "milky way",
  },
];
let myFav = [];
const cards = $(".cards");
const myfav = $(".myfav");
const filtered = $(".filtered");
const addToDiv = (array, divName) => {
  // function to sort elements
  array.forEach((element) => {
    const card = $("<div class='image'></div>");
    const image = $("<img></img>");
    image.attr("id", element.id);
    image.attr("src", element.src);
    image.attr("alt", element.alt);
    const title = $("<h3></h3>");
    title.text(element.title);
    const disc = $("<p></p>");
    const favorite =
      $(`<svg style="color: #013033;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
    </svg>`);

    favorite.on("click", () => {
      myFav.push(element);
      localStorage.setItem("favorites", JSON.stringify(myFav));
      favorite.attr("style", "color:red;");
    });
    disc.text(element.discription);
    image.appendTo(card);
    title.appendTo(card);
    disc.appendTo(card);
    favorite.appendTo(card);
    card.appendTo(divName);
    cards.hide();
    myfav.hide();
    filtered.hide();
    divName.show();
  });
};
addToDiv(images, cards);
// add Favorites list
const navBar = $(".navBar");
const favList = $('<div class="Favorite"></div>');
const fav = $('<button class="fav">Favorite</button>');
favList.appendTo(navBar);
fav.on("click", () => {
 

  $(".image").remove();
  // addToDiv(myFav, myfav);
 const myfavo= JSON.parse(localStorage.getItem("favorites"))
  myfavo.forEach((element) => {
    const card = $("<div class='image'></div>");
    const image = $("<img></img>");
    image.attr("id", element.id);
    image.attr("src", element.src);
    image.attr("alt", element.alt);
    const title = $("<h3></h3>");
    title.text(element.title);
    const disc = $("<p></p>");
    const favorite =
      $(`<svg style="color: #013033;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
    </svg>`);

    favorite.on("click", () => {
      myFav.forEach((ele,i)=>{
        if (ele.discription === element.discription){
          myFav.splice(i,1);
        }
      })
      localStorage.setItem("favorites", JSON.stringify(myFav));
    });
    disc.text(element.discription);
    image.appendTo(card);
    title.appendTo(card);
    disc.appendTo(card);
    favorite.appendTo(card);
    card.appendTo(myfav);
    cards.hide();
    filtered.hide();
    myfav.show();
  });
});
fav.appendTo(favList);

// add cetagories
const categoires = $('<div class="categoires"></div>');
const list = $('<button class="list">Categoires</button>');
const cat = $('<div class="cat"></div>');
categoires.appendTo(navBar);
list.appendTo(categoires);
cat.appendTo(list);
const items = [
  //array of cetagories
  { name: "All", id: 0 },
  { name: "Animal", id: 1 },
  { name: "Space", id: 2 },
  { name: "Nature", id: 3 },
  { name: "Cartoon", id: 4 },
  { name: "Tourism", id: 5 },
];
items.forEach((element) => {
  const item = $("<h4></h4>");
  item.text(element.name);
  item.on("click", () => {
    if (element.id == 0) {
      $(".image").remove();
      addToDiv(images, cards);
    } else {
      const newImages = images.filter((ele) => {
        return element.id == ele.id;
      });
      $(".image").remove();
      addToDiv(newImages, filtered);
    }
  });
  item.appendTo(cat);
});
