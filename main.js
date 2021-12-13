const images = [
  // array of all photo with all properities
  {
    src: "./image/animal.jpg",
    alt: "animal picture",
    id: 1,
    title: "Rappit",
    discription: " photograph of Cute rappit with pink baloon.",
    itsFav:false,
  },
  {
    src: "./image/nature2.jpg",
    alt: "Valley",
    id: 3,
    title: "Valley",
    discription: " sunset at Monument Valley in Arizona USA. ",
    itsFav:false,
  },
  {
    src: "./image/animal0.jpg",
    alt: "animal picture",
    id: 1,
    title: "Giraffe",
    discription: "giraffe with sky in kenya, taken by: Salem Alhajri .",
    itsFav:false,
  },
  {
    src: "./image/animal1.jpg",
    alt: "Tigers",
    id: 1,
    title: "Tigers",
    discription: " Jaquar and Leopard two kinds of tigers.",
    itsFav:false,
  },
  {
    src: "./image/nature3.jpg",
    alt: "Baobab Trees",
    id: 3,
    title: "Baobab Trees",
    discription: " Africa icon 'baobab trees' in Madagascar . ",
    itsFav:false,
  },
  {
    src: "./image/space0.jpg",
    alt: "Aurora boreali",
    id: 2,
    title: "Aurora Borealis",
    discription: "Melky Way galaxy and Aurora Borealis .",
    itsFav:false,
  },
  {
    src: "./image/cartoon4.jpg",
    alt: "Rapunzel Tower",
    id: 4,
    title: "Rapunzel Tower",
    discription: "Rapunzel Tower from Tangled movie. ",
    itsFav:false,
  },
{
  src: "./image/nature4.jpg",
  alt: "WaterFall",
  id: 3,
  title: "WaterFall",
  discription: "Niagara falls in Canada and NewYork .",
  itsFav:false,
},
  {
    src: "./image/animal5.jpg",
    alt: "Lama",
    id: 1,
    title: "Lama",
    discription: " Fashion Lama with sunglasses and scarf.",
    itsFav:false,
  },
  {
    src: "./image/space1.jpg",
    alt: "Moon",
    id: 2,
    title: "Moon",
    discription: "graphic of earth from the moon with astronaut.",
    itsFav:false,
  },
  {
    src: "./image/animal2.jpg",
    alt: "Lioness",
    id: 1,
    title: "Lioness",
    discription: "Queen lioness with crown in black and white. ",
    itsFav:false,
  },
  {
    src: "./image/tourism3.jpg",
    alt: "Eiffel Tower",
    id: 5,
    title: "Eiffel Tower",
    discription: "Eiffel tower with sunset in Paris,France. ",
    itsFav:false,
  },
  {
    src: "./image/cartoon0.jpg",
    alt: "Patrick Star ",
    id: 4,
    title: "Patrick Star",
    discription: "Patrick Star happy and run with trawl hat  . ",
    itsFav:false,
  },
  {
    src: "./image/space3.jpg",
    alt: "Earth",
    id: 2,
    title: "Earth",
    discription: "Earth from space with sun light reflection.",
    itsFav:false,
  },
  {
    src: "./image/tourism2.jpg",
    alt: "Pyramids",
    id: 5,
    title: "Pyramids",
    discription: "The Pyramids with camel in the desert in Egypt.",
    itsFav:false,
  },
  {
    src: "./image/cartoon5.jpg",
    alt: "Elsa ",
    id: 4,
    title: "Elsa",
    discription: "Elsa , queen of the ice  from Frozen movie  . ",
    itsFav:false,
  },
  {
    src: "./image/animal6.jpg",
    alt: "Flamingo",
    id: 1,
    title: "Flamingo",
    discription: " Group of flamingo behind the lake.",
    itsFav:false,
  },
  {
    src: "./image/tourism1.jpg",
    alt: "Petra",
    id: 5,
    title: "Petra",
    discription: "Pink Petra with a tourist in Jordan.",
    itsFav:false,
  },
  {
    src: "./image/cartoon2.jpg",
    alt: "Winnie The Pooh",
    id: 4,
    title: "Winnie The Pooh",
    discription: "Winnie the pooh with red baloon . ",
    itsFav:false,
  },
  {
    src: "./image/animal3.jpg",
    alt: "animal picture",
    id: 1,
    title: "Tiger",
    discription: "A tiger is sitting relaxing by the sea. ",
    itsFav:false,
  },
  {
    src: "./image/tourism0.jpg",
    alt: "Khalifa Tower",
    id: 5,
    title: "Khalifa Tower",
    discription: "Khalifa tower with dancing fountain in Dubai.",
    itsFav:false,
  },
  {
    src: "./image/space5.jpg",
    alt: "Stonehenge",
    id: 2,
    title: "Stonehenge",
    discription: "Stonehenge with milky way in England.",
    itsFav:false,
  },
  {
    src: "./image/space.jpg",
    alt: "Earth",
    id: 2,
    title: "Earth",
    discription: "Earth Lights from space with satelite.",
    itsFav:false,
  },
  {
    src: "./image/cartoon1.jpg",
    alt: "SpongeBob",
    id: 4,
    title: "SpongeBob",
    discription: "SpongeBob SquarePants with guitar.",
    itsFav:false,
  },
  {
    src: "./image/tourism.jpg",
    alt: "Arc de Triomphe",
    id: 5,
    title: "Arc de Triomphe",
    discription: "'Arc de Triomphe' with sunset in Paris. ",
    itsFav:false,
  },
  {
    src: "./image/nature.jpg",
    alt: "Sunset",
    id: 3,
    title: "sunset",
    discription: "Sunset on the beach with seagull.",
    itsFav:false,
  },
  {
    src: "./image/tourism4.jpg",
    alt: "Statua of Liberty",
    id: 5,
    title: "Statua of Liberty",
    discription: "Statua of Liberty Monument in New York City USA. ",
    itsFav:false,
  },
  {
    src: "./image/nature1.jpg",
    alt: "Palm Trees",
    id: 3,
    title: "Palm Trees",
    discription: "Palm Trees beside the road with sunset. ",
    itsFav:false,
  },
  {
    src: "./image/space2.jpg",
    alt: "Lucky Man",
    id: 2,
    title: "Lucky Man",
    discription: "Lucky Man looking to Milky Way galaxy.",
    itsFav:false,
  },
  {
    src: "./image/nature0.jpg",
    alt: "Sea Waves",
    id: 3,
    title: "Sea Waves",
    discription: "Sea Waves with sunset and cloud. ",
    itsFav:false,
  },
  {
    src: "./image/cartoon.jpg",
    alt: "Pink Panther",
    id: 4,
    title: "Pink Panther",
    discription: "upset pink panther ",
    itsFav:false,
  },
  {
    src: "./image/space4.jpg",
    alt: "Galaxy",
    id: 2,
    title: "Galaxy",
    discription: "Milky Way galaxy with a billion of stars.",
    itsFav:false,
  },
];
// array in local storage.
const myFavo= JSON.parse(localStorage.getItem("favorites"))
// 3 divs in html .
const cards = $(".cards");
const myfav = $(".myfav");
const filtered = $(".filtered");


  // function to sort images
