var imageBlocks = [
  {
    title: "album 1",
    imgSrc: "http://www.placecage.com/200/200",
  },
  {
    title: "album 2",
    imgSrc: "http://www.placecage.com/210/210",
  },
  {
    title: "album 3",
    imgSrc: "http://www.placecage.com/200/230"
  },
  {
    title: "album 4",
    imgSrc: "http://www.placecage.com/200/250"
  },
  {
    title: "album 5",
    imgSrc: "http://www.placecage.com/210/220"
  },
  {
    title: "album 6",
    imgSrc: "http://www.placecage.com/190/210"
  }
  // {
  //   title: "album 7",
  //   imgSrc: "http://www.placecage.com/190/210"
  // }
];

var numOfAlbums = imageBlocks.length;

var albums = [];

  albums.push({
  title: "album 1",
  });

  albums.push({
   title: "album 2",
  });

  albums.push({
   title: "album 3",
  });

  albums.push({
   title: "album 4",
  });

  albums.push({
   title: "album 5",
  });

  albums.push({
   title: "album 6",
  });

  // albums.push({
  //  title: "album 7",
  // });

  albums[0].pictures = [
   {
     url: "http://www.placecage.com/300/300",
     title: "picture 1",
     rel: '1'
   },
   {
     url: "http://www.placecage.com/310/300",
     title: "picture 2",
     rel: '2'
   },
   {
     url: "http://www.placecage.com/320/300",
     title: "picture 3",
     rel: '3'
   },
   {
     url: "http://www.placecage.com/300/310",
     title: "picture 4",
     rel: '4'
   },
   {
     url: "http://www.placecage.com/300/320",
     title: "picture 5",
     rel: '5'
   },
   {
     url: "http://www.placecage.com/320/320",
     title: "picture 6",
     rel: '6'
   },
 ];

 albums[1].pictures = [
   {
     url: "http://www.placecage.com/310/300",
     title: "picture 1",
     rel: '1'
   },
   {
     url: "http://www.placecage.com/310/300",
     title: "picture 2",
     rel: '2'
   },
   {
     url: "http://www.placecage.com/320/310",
     title: "picture 3",
     rel: '3'
   },
   {
     url: "http://www.placecage.com/300/310",
     title: "picture 4",
     rel: '4'
   },
   {
     url: "http://www.placecage.com/310/320",
     title: "picture 5",
     rel: '5'
   },
   {
     url: "http://www.placecage.com/320/330",
     title: "picture 6",
     rel: '6'
   },
 ];

 albums[2].pictures = [
   {
     url: "http://www.placecage.com/310/320",
     title: "picture 1",
     rel: '1'
   },
   {
     url: "http://www.placecage.com/310/300",
     title: "picture 2",
     rel: '2'
   },
   {
     url: "http://www.placecage.com/350/310",
     title: "picture 3",
     rel: '3'
   },
   {
     url: "http://www.placecage.com/300/310",
     title: "picture 4",
     rel: '4'
   },
   {
     url: "http://www.placecage.com/310/350",
     title: "picture 5",
     rel: '5'
   },
   {
     url: "http://www.placecage.com/310/330",
     title: "picture 6",
     rel: '6'
   },
 ];

 albums[3].pictures = [
   {
     url: "http://www.placecage.com/300/300",
     title: "picture 1",
     rel: '1'
   },
   {
     url: "http://www.placecage.com/310/300",
     title: "picture 2",
     rel: '2'
   },
   {
     url: "http://www.placecage.com/350/310",
     title: "picture 3",
     rel: '3'
   },
   {
     url: "http://www.placecage.com/300/310",
     title: "picture 4",
     rel: '4'
   },
   {
     url: "http://www.placecage.com/310/350",
     title: "picture 5",
     rel: '5'
   },
   {
     url: "http://www.placecage.com/310/330",
     title: "picture 6",
     rel: '6'
   },
 ];

 albums[4].pictures = [
   {
     url: "http://www.placecage.com/310/350",
     title: "picture 1",
     rel: '1'
   },
   {
     url: "http://www.placecage.com/300/300",
     title: "picture 2",
     rel: '2'
   },
   {
     url: "http://www.placecage.com/300/310",
     title: "picture 3",
     rel: '3'
   },
   {
     url: "http://www.placecage.com/315/310",
     title: "picture 4",
     rel: '4'
   },
   {
     url: "http://www.placecage.com/310/320",
     title: "picture 5",
     rel: '5'
   },
   {
     url: "http://www.placecage.com/320/320",
     title: "picture 6",
     rel: '6'
   },
 ];

 albums[5].pictures = [
   {
     url: "http://www.placecage.com/320/300",
     title: "picture 1",
     rel: '1'
   },
   {
     url: "http://www.placecage.com/310/300",
     title: "picture 2",
     rel: '2'
   },
   {
     url: "http://www.placecage.com/350/310",
     title: "picture 3",
     rel: '3'
   },
   {
     url: "http://www.placecage.com/300/310",
     title: "picture 4",
     rel: '4'
   },
   {
     url: "http://www.placecage.com/320/320",
     title: "picture 5",
     rel: '5'
   },
   {
     url: "http://www.placecage.com/300/330",
     title: "picture 6",
     rel: '6'
   },
 ];

 // albums[6].pictures = [
 //   {
 //     url: "http://www.placecage.com/310/300",
 //     title: "picture 1",
 //     rel: '1'
 //   },
 //   {
 //     url: "http://www.placecage.com/310/300",
 //     title: "picture 2",
 //     rel: '2'
 //   },
 //   {
 //     url: "http://www.placecage.com/320/310",
 //     title: "picture 3",
 //     rel: '3'
 //   },
 //   {
 //     url: "http://www.placecage.com/300/310",
 //     title: "picture 4",
 //     rel: '4'
 //   },
 //   {
 //     url: "http://www.placecage.com/310/320",
 //     title: "picture 5",
 //     rel: '5'
 //   },
 //   {
 //     url: "http://www.placecage.com/320/330",
 //     title: "picture 6",
 //     rel: '6'
 //   },
 // ];

var nav = {};

nav.navButtons = [
  "<div class='albumLink linkAcross' rel='<%= title %>'",
    "<h1><%= title %></h1>",
  "</div>"
].join("");


var picture = {};

picture.post = [
  "<div class='picContainer picHover'  rel='<%= title %>'>",
    "<div class='picture box'>",
      "<img src='<%= imgSrc %>' alt=>",
    "</div>",
    "<div class='tag box'>",
        "<a href=''><h2><%= title %></h2></a>",
    "</div>",
  "</div>"
].join("");

picture.picPost = [
  "<div class='pictured picHover' rel='<%= rel %>'>",
    "<img class ='indPic' src='<%= url %>' alt=''>",
    "<div class='picTag'><h2><%= title %></h2></div>",
  "</div>"
].join("")
