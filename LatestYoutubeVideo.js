gapi.load('client', function() {
   gapi.client.init({
      apiKey: 'AIzaSyBUSDnWWT4LE-idCJjdlyRVUAxZOPKpCSI'
   }).then(function() {
      return gapi.client.request({
         'path': 'https://www.googleapis.com/youtube/v3/search',
         'params': {
            'part': 'snippet',
            'channelId': '',
            'order': 'date',
            'maxResults': 1
         }
      });
   }).then(function(response) {
      var videoId = response.result.items[0].id.videoId;
      console.log(videoId);
      var iframe = document.querySelector('#latest-video');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId);
   }, function(reason) {
      console.error('Error: ' + reason.result.error.message);
   });
});

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