const addToDiv = (array, divName) => {
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
      $(`<svg style="color: #013033;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="Favo" viewBox="0 0 16 16">
      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
    </svg>`);
    if (element.itsFav){
      favorite.attr("style", "color:rgb(226, 66, 66) ;");
    }

    favorite.on("click", () => {
    element.itsFav=true;
     myFavo.push(element);
      localStorage.setItem("favorites", JSON.stringify(myFavo));
      favorite.attr("style", "color:rgb(226, 66, 66) ;");
     
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
// add main page with all picture using 'addToDiv' function 
// addToDiv(images, cards); 
// add Favorites list
const navBar = $(".navBar");
const favList = $('<div class="Favorite"></div>');
const fav = $('<button class="fav">Favorite</button>');
// favList.appendTo(navBar);
// fav.on("click", () => {
 
// //clean all cards to add favorite list 
//   $(".image").remove();
// // to display local storage favorite images
//   myfavo.forEach((element) => {
//     const card = $("<div class='image'></div>");
//     const image = $("<img></img>");
//     image.attr("id", element.id);
//     image.attr("src", element.src);
//     image.attr("alt", element.alt);
//     const title = $("<h3></h3>");
//     title.text(element.title);
//     const disc = $("<p></p>");
//     const favorite =
//       $(`<svg style="color: #013033;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
//       <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
//     </svg>`);
// //favorite here to delete from favorite list and local storage .
//     favorite.on("click", () => {
//       myfavo.forEach((ele,i)=>{
//         if (ele.title === element.title){
//           myfavo.splice(i,1);
//         }
//       })
//       favorite.attr("style", "color:rgb(226, 66, 66);");
//       //to update myfavo in localStorage .
//       localStorage.setItem("favorites", JSON.stringify(myfavo));
//     });
//     disc.text(element.discription);
//     image.appendTo(card);
//     title.appendTo(card);
//     disc.appendTo(card);
//     favorite.appendTo(card);
//     card.appendTo(myfav);
//     cards.hide();
//     filtered.hide();
//     myfav.show();
//   });
// });
fav.appendTo(favList);

// add cetagories
const categoires = $('<div class="categoires"></div>');
const list = $('<button class="list">Categoires</button>');
const cat = $('<div class="cat"></div>');
categoires.appendTo(navBar);
list.appendTo(categoires);
cat.appendTo(list);
//array of cetagories
const items = [
  { name: "All", id: 0 },
  { name: "Favorite", id: 100 },
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
    }else if(element.id== 100){
      $(".image").remove();
      myFavo.forEach((element) => {
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
    //favorite here to delete from favorite list and local storage .
        favorite.on("click", () => {
          myFavo.forEach((ele,i)=>{
            if (ele.title === element.title){
              element.itsFav= false;
              myFavo.splice(i,1);
              
            }
          })
          favorite.attr("style", "color:rgb(226, 66, 66);");
          //to update myfavo in localStorage .
          localStorage.setItem("favorites", JSON.stringify(myFavo));
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
    } else {
      const newImages = images.filter((ele) => {
        return element.id == ele.id;
      });
      $(".image").remove();
      // invoke function that sort every categorie 
      addToDiv(newImages, filtered);
    }
  });
  item.appendTo(cat);
});
// const logIn = $('.logIn');
// const userName =$('<input placeholder="User name "/>')
// userName.appendTo(logIn);
