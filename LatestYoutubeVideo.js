gapi.load('client', function() {
   gapi.client.init({
      apiKey: 'AIzaSyBUSDnWWT4LE-idCJjdlyRVUAxZOPKpCSI'
   }).then(function() {
      return gapi.client.request({
         'path': 'https://www.googleapis.com/youtube/v3/search',
         'params': {
            'part': 'snippet',
            'channelId': 'UCnR8Z34MIYgugRLunp9hJDQ',
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
