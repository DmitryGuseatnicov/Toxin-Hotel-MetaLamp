/* eslint-disable class-methods-use-this */
import Chart from 'chart.js/auto';

class PiaChartCreator {
  init(canvasNode, charsItems) {
    return this.createChart(canvasNode, charsItems);
  }

  createChart(canvasNode, charsItems) {
    let totalVotes = 0;
    charsItems.forEach((el) => {
      totalVotes += el.rate;
    });

    const ctx = canvasNode.getContext('2d');

    const colorCreator = (colors) => {
      const color = ctx.createLinearGradient(0, 0, 0, 125);
      color.addColorStop(0, colors[0]);
      color.addColorStop(1, colors[1]);
      return color;
    };

    const purpleGradient = ctx.createLinearGradient(0, 0, 0, 125);
    purpleGradient.addColorStop(0, '#BC9CFF');
    purpleGradient.addColorStop(1, '#8BA4F9');

    const counter = {
      id: 'counter',
      beforeDraw(chart) {
        const {
          chartArea: { top, width, height },
        } = chart;
        ctx.save();
        ctx.font = 'bold 24px Montserrat';
        ctx.textAlign = 'center';
        ctx.fillStyle = purpleGradient;
        ctx.fillText(`${totalVotes}`, width / 2, top - 2 + height / 2);
        ctx.save();
        ctx.font = 'bold 15px Montserrat';
        ctx.textAlign = 'center';
        ctx.fillText('голосов', width / 2, top + 17 + height / 2);
      },
    };

    return new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: charsItems.map((el) => el.name),
        datasets: [
          {
            label: '',
            data: charsItems.map((el) => el.rate),
            backgroundColor: charsItems.map((el) => colorCreator(el.colors)),
            borderWidth: 3,
            cutout: '89%',
            reverse: true,
          },
        ],
      },
      options: {
        layout: {
          padding: {
            right: 30,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 2000,
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      plugins: [counter],
    });
  }
}

export default PiaChartCreator;
