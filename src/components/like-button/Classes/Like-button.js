import $ from 'jquery';

const ICON = '.js-like-button__icon';
const COUNT = '.js-like-button__count';

class LikeButton {
  constructor(nodeElem) {
    this.$likeButton = $(nodeElem);
    this.init();
  }

  init() {
    this.$icon = this.$likeButton.find(ICON);
    this.$count = this.$likeButton.find(COUNT);
    this.bindEventListener();
  }

  bindEventListener() {
    this.likeToggle = this.likeToggle.bind(this);
    this.$likeButton.on('click', this.likeToggle);
  }

  likeToggle() {
    if (this.isLike) {
      this.unlike();
    } else {
      this.like();
    }
  }

  unlike() {
    this.$likeButton.removeClass('like-button--liked');
    this.$icon.text('favorite_border');
    this.$count.text(+this.$count.text() - 1);
  }

  like() {
    this.$likeButton.addClass('like-button--liked');
    this.$icon.text('favorite');
    this.$count.text(+this.$count.text() + 1);
  }

  get isLike() {
    return this.$likeButton.hasClass('like-button--liked');
  }
}

export default LikeButton;
