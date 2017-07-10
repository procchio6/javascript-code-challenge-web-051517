class Comment {
  constructor(content) {
    if (content) {
      this.content = content
    } else {
      this.content = "This is the default comment"
    }
  }

  render() {
    return `<li class='comment'>${this.content}</li>`
  }
}
