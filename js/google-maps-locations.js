function initMap() {
      const MyLocations=[
         {"title":"Sri Venkateswara Swamy Vaari Temple","place":"Tirupati","location":{"lat":13.683440,"lng":79.347443},"image":"https://lh5.googleusercontent.com/p/AF1QipP0c2D_tUHruP0RoGGAEINyMwdGEZ1B1akf69KG=w408-h289-k-no"},
         {"title":"Sri Prasanna Anjeneya Swamy Statue 7th Mile","place":"Tirupati","location":{"lat":13.661320,"lng":79.389248},"image":"http://www.indiastudychannel.com/attachments/IndiaCities/145432-52737-Hanuman-Statue-on-Foot-Hills-of-Tirumala.jpg"},
         {"title":"Garuda Statue","place":"Tirupati","location":{"lat":13.647036,"lng":79.405949},"image":"https://lh5.googleusercontent.com/p/AF1QipOwbWdJVaFyuYt_HXg_IwK4ePrICB25V0ZlcwGd=w408-h229-k-no"},
         {"title":"Sri Bala Vinayaka Swamy Devalayam","place":"Tirupati","location":{"lat":13.632779,"lng":79.414816},"image":"https://lh5.googleusercontent.com/p/AF1QipNrD7hiuX33g4W_AqPtt1Bk8EoI9KOep10zZKAs=w408-h306-k-no"},     
         {"title":"ISKCON","place":"Tirupati","location":{"lat":13.646889,"lng":79.413759},"image":"https://lh5.googleusercontent.com/p/AF1QipNA0_6VPIovs2inrGBGMdHMGbNaNxxsP_a6EBeI=w408-h294-k-no"},
         {"title":"Sri Vinayaka Bhavani Sankar Nagalamma Putta Temple","place":"Tirupati","location":{"lat":13.646806,"lng":79.412278},"image":"https://lh5.googleusercontent.com/p/AF1QipOXTMGEmOxkJ6zGInbbM9C9B52WAiNqdJqyACMH=w408-h725-k-no"},
         {"title":"Sri Perundevi Sametha Sri Varada Raja Swamy Temple","place":"Tirupati","location":{"lat":13.642626,"lng":79.418944},"image":"https://lh5.googleusercontent.com/p/AF1QipM4FYhqcmIImuiOXbJlqwlDnONBgHLmvfmqdu8w=w408-h725-k-no"},
         {"title":"Sri Shiridi Sai Baba Temple","place":"Tirupati","location":{"lat":13.636160,"lng":79.417755},"image":"https://lh5.googleusercontent.com/p/AF1QipOXeNE1l5YrRlP9dsL2NyISkXwnOsP3IDG1dEWW=w408-h229-k-no"},
         {"title":"Sri Kalikaparameswari Temple","place":"Tirupati","location":{"lat":13.636108,"lng":79.417457},"image":"https://lh5.googleusercontent.com/p/AF1QipN_DPVOAPy-sigpvFL-SjHsL0ft-C1fh1tqJkVt=w408-h306-k-no"},
         {"title":"Kodanda Rama Swamy Temple","place":"Tirupati","location":{"lat":13.635125,"lng":79.416773},"image":"https://lh5.googleusercontent.com/proxy/P208CsogV2XEjGS39rNFO_738NSuTyrXpW4GkdPVjjUe4tNLJYnEbCgqkAKUzNoEVyEMTAfLqqNlynB3xl_-IDVW0zyyLZ8ZXf_HrG0lUvFRakViUVxPL3Rz3Wm0ocbTDp2TxxRp1LHP7T9UXZbEHWP1s1uCyNk=w408-h494-k-no"}
        ]
		
	var location = {lat: 13.631921, lng: 79.417978}; 
	
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15, center: location
	});

        var infowindow = new google.maps.InfoWindow();

     MyLocations.map((loc,index)=>{
        marker = new google.maps.Marker({
         position: loc.location,
          map: map,
         title: loc.title,
        });

        google.maps.event.addListener(marker,'click', (function(marker,index) {
        return function() {
          infowindow.setContent(`<img src="${loc.image}" width="150" height="150"><br>${loc.title}`);
          infowindow.open(map, marker);
        }
      })(marker, index));
     })
}
