$(document).ready(function(){
  $('#note-form').on('submit', function (event) {
    event.preventDefault()
    let comment = $('#commentField').val()
    $('#comments-list').append(`<li class='comment'>${comment}</li>`)
    $('#commentField').val('')
  })

  $('#search-form').on('submit', function (event) {
    event.preventDefault()
    $('.comment').show()
    let searchTerm = $('#searchField').val()
    $('.comment').filter((idx,comment) => {
      return comment.innerText.match(searchTerm) === null
    }).hide()
  })
})
