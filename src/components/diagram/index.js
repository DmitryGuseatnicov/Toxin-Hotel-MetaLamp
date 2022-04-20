import DiagramCreator from './DiagramCreator';
import './diagram.scss';

new DiagramCreator('.chart', [
  { name: 'Великолепно', colors: ['#FFE39C', '#FFBA9C'], rate: 130 },
  { name: 'Хорошо', colors: ['#6FCF97', '#66D2EA'], rate: 65 },
  { name: 'Удовлетворительно', colors: ['#BC9CFF', '#8BA4F9'], rate: 65 },
  { name: 'Разочарован', colors: ['#919191', '#3D4975'], rate: 0 },
]);
