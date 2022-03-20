import Chart from 'chart.js/auto';

const createChart = (rating = []) => {
  let totalVotes = 0;
  rating.forEach((el) => {
    totalVotes += el;
  });

  const ctx = document.getElementById('room-chart').getContext('2d');
  const yellowGradient = ctx.createLinearGradient(0, 0, 0, 125);
  yellowGradient.addColorStop(0, '#FFE39C');
  yellowGradient.addColorStop(1, '#FFBA9C');

  const greenGradient = ctx.createLinearGradient(0, 0, 0, 125);
  greenGradient.addColorStop(0, '#6FCF97');
  greenGradient.addColorStop(1, '#66D2EA');

  const purpleGradient = ctx.createLinearGradient(0, 0, 0, 125);
  purpleGradient.addColorStop(0, '#BC9CFF');
  purpleGradient.addColorStop(1, '#8BA4F9');

  const darkGradient = ctx.createLinearGradient(0, 0, 0, 125);
  darkGradient.addColorStop(0, '#919191');
  darkGradient.addColorStop(1, '#3D4975');

  const counter = {
    id: 'counter',
    beforeDraw(chart) {
      const { chartArea: { top, width, height } } = chart;
      ctx.save();
      ctx.font = 'bold 24px Montserrat';
      ctx.textAlign = 'center';
      ctx.fillStyle = purpleGradient;
      ctx.fillText(`${totalVotes}`, width / 2, top - 2 + (height / 2));
      ctx.save();
      ctx.font = 'bold 15px Montserrat';
      ctx.textAlign = 'center';
      ctx.fillText('голосов', width / 2, top + 17 + (height / 2));
    },
  };

  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
      datasets: [{
        label: '',
        data: rating,
        backgroundColor: [
          darkGradient,
          purpleGradient,
          greenGradient,
          yellowGradient,
        ],
        borderWidth: 3,
        cutout: '89%',
        reverse: true,
      }],
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
};

export default createChart;
