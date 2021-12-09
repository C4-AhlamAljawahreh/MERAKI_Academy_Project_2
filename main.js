const images=[{src:"./animal.jpg" ,alt:"animal picture", id:1 , title:"Rappit",discription:"Cute rappit with baloon"},
                {src:"./animal0.jpg" ,alt:"animal picture", id:1 ,title:"Giraffe", discription:"giraffe with sky "},
                {src:"./animal1.jpg" , alt:"animal picture",id:1 ,title:"Tigers", discription:" tiger with a black leopard"},
                {src:"./space0.jpg" ,alt:"space picture", id:2 ,title:"Aurora borealis", discription:"space & aurora borealis"},
                {src:"./space1.jpg" ,alt:"space picture", id:2 ,title:"Graphic", discription:"graphic of earth from space"},
                {src:"./animal2.jpg" ,alt:"animal picture", id:1 ,title:"Lioness", discription:"queen lioness"},
                {src:"./space3.jpg" ,alt:"space picture", id:2 ,title:"Far Away", discription:"earth from satellite"},
                {src:"./space.jpg" ,alt:"space picture", id:2 ,title:"Earth", discription:"earth from space"},
                {src:"./animal3.jpg" ,alt:"animal picture", id:1 ,title:"Tiger", discription:"tiger with a sea "},
                {src:"./space5.jpg" ,alt:"space picture", id:2 ,title:"Far Away", discription:"earth from satellite"},
                {src:"./nature.jpg" ,alt:"Nature", id:3 ,title:"Nature", discription:"Nature"},
                {src:"./nature1.jpg" ,alt:"Nature", id:3 ,title:"Nature", discription:"Nature"},
                {src:"./space2.jpg" ,alt:"space picture", id:2 ,title:"Stars", discription:"space from dark earth "},
                {src:"./nature0.jpg" ,alt:"Nature", id:3 ,title:"Nature", discription:"Nature "},
                {src:"./space4.jpg" ,alt:"space picture", id:2 ,title:"Milky Way", discription:"milky way"}];

const cards =$(".cards");

images.forEach((element) =>{
const card = $("<div class='image'></div>")
const image=$('<img></img>')
image.attr('id',element.id);
image.attr('src',element.src);
image.attr('alt',element.alt);
const title = $('<h3></h3>')
title.text(element.title);
const disc= $('<p></p>');
const fav=$()
disc.text(element.discription);
image.appendTo(card);
title.appendTo(card);
disc.appendTo(card);
card.appendTo(cards);
});


// add categories dropdown button 

const categoires = $('<div class="categoires"></div>')
const  list = $('<button class="list">Categoires</button>')
const navBar = $('.navBar');
const cat = $('<div class="cat"></div>');
categoires.appendTo(navBar);
list.appendTo(categoires);
cat.appendTo(list);
const items= [{name:'Animal',id:1},{name:'Space',id:2},{name:'Nature',id:3}]
items.forEach((element)=>{
const item=$('<h4></h4>')
item.text(element.name);
item.on('click',()=>{
const newImages =images.filter(ele=>{ // try to activate cetagories
    return element.id == ele.id
}) 
const filtered = $('.filtered');
newImages.forEach((element) =>{
    const card = $("<div class='image'></div>")
    const image=$('<img></img>')
    image.attr('id',element.id);
    image.attr('src',element.src);
    image.attr('alt',element.alt);
    const title = $('<h3></h3>')
    title.text(element.title);
    const disc= $('<p></p>');
    const fav=$()
    disc.text(element.discription);
    image.appendTo(card);
    title.appendTo(card);
    disc.appendTo(card);
    card.appendTo(filtered);
    });
cards.hide();

console.log(newImages);
});
item.appendTo(cat)
})

const muFav=[];


