$(window).on('load', function() {
    // your code here

    $.ajax({
      type: 'GET',
      url: 'https://api.500px.com/v1/photos?feature=popular',
      contentType: 'application/json',
      dataType: 'json',
      processData: false,
      data: JSON.stringify,
      success: function(resp){
          console.log(resp);

          window.Imagen1API = resp.photos[0].image_url[0];
          window.Nombre1API = resp.photos[0].name;
          window.Imagen2API = resp.photos[1].image_url[0];
          window.Nombre2API = resp.photos[1].name;      
      }
    });
});