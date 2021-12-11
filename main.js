const images = [
  // array of all photo with all properities
  {
    src: "./animal.jpg",
    alt: "animal picture",
    id: 1,
    title: "Rappit",
    discription: " photograph of Cute rappit with pink baloon.",
  },
  {
    src: "./nature2.jpg",
    alt: "Valley",
    id: 3,
    title: "Valley",
    discription: " sunset at Monument Valley in Arizona USA. ",
  },
  {
    src: "./animal0.jpg",
    alt: "animal picture",
    id: 1,
    title: "Giraffe",
    discription: "giraffe with sky in kenya. ",
  },
  {
    src: "./animal1.jpg",
    alt: "Tigers",
    id: 1,
    title: "Tigers",
    discription: " Jaquar and Leopard .",
  },
  {
    src: "./nature3.jpg",
    alt: "Baobab Trees",
    id: 3,
    title: "Baobab Trees",
    discription: "baobab trees in Madagascar. ",
  },
  {
    src: "./space0.jpg",
    alt: "Aurora boreali",
    id: 2,
    title: "Aurora Borealis",
    discription: "Melky Way & Aurora Borealis .",
  },
  {
    src: "./cartoon4.jpg",
    alt: "Rapunzel Tower",
    id: 4,
    title: "Rapunzel Tower",
    discription: "Rapunzel Tower from Tangled movie. ",
  },
  {
    src: "./animal5.jpg",
    alt: "Lama",
    id: 1,
    title: "Lama",
    discription: " Fashion Lama with sunglasses and scarf.",
  },
  {
    src: "./space1.jpg",
    alt: "Graphic space",
    id: 2,
    title: "Graphic space",
    discription: "graphic of earth from space.",
  },
  {
    src: "./animal2.jpg",
    alt: "Lioness",
    id: 1,
    title: "Lioness",
    discription: "Queen lioness with crown. ",
  },
  {
    src: "./tourism3.jpg",
    alt: "Eiffel Tower",
    id: 5,
    title: "Eiffel Tower",
    discription: "Eiffel tower with sunset in Paris,France. ",
  },
  {
    src: "./cartoon0.jpg",
    alt: "Patrick Star ",
    id: 4,
    title: "Patrick Star",
    discription: "Patrick Star run with trawl hat . ",
  },
  {
    src: "./space3.jpg",
    alt: "Earth",
    id: 2,
    title: "Earth",
    discription: "Earth from space.",
  },
  {
    src: "./tourism2.jpg",
    alt: "Pyramids",
    id: 5,
    title: "Pyramids",
    discription: "The Pyramids with camel in the desert.",
  },
  {
    src: "./animal6.jpg",
    alt: "Flamingo",
    id: 1,
    title: "Flamingo",
    discription: " Group of flamingo behind the lake.",
  },
 
  {
    src: "./tourism1.jpg",
    alt: "Petra",
    id: 5,
    title: "Petra",
    discription: "Pink Petra with a tourist .",
  },
  {
    src: "./cartoon2.jpg",
    alt: "Winnie The Pooh",
    id: 4,
    title: "Winnie The Pooh",
    discription: "Winnie the pooh with red baloon . ",
  },
  {
    src: "./animal3.jpg",
    alt: "animal picture",
    id: 1,
    title: "Tiger",
    discription: "tiger with a sea. ",
  },
  {
    src: "./tourism0.jpg",
    alt: "Khalifa Tower",
    id: 5,
    title: "Khalifa Tower",
    discription: "Khalifa tower with dancing fountain.",
  },
  {
    src: "./space5.jpg",
    alt: "Stonehenge",
    id: 2,
    title: "Stonehenge",
    discription: "Stonehenge with milky way.",
  },
  {
    src: "./space.jpg",
    alt: "Earth",
    id: 2,
    title: "Earth",
    discription: "earth from space with satelite.",
  },
  {
    src: "./cartoon1.jpg",
    alt: "SpongeBob",
    id: 4,
    title: "SpongeBob",
    discription: "SpongeBob SquarePants with guitar.",
  },
  {
    src: "./tourism.jpg",
    alt: "Arc de Triomphe",
    id: 5,
    title: "Arc de Triomphe",
    discription: "'Arc de Triomphe' with sunset. ",
  },
  {
    src: "./nature.jpg",
    alt: "Sunset",
    id: 3,
    title: "sunset",
    discription: "Sunset on the beach with seagull.",
  },
  {
    src: "./nature1.jpg",
    alt: "Palm Trees",
    id: 3,
    title: "Palm Trees",
    discription: "Palm Trees beside the road with sunset. ",
  },
  {
    src: "./space2.jpg",
    alt: "Lucky Man",
    id: 2,
    title: "Lucky Man",
    discription: "Lucky Man looking to Milky Way galaxy.",
  },
  {
    src: "./nature0.jpg",
    alt: "Sea Waves",
    id: 3,
    title: "Sea Waves",
    discription: "Sea Waves with sunset and cloud. ",
  },
  {
    src: "./cartoon.jpg",
    alt: "Pink Panther",
    id: 4,
    title: "Pink Panther",
    discription: "upset pink panther ",
  },
  {
    src: "./space4.jpg",
    alt: "Galaxy",
    id: 2,
    title: "Galaxy",
    discription: "Milky Way galaxy",
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
      favorite.attr("style", "color:rgb(226, 66, 66);");
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
      favorite.attr("style", "color:rgb(226, 66, 66);");
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
