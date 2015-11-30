var app =  angular.module('myApp');
app.factory('helper',function(){
  return {
    getCenter:getCenter,
    getMapArray:getMapArray
  };

  function getCenter(zoomIndex, data){
    var center;
    switch(zoomIndex){
        case 2:
               center = new google.maps.LatLng(data[1]+9.6,data[2]-2.3);
               break;
        case 3:
               center = new google.maps.LatLng(data[1]+4.8,data[2]-1.7);
               break;
        case 4:
               center = new google.maps.LatLng(data[1]+2.4,data[2]-1.1);
               break;
        case 5:
               center = new google.maps.LatLng(data[1]+1.2,data[2]-0.5);
               break;
        case 6:
               center = new google.maps.LatLng(data[1]+0.6,data[2]-0.14);
               break;
        case 7:
               center = new google.maps.LatLng(data[1]+0.3,data[2]-0.09);
               break;
        case 8:
               center = new google.maps.LatLng(data[1]+0.15,data[2]-0.036);
               break;
        case 9:
               center = new google.maps.LatLng(data[1]+0.07,data[2]-0.02);
               break;
        case 10:
               center = new google.maps.LatLng(data[1]+0.04,data[2]-0.009);
               break;
        case 11:
               center = new google.maps.LatLng(data[1]+0.02,data[2]-0.005);
               break;
        case 12:
               center = new google.maps.LatLng(data[1]+0.01,data[2]-0.004);
               break;
        case 13:
               center = new google.maps.LatLng(data[1]+0.005,data[2]-0.0009);
               break;
        case 14:
               center = new google.maps.LatLng(data[1]+0.0025,data[2]-0.0005);
               break;
        case 15:
               center = new google.maps.LatLng(data[1]+0.0012,data[2]-0.00027);
               break;
      }
    return center;  
  }

  function getMapArray(current_hit){
    var arr =
      [
        current_hit._source.shout,
        current_hit._source.latitude,
        current_hit._source.longitude,
        1,
        current_hit._source.category,
        current_hit._source.url,
        current_hit._source.photourl,
        current_hit._source.venue,
        current_hit._source.username
      ];
      return arr;
  }
});
