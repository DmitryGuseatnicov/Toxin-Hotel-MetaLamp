const template = {
  prev: '<span class="material-icons">arrow_back</span>',
  next: '<span class="material-icons">arrow_forward</span>',
  titles: {
    days: 'MMMM yyyy',
  },
  buttonAddValue: {
    content: 'Применить',
    className:
      'button button_short button_text-purple calendar__button js-button-action-apply',
  },
  buttonClearValue: {
    content: 'Очистить',
    className:
      'button button_short button_text-purple calendar__button js-button-action-clear',
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
