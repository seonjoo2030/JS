const images = [
    "Apple_September.jpg"
    , "Arched_Rock_Moab.jpg"
    , "Beautiful_Star_Trails.jpg"
    , "Birnbeck_Pier_Bristol_Channel_England.jpg"
    , "Coast_Stones.jpg"
    , "Inner_Mongolia_Alxa_Swan_Lake_Desert.jpg"
    , "Lindisfarne_Castle_Dawn_Northumberland.jpg"
    , "Mountains_Wildflowers.jpg"
    , "Red_Leaves_Tree_Sunshine_Hillside.jpg"
    , "USA_Washington_Glacier_Lake.jpg"
];

const randomImage = images[Math.floor(Math.random() * images.length)];

//js를 통해 html에 element 추가
const bgImage = document.createElement("img");

bgImage.src = `img/${randomImage}`;

//body에 html elenent 추가.
document.body.appendChild(bgImage);

