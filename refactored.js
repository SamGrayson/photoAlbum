//////////////////////
/* Global Variables */
//////////////////////

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

/////////////////
/* Readyatized */
/////////////////
$(document).ready(function() {

page.init();

});

////////////////////
/* OBJECT LITERAL */
////////////////////
var page = {
  init: function(arguments) {

    page.initStyling();
    page.initEvents();

  },
  initStyling: function(arguments) {

    page.loadAlbums(tmplString,compiledTmpl,$('.contentWrap'));
    page.loadAlbums(tmplNavString,compiledNavTmpl,$('.linkWrapper'));

  },
  initEvents: function(arguments) {

    /////////////////////////////////////////
    /* CLICK INDIVIDUAL ALBUM ON HOME PAGE */
    /////////////////////////////////////////
    $('.contentWrap').on('click', '.picContainer', function(event) {
      event.preventDefault();
      tmplAlbmString = "";
      page.removeAddActive($('.top'),$('.navLeft'));
      curAlbum = $(this).attr('rel');
      $('.albumTop').children().html(curAlbum);
      page.loadPics();
    });


    ////////////////////////
    /* CLICK THE NAV BARS */
    ////////////////////////
    $('.albumLink').on('click', function(event) {
      event.preventDefault();
      tmplAlbmString = "";
      curAlbum = $(this).attr('rel');
      $('.albumTop').children().html(curAlbum);
      page.loadPics();
    });


    /////////////////
    /* HOME BUTTON */
    /////////////////
    $('.homeButton').on('click', function(event) {
      page.removeAddActive($('.navLeft'),$('.top'));
    });


    ////////////////////////
    /* INDIVIDUAL PICTURE */
    ////////////////////////
    $('.picContainered').on('click', '.pictured', function(event) {
      event.preventDefault();
      page.removeAddActive($('.navLeft'),$('.navTop'));
      clickedImg = $(this).children('img').attr('src'); //image src of clicked image
      $('.picWrapper').children('img').attr('src',clickedImg); //picWrapper takes the src and shows image

      //array start for right/left buttons
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
        page.removeAddActive($('.navTop'),$('.navLeft'));
      });


    ///////////////////
    /* ARROW BUTTONS */
    ///////////////////
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


  },

  /////////////
  /*Functions*/
  /////////////
  loadAlbums: function (string, array, $target) {
    imageBlocks.forEach(function(el) {
      string += array(el);
    });

    $target.append(string);
  },

  removeAddActive: function($remove, $add) {
    $remove.parent().removeClass('active');
    $add.parent().addClass('active');
  },

  loadPics: function() {

    for(var i=0; i<numOfAlbums; i++) {
      var title = albums[i].title;
      if (title === curAlbum && albums[i].pictures) {
        albums[i].pictures.forEach(function(el) {
          tmplAlbmString += compiledAlbmTmpl(el);
          });
        }
      }

    $(".picContainered").html(tmplAlbmString);
  },

};
