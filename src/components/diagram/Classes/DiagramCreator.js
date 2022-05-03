/* eslint-disable class-methods-use-this */
import PiaChartCreator from '../../../libs/PiaChartCreator';

class DiagramCreator {
  constructor(selector, charsItems) {
    // eslint-disable-next-line fsd/no-heavy-constructor
    this.nodeElem = document.querySelector(selector);
    this.init(charsItems);
  }

  init(charsItems) {
    this.canvasNode = this.nodeElem.querySelector('.js-chart__diagram');
    this._createLabels(charsItems);
    this._createDiagram(charsItems);
  }

  _createLabels(charsItems) {
    this.listLabels = document.createElement('ul');
    this.listLabels.classList.add('chart__label-list');
    let fragment = '';

    charsItems.forEach((element) => {
      fragment += this._createLabelFragment(element.name, element.colors);
    });

    this.listLabels.innerHTML = fragment;
    this.nodeElem.appendChild(this.listLabels);
  }

  _createLabelFragment(name, colors) {
    return `
      <li class="chart__label-item">
        <div style="background: linear-gradient(180deg, ${colors[0]} 0%, ${colors[1]} 100%)" 
          class="chart__label-dot">
        </div>
        <div class="chart__label-name">${name}</div>
      </li>
    `;
  }

  _createDiagram(charsItems) {
    this.piaChart = new PiaChartCreator();
    this.piaChart.init(this.canvasNode, charsItems);
  }
}

export default DiagramCreator;
