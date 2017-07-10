$(document).ready(function(){
  const commentList = new CommentList

  $('#note-form').on('submit', function (event) {
    event.preventDefault()
    let commentContent = $('#commentField').val()
    let comment = new Comment(commentContent)
    commentList.addComment(comment)
    $('#commentField').val('')
    $('#comments-list').empty().html(commentList.render())
  })

  $('#search-form').on('submit', function (event) {
    event.preventDefault()
    let searchTerm = $('#searchField').val().trim()
    commentList.search(searchTerm)
  })
})
