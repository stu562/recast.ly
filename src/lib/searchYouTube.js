import YOUTUBE_API_KEY from '../config/youtube.config.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: `https://www.googleapis.com/youtube/v3/search`,
    contentType: 'application/json',
    data: {
      'maxResults': '5',
      'part': 'snippet',
      'q': options.query,//<-- should be what the user types 
      'key': YOUTUBE_API_KEY
    },
    success: callback,
    error: function() {
      console.log('Error getting data.');
    }
  })
};

export default searchYouTube;
