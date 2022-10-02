var myModal = document.getElementById('staticBackdrop')
var staticBackdropLabel = document.getElementById('staticBackdropLabel')

myModal.addEventListener('shown.bs.modal', function () {
  staticBackdropLabel.focus()
})