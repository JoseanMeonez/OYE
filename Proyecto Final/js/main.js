class Songs {
  constructor() {
    this.request = new XMLHttpRequest()
    this.request.open("GET", "http://127.0.0.1:5500/Proyecto%20Final/datos.json")
  }

  loadSongs(request) {
    request.onload = () => {
      if (request.status == 200) {
        let data = JSON.parse(request.response)
        let canciones = data.canciones
  
        for (let i = 0; i < canciones.length; i++) {
          let songname = document.createTextNode(canciones[i].nombre)
          let route = canciones[i].ruta
          let icon = canciones[i].icono
          let repr = canciones[i].reproducciones
  
          // Creando Elementos y Nodos
          let col = document.createElement("div")
          let card = document.createElement("div")
          let cardfooter = document.createElement("div")
          let cardbody = document.createElement("div")
          let h5 = document.createElement("h5")
          let small = document.createElement("small")
          let img = document.createElement("img")
          let audio = document.createElement("audio")
          let audioErrorMessage = document.createTextNode("Tu navegador no es compatible con los formatos mp3.")
          let songrepr
          if (repr == 1) {
            songrepr = document.createTextNode(repr + " Reproducción")
          } else {
            songrepr = document.createTextNode(repr + " Reproducciones")
          }
  
          // Imagen de la canción
          img.setAttribute("src", "./imagenes/icon_" + icon + ".svg")
          img.setAttribute("class", "card-img-top bg-dark2 mx-auto d-block")
          
          // Nombre de la canción
          h5.appendChild(songname)
          h5.setAttribute("class", "card-title text-light text-center")
          
          // Audio
          audio.appendChild(audioErrorMessage)
          audio.setAttribute("src", "./canciones/" + route)
          audio.setAttribute("controls", "")
          audio.setAttribute("class", "col-12")
          
          // Card Body
          cardbody.setAttribute("class", "card-body bg-dark2")
          cardbody.appendChild(h5)
          cardbody.appendChild(audio)
  
          // Reproducciones
          small.appendChild(songrepr)
          small.setAttribute("class", "text-light")
  
          // Card Footer
          cardfooter.setAttribute("class", "card-footer bg-dark text-center border-0")
          cardfooter.appendChild(small)
  
          // Añade los valores al card creado.
          card.setAttribute("class", "card shadow border-0 rounded-6 bg-dark2")
          card.appendChild(img)
          card.appendChild(cardbody)
          card.appendChild(cardfooter)
  
          // Col
          col.setAttribute("class", "col border-0")
          col.appendChild(card);
          
          // Añade el elemento creado y su contenido al DOM
          let cardgroup = document.getElementById("songs-card-group");
          let carditem = document.getElementById('songs-card-item');
          cardgroup.insertBefore(col, carditem)
        }
      } else {
        // Mensaje de error
        let error = document.createElement("h1")
        error.setAttribute("class", "text-muted text-center col-12")
        message = document.createTextNode("Lo sentimos, no se pudieron cargar las canciones.")
        error.appendChild(message)

        // Añade el elemento creado y su contenido al DOM
        let carditem = document.getElementById('songs-card-item');
        let cardgroup = document.getElementById("songs-card-group");
        cardgroup.insertBefore(error, carditem)
        console.log(error)
      }
    }
    return request.send();  
  }
}

var songs = new Songs;
songs.loadSongs(songs.request);