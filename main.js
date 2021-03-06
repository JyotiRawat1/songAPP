var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0;
              var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image': 'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image': 'song2.jpg'

    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image': 'song3.jpg'

    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image': 'song4.jpg'

    }]




  var songName = 1;

function fancyTimeFormat(time)
{
          // Hours, minutes and seconds
          var hrs = ~~(time / 3600);
          var mins = ~~((time % 3600) / 60);
          var secs = time % 60;

          // Output like "1:01" or "4:03:59" or "123:03:59"
          var ret = "";

          if (hrs > 0) {
              ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
          }

          ret += "" + mins + ":" + (secs < 10 ? "0" : "");
          ret += "" + secs;
          return ret;
}

function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
}

function toggleSong(){
    var song = document.querySelector('audio');
          if (song.paused == true) {
              console.log('Playing');
              $('.play-icon').removeClass('fa-play').addClass('fa-pause');
              song.play();
          } else {
              console.log('Pausing');
              $('.play-icon').removeClass('fa-pause').addClass('fa-play');
              song.pause();
          }
}

function UpdateCurrentTime(){
//audio ko select kiya
        var song = document.querySelector('audio');
        //console.log(song.currentTime);
        //console.log(song.duration);
        var currentTime = Math.floor(song.currentTime);
        currentTime = fancyTimeFormat(currentTime);
        var duration = Math.floor(song.duration);
        duration = fancyTimeFormat(duration);
        $('.time-elapsed').text(currentTime);
        $('.song-duration').text(duration);
        var time=song.currentTime/song.duration*100;  // progress bar code only 2 times
        $('.progress-filled').css("width",time+"%");
      }
      $('.fa-repeat').on('click',function(){
      $('.fa-repeat').toggleClass('disabled')
      willLoop = 1-willLoop;
    });

      $('.fa-random').on('click',function(){
      $('.fa-random').toggleClass('disabled')
      willShuffle = 1-willShaffle;
    });

    function timejump(){
      var song =  document.querySelector('audio')
      song.currentTime = song.duration - 5;
}

      $('audio').on('ended',function(){
            var audio = document.querySelector('audio');
              if(currentSongNumber < 4){
              //play the next song
              var nextSongObj = songs[currentSongNumber]; //(song[1]=song2)
              //currentSongNumber = 1(we knw that so humne eska faeda uthaya)
            //  songs[0]= 1song
            //  songs[1]= 2song

              audio.scr = nextSongObj.fileName;
              toggleSong();
              changeCurrentSongDetails(nextSongObj);
              currentSongNumber = currentSongNumber +1;

              }
              else{
              //stop playing
              $('.play-icon').removeClass('fa-pause').addClass('fa-play');
              audio.currentTime = 0;
              }
      })
//volume





//fux used for diff songs no need to write the same code to pay diff song // we can easily can that fux"
      function addSongNameClickEvent(songObj,position) {
        var songName = songObj.fileName;
        var id = '#song' + position;
                 $(id).click(function() {
                 var audio = document.querySelector('audio');
                 var currentSong = audio.src;

                         if(songName !== position)
                           {

                             audio.src = songName;

                             songNumber = position;
                             changeCurrentSongDetails(songObj); // fux" call
                          }
                           toggleSong();

                 });
 }

//when my html document file complitly loaded then only , this fux" will run // because we need html in this fux"
window.onload = function(){
        changeCurrentSongDetails(songs[0]); // fux" call

            UpdateCurrentTime();
            setInterval(function(){
              UpdateCurrentTime();
            },1000);


            //  var songName1 = 'Tamma Tamma Again';
              //var songName2 = 'Humma Song';
            //  var songName3 = 'Nashe se chad gyi';
              //var songName4 = 'The Breakup';
          //    var songList = ['Tamma Tamma Again', 'Humma Song', 'Nashe se chad gyi', 'The Breakup']; //array
          //    var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
          //    var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
          //    var durationList = ['2:56','3:15','2:34','2:29'];



                      //$('#song1 .song-name').text(songList[0]);
                      //$('#song2 .song-name').text(songList[1]);
                      //$('#song3 .song-name').text(songList[2]);    ((old way write with out for loop w/c is also correct but time consuming))
                      //$('#song4 .song-name').text(songList[3]);
                      //$('#song1 .song-artist').text(artistList[0]);
                      //$('#song2 .song-artist').text(artistList[1]);
                      //$('#song3 .song-artist').text(artistList[2]);
                      //$('#song4 .song-artist').text(artistList[3]);
                      for(var i =0; i < songs.length;i++) {
                               var obj = songs[i];
                               var name = '#song' + (i+1);
                               var song = $(name);
                               song.find('.song-name').text(obj.name);
                               song.find('.song-artist').text(obj.artist);
                               song.find('.song-album').text(obj.album);
                               song.find('.song-length').text(obj.duration);
                               addSongNameClickEvent(obj,i+1);
                           }       $('#songs').DataTable({paging: false});


                //var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];//all songs src

              /*  addSongNameClickEvent(fileNames[0],1);
                addSongNameClickEvent(fileNames[1],2);     (***!we can use for loop for that also because fileName[i] , i+1!***)
                addSongNameClickEvent(fileNames[2],3);
                addSongNameClickEvent(fileNames[3],4);*/


              //  for (var i = 0; i < fileNames.length ; i++) {
                //    addSongNameClickEvent(fileNames[i],i+1)     // for loop use krege taki agar 4se jyada song bhi ho to hume jyada likhna na pade
                //}
  //for loop will work in following manner
  //{1}(var i = 0;
  //{2}i < fileNames.length
  //{3}addSongNameClickEvent(fileNames[i],i+1)
   //{4}i++) {

}

          //show name wala code
          $('.welcome-screen button').on('click', function() {
              var name = $('#name-input').val();
              var pwd = $('#pwd-input').val();
              if (name.length>=2 && pwd.length>=6) {
                  var message = "Welcome, " + name;
                  $('.main .user-name').text(message);
                  $('.welcome-screen').addClass('hidden');
                  $('.main').removeClass('hidden');
              } else {
                  $('#name-input').addClass('error');
                  $('#pwd-input').addClass('error');

                  $('.message').removeClass('hidden');
                  $('.messages').removeClass('hidden');

              }
          });

//play and pause wala code//
        $('.play-icon').on('click', function() {
           //call kro function ko taki useke wala code run ho
           toggleSong();
  });
      $('body').on('keypress', function(event) {
        var target = event.target;
                  if (event.keyCode == 32 && target.tagName !='INPUT') {
                     //call kro function ko taki useke wala code run ho
                     toggleSong();
            }
        });
