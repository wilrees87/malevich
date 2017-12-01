/* Utilising Bootstrap4 Modal https://v4-alpha.getbootstrap.com/components/modal/*/

$(function() {

  $('#imagemodal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget) // Button that triggered the modal

    // Extract info from data-* attributes
    var src = button.data('imgsrc')
    var title = button.data('title')

    // Update the modal's content using JQuery
    var modal = $(this)
    modal.find('#modalLabel').text(title)
    modal.find('#imagePresent').attr("src", src)
  })

});
