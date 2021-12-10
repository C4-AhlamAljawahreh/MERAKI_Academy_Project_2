const images = [      // array of all photo with all properities
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
const myfav=$('.myfav');
const filtered = $(".filtered");
const addToDiv =(array , divName)=>{
array.forEach((element) => {
  const card = $("<div class='image'></div>");
  const image = $("<img></img>");
  image.attr("id", element.id);
  image.attr("src", element.src);
  image.attr("alt", element.alt);
  const title = $("<h3></h3>");
  title.text(element.title);
  const disc = $("<p></p>");
  const favorite = $(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="favorite" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>`)
  favorite.on('click',()=>{ 
    myFav.push(element);
    favorite.attr('fill',"black"); 
     })
  disc.text(element.discription);
  image.appendTo(card);
  title.appendTo(card);
  disc.appendTo(card);
  favorite.appendTo(card)
  card.appendTo(divName);
  cards.hide();
  myfav.hide();
  filtered.hide();
  divName.show();
});
}
addToDiv(images,cards);

// add Favorites list 
const navBar = $(".navBar");
const favList = $('<div class="Favorite"></div>');
const fav= $('<button class="fav">Favorite</button>');
favList.appendTo(navBar);
fav.on('click',()=>{
  console.log(myFav);
  addToDiv(myFav,myfav);
  
})
fav.appendTo(favList);

// add cetagories 
const categoires = $('<div class="categoires"></div>');
const list = $('<button class="list">Categoires</button>');
const cat = $('<div class="cat"></div>');
categoires.appendTo(navBar);
list.appendTo(categoires);
cat.appendTo(list);
const items = [
  { name: "Animal", id: 1 },
  { name: "Space", id: 2 },
  { name: "Nature", id: 3 },
  { name: "Cartoon", id: 4 },
];
items.forEach((element) => {
  const item = $("<h4></h4>");
  item.text(element.name);
  item.on("click", () => {
    const newImages = images.filter((ele) => {
      // try to activate cetagories
      return element.id == ele.id;
    });
    addToDiv(newImages,filtered);
  });
  item.appendTo(cat);
});


