var app = angular.module('myApp');

app.service('dataClient', function() {

  var appbaseRef = new Appbase({
    url: 'https://scalr.api.appbase.io',
    appname: 'checkin',
    username: '6PdfXag4h',
    password: 'b614d8fa-03d8-4005-b6f1-f2ff31cd0f91'
  });

  this.getSuggestions = function(city_prefix) {
    return appbaseRef.search({
      index: 'checkin',
      body: {
        suggest: {
          mysuggester: {
            text: city_prefix,
            completion: {
              field: 'city_suggest'
            }
          }
        }
      }
    });
  }

  this.getSearchCheckin = function(city_name) {
    return appbaseRef.search({
      index: 'checkin',
      type: 'city',
      body: {
        query: {
          match: {
            city: city_name
          }
        }
      }
    });
  }

  this.getLiveData = function() {
    return appbaseRef.searchStream({
      type: 'city',
      body: {
        query: {
          match_all: {}
        }
      }
    });
  }

  this.getDragData = function(lat, lng) {
    return appbaseRef.search({
      type: 'city',
      body: {
        query: {
          filter: {
            geo_distance: {
              distance: "2000km",
              location: [lat, lng]
            }
          }
        }
      }
    });
  }

});
