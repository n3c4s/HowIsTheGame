var request = new XMLHttpRequest()

request.open('GET', 'https://api.500px.com/v1/photos?feature=popular', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(datos => {
      console.log(datos)
    })
  } else {
    console.log('error')
  }
}

request.send()