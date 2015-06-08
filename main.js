var compiledTmpl = _.template(picture.post);
var tmplString = "";
var curAlbum;
var selectedAlbum;
var compiledAlbmTmpl = _.template(picture.picPost);
var tmplAlbmString = "";
var compiledNavTmpl = _.template(nav.navButtons);
var tmplNavString = "";
var imgSrced;
var imageArray = [];
var clickedImg;
var left = 0;
var right = 0;


$(document).ready(function() {

/* HOME PAGE POSTS */

imageBlocks.forEach(function(el) {
  tmplString += compiledTmpl(el);

});

$('.contentWrap').append(tmplString);

/* CLICK INDIVIDUAL ALBUM ON HOME PAGE */
$('.contentWrap').on('click', '.picContainer', function(event) {
  event.preventDefault();
  tmplAlbmString = "";
  $('.top').parent().removeClass('active');
  $('.navLeft').parent().addClass('active');
  curAlbum = $(this).attr('rel');
  $('.albumTop').children().html(curAlbum);
  loadPics();
});

/* CLICK THE NAV BARS */
$('.albumLink').on('click', function(event) {
  event.preventDefault();
  tmplAlbmString = "";
  curAlbum = $(this).attr('rel');
  $('.albumTop').children().html(curAlbum);
  loadPics();
});

/* HOME BUTTON */

$('.homeButton').on('click', function(event) {
  $('.top').parent().addClass('active');
  $('.navLeft').parent().removeClass('active');
});

/* ALBUM POSTS */

var loadPics = function() {

  for(var i=0; i<numOfAlbums; i++) {
    var title = albums[i].title;
    if (title === curAlbum && albums[i].pictures) {
      albums[i].pictures.forEach(function(el) {
        tmplAlbmString += compiledAlbmTmpl(el);
        });
      }
    }


  $(".picContainered").html(tmplAlbmString);
  }

});

/* INDIVIDUAL PICTURE */

$('.picContainered').on('click', '.pictured', function(event) {
  event.preventDefault();
  $('.navLeft').parent().removeClass('active');
  $('.navTop').parent().addClass('active');
  // imgSrced = $('img[alt="individual"]').attr('src'); // Am I even using this?
  clickedImg = $(this).children('img').attr('src');
  $('.picWrapper').children('img').attr('src',clickedImg);
  imageArray = [];
  for (var i = 0; i < albums.length; i++) {
    if (albums[i].title === curAlbum) {
      selectedAlbum = albums[i].pictures;
    }
  }
  for (e = 0; e < selectedAlbum.length; e++) {
    imageArray.push(selectedAlbum[e].url);
  }
  left = Number($(this).attr('rel')) - 1;
  right = Number($(this).attr('rel')) - 1;
  });

$('.returnButton').on('click',function(event){
  event.preventDefault();
  $('.navLeft').parent().addClass('active');
  $('.navTop').parent().removeClass('active');
});

/* ARROW BUTTONS */

$('.left').on('click', function(event) {
  if (left === 0) {
    left = (imageArray.length -1);
  }
  else {
    left--
  };
  $('.picWrapper').children('img').attr('src',imageArray[left]);
});

$('.right').on('click', function(event) {
  if (right === imageArray.length - 1) {
    right = 0;
  }
  else {
    right++
  };
  $('.picWrapper').children('img').attr('src',imageArray[right]);
});

/* NAV */

imageBlocks.forEach(function(el){
  tmplNavString += compiledNavTmpl(el);
});

$('.linkWrapper').append(tmplNavString);
