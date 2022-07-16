const template = {
  prev: '<span class="material-icons">arrow_back</span>',
  next: '<span class="material-icons">arrow_forward</span>',
  titles: {
    days: 'MMMM yyyy',
  },
  buttonAddValue: {
    content: 'Применить',
    attrs: { type: 'button' },
    className:
      'button button_size-default button_text-color-main calendar__button js-button-action-apply',
  },
  buttonClearValue: {
    content: 'Очистить',
    attrs: { type: 'button' },
    className:
      'button button_size-default button_text-color-main calendar__button js-button-action-clear',
  },
};

const options = {
  prevHtml: template.prev,
  nextHtml: template.next,
  navTitles: template.titles,
  range: true,
  inline: true,
  buttons: [template.buttonClearValue, template.buttonAddValue],
};

export default options;
