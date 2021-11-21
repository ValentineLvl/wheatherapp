var mymap = L.map('worldmap',
     {
      center: [48.866667, 2.333333],
      zoom: 4
     }
     );
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '(c) <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);


var coord = document.getElementsByClassName('list-group-item');

for(var i = 0; i<coord.length; i++){
     var lat = coord[i].dataset.lat;
     var lon = coord[i].dataset.lon;
     
var customIcon = L.icon({
     iconUrl: './images/leaf-green.png',
     shadowUrl: './images/leaf-shadow.png',
    
     iconSize:   [38, 95],
     shadowSize:  [50, 64],
    
     iconAnchor:  [22, 94],
     shadowAnchor: [4, 62],  
    
     popupAnchor: [0, -76]
    });
    
    
    L.marker([lat, lon], {icon: customIcon}).addTo(mymap);
};