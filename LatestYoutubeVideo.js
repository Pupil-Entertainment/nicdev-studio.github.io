$(function() {  
   var API_KEY = 'AIzaSyBUSDnWWT4LE-idCJjdlyRVUAxZOPKpCSI';
   var CHANNEL_ID = 'UCnR8Z34MIYgugRLunp9hJDQ';

   var GOOGLE_API_URL = 'https://www.googleapis.com/youtube/v3/channelItems?part=id%2C+snippet%2C+contentDetails&channelId='+CHANNEL_ID+ '&key=' + API_KEY + '&callback=showVideos';

   $.ajax({
    url: GOOGLE_API_URL,
    dataType: 'jsonp',
    crossDomain: true
   });

   window.showVideos = function(data) {
    if (data.items && data.items.length > 0) {
       $("#latest-video").html('<iframe width="640" height="360" src="http://www.youtube.com/embed/'+data.items[0].contentDetails.videoId+'" frameborder="0" allowfullscreen></iframe>');
    }
   }
});