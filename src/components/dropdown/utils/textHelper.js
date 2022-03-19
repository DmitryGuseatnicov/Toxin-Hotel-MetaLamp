function declOfNum(number, words) {
  return words[(number % 100 > 4 && number % 100 < 20)
    ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

function textHelper(word, n) {
  switch (word) {
    case 'гости':
      return declOfNum(n, ['гость', 'гостя', 'гостей']);

    case 'младенцы':
      return declOfNum(n, ['младенец', 'младенца', 'младенцев']);

    case 'спальни':
      return declOfNum(n, ['спальня', 'спальни', 'спален']);
    case 'кровати':
      return declOfNum(n, ['кровать', 'кровати', 'кроватей']);
    case 'ванные комнаты':
      return declOfNum(n, ['ванная комната', 'ванные комнаты', 'вынных комнат']);

    default:
      return '';
  }
}

export default textHelper;
