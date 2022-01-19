import Chart from 'chart.js/auto';


const createChart = (rating = [], id='') =>{  
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
      ctx.fillText(`${totalVotes}`,width / 2, top - 5 + (height/ 2))
      ctx.save()
      ctx.font = 'bold 14px Montserrat'
      ctx.textAlign = 'center'
      ctx.fillText(`голосов`,width / 2, top + 15 + (height/ 2))
    }
  }
  
  const ctx = document.getElementById('chart').getContext('2d');
  const yellow_gradient = ctx.createLinearGradient(0, 0, 0, 125);
  yellow_gradient.addColorStop(0, '#FFE39C');
  yellow_gradient.addColorStop(1, "#FFBA9C");
  
  const green_gradient = ctx.createLinearGradient(0, 0, 0, 125);
  green_gradient.addColorStop(0, '#6FCF97');
  green_gradient.addColorStop(1, "#66D2EA");
  
  const purple_gradient = ctx.createLinearGradient(0, 0, 0, 125);
  purple_gradient.addColorStop(0, '#BC9CFF');
  purple_gradient.addColorStop(1, "#8BA4F9");
  
  const dark_gradient = ctx.createLinearGradient(0, 0, 0, 125);
  dark_gradient.addColorStop(0, '#919191');
  dark_gradient.addColorStop(1, "#3D4975");
  
  const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Разочарован','Удовлетворительно','Хорошо','Великолепно'],
          datasets: [{
              label: 'Red of Votes',
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
        responsive: true,
        maintainAspectRatio: false,
        animation:{
          duration: 2000
        },
        plugins:{
          legend: {
            reverse: true,
            position: 'right',
            align: 'end',
            labels: {
              padding: 10,
              rotation: 20,
              usePointStyle: true,
              color:'rgba(31, 32, 65, 0.75)',
              boxWidth: 10,
              boxHeight: 10,
              font: {
                size: 14,
                family: "Montserrat",
              }
            },
          },
        },


      },
      plugins:[counter]
  });
}


export default createChart

