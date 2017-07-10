class CommentList {
  constructor() {
    this.comments = []
  }

  addComment(comment) {
    this.comments.push(comment)
  }

  search(searchTerm) {
    $('.comment').show()
    let regex = new RegExp(searchTerm, 'ig')
    $('.comment').filter((idx,comment) => {
      return comment.innerText.match(regex) === null
    }).hide()
  }

  render() {
    let commentListHTML = ''
    this.comments.forEach(comment => {
      commentListHTML += comment.render()
    })
    return commentListHTML
  }
}
