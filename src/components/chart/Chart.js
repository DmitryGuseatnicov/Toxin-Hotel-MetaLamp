import Chart from 'chart.js/auto';


const createChart = (rating = []) =>{  
  let totalVotes = 0
  rating.forEach(el => totalVotes +=el)

  const counter = {
    id: 'counter',
    beforeDraw(chart){
      const  {ctx, chartArea:{top, width, height}} = chart
      ctx.save()
      ctx.font = 'bold 24px Montserrat'
      ctx.textAlign = 'center'
      ctx.fillStyle = purple_gradient
      ctx.fillText(`${totalVotes}`,width / 2, top - 2 + (height/ 2))
      ctx.save()
      ctx.font = 'bold 15px Montserrat'
      ctx.textAlign = 'center'
      ctx.fillText(`голосов`,width / 2, top + 17 + (height/ 2))
    }
  }

  const ctx = document.getElementById('room-chart').getContext('2d');
  const yellow_gradient = ctx.createLinearGradient(0, 0, 0, 125);
  yellow_gradient.addColorStop(0, '#FFE39C');
  yellow_gradient.addColorStop(1, '#FFBA9C');

  const green_gradient = ctx.createLinearGradient(0, 0, 0, 125);
  green_gradient.addColorStop(0, '#6FCF97');
  green_gradient.addColorStop(1, '#66D2EA');

  const purple_gradient = ctx.createLinearGradient(0, 0, 0, 125);
  purple_gradient.addColorStop(0, '#BC9CFF');
  purple_gradient.addColorStop(1, '#8BA4F9');

  const dark_gradient = ctx.createLinearGradient(0, 0, 0, 125);
  dark_gradient.addColorStop(0, '#919191');
  dark_gradient.addColorStop(1, '#3D4975');
  
  new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Разочарован','Удовлетворительно','Хорошо','Великолепно'],
          datasets: [{
              label: '',
              data: rating,
              backgroundColor: [
                  dark_gradient ,
                  purple_gradient,
                  green_gradient,
                  yellow_gradient,
              ],
              borderWidth: 3,
              cutout: '89%',
              reverse: true,
          }]
      },
      options: {
        layout:{
          padding:{
            right: 30
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        animation:{
          duration: 2000
        },
        plugins:{
          legend: {
            display: false,
          },
        },
      },
      plugins:[counter]
  });
  
}

export default createChart

