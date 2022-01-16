import $ from 'jquery'

//классы для работы с DOM элементами
const ICON = '.js-like-button__icon'
const COUNT = '.js-like-button__count'

class LikeButton{
  constructor(nodeElem){
    this.$likeButton = $(nodeElem)
    this.init()
  }

  init(){
    try {
      this.$icon = this.$likeButton.find(ICON)
      this.$count = this.$likeButton.find(COUNT)
      this.bindEventListener()
    } catch (error) {
      console.log(error)
    }
  }

  bindEventListener(){
    this.likeToggle = this.likeToggle.bind(this)
    this.$likeButton.on('click', this.likeToggle)
  }

  likeToggle(){
    this.isLike ? this.unlike() : this.like()
  }

  unlike(){
    this.$likeButton.removeClass('like-button--liked')
    this.$icon.text('favorite_border')
    this.$count.text(+this.$count.text() - 1)
  }

  like(){
    this.$likeButton.addClass('like-button--liked')
    this.$icon.text('favorite')
    this.$count.text(+this.$count.text() + 1)
  }

  get isLike(){
    return this.$likeButton.hasClass('like-button--liked')
  }
}

export { LikeButton }