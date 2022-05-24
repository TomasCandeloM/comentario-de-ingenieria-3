/*!
* Start Bootstrap - Business Casual v7.0.8 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

 var ctx=document.getElementById("Mi1Gr").getContext("2d");
    var MiPGr=new Chart(ctx,
    {
        type:"doughnut",
        data:
        {
          labels:['Estereotipos de la carrera','Estereotipos del informatico','Falta de referentes','Falta de capacidades'],
          datasets:
          [{
            barThickness: 100,
              label:'Importancia de la informatica',
                  data:[46.67,20,20,13.33],
                  backgroundColor:
                  [
                      'rgb(71,168,189,1)',
                      'rgb(240,20,14,1)',
                      'rgb(217,108,6,1)',
                      'rgb(92,128,1,1)'
                  ],
                  borderColor: 
                  [
                    'rgb(71,168,189)',
                    'rgb(240,20,14)',
                    'rgb(217,108,6)',
                    'rgb(92,128,1)'
                  ],
                  borderWidth: 2
          }]
        },
        options:
        {
          scales:
          {
            yAxes:
            [{
              ticks:
              {
                beginAtZero:true
              }
            }]
        }}
    });

    var ctx=document.getElementById("Mi2Gr").getContext("2d");
    var MiSGr=new Chart(ctx,
    {
        type:"doughnut",
        data:
        {
          labels:['gusto por la Tecnologia','oportunidades de Trabajo','Posibilidades'],
          datasets:
          [{
              label:'Areas',
              data:[53.33,26.67,20],
              backgroundColor:
              [
                  'rgb(124,181,24,1)',
                  'rgb(255,255,255,1)',
                  'rgb(8,103,136,1)',
              ],
              borderColor: 
              [
                'rgb(124,181,24)',
                'rgb(255,255,255)',
                'rgb(8,103,136)',
              ],
              borderWidth: 3
          }]
        },
    });

    var ctx=document.getElementById("Mi3Gr").getContext("2d");
    var MiPGr=new Chart(ctx,
    {
        type:"bar",
        data:
        {
          labels:['Si','No se','No'],
          datasets:
          [{
            barThickness: 100,
              label:'Mujeres informaticas',
                  data:[0,4,11],
                  backgroundColor:
                  [
                      'rgb(217, 189, 197,1)',
                      'rgb(98, 190, 193,1)',
                      'rgb(90, 210, 244,1)'
                  ],
                  borderColor: 
                  [
                    'rgb(0,255,0)',
                    'rgb(98, 190, 193)',
                    'rgb(90, 210, 244)'
                  ],
                  borderWidth: 2
          }]
        },
        options:
        {
          scales:
          {
            yAxes:
            [{
              ticks:
              {
                beginAtZero:true
              }
            }]
        }}
    });

     var ctx=document.getElementById("Mi4Gr").getContext("2d");
    var MiSGr=new Chart(ctx,
    {
        type:"pie",
        data:
        {
          labels:['0-25%','25-50%','50-75%','75-100%'],
          datasets:
          [{
              label:'Areas',
              data:[0,0,20,80],
              backgroundColor:
              [
                  'rgb(162, 62, 72,1)',
                  'rgb(90, 58, 49)  ',
                  'rgb(65, 211, 189,1)',
                  'rgb(255, 242, 117,1)'
              ],
              borderColor: 
              [
                'rgb(162, 62, 72)',
                'rgb(90, 58, 49)',
                'rgb(65, 211, 189)',
                'rgb(255, 242, 117)'
              ],
              borderWidth: 3
          }]
        },
    });

    var ctx=document.getElementById("Mi5Gr").getContext("2d");
    var MiPGr=new Chart(ctx,
    {
        type:"bar",
        data:
        {
          labels:['Si','No'],
          datasets:
          [{
            barThickness: 100,
              label:'Mujeres informaticas',
                  data:[0,15],
                  backgroundColor:
                  [
                      'rgb(8, 103, 136,1)',
                      'rgb(7, 160, 195,1)'
                  ],
                  borderColor: 
                  [
                    'rgb(8, 103, 136)',
                    'rgb(7, 160, 195)'
                  ],
                  borderWidth: 2
          }]
        },
        options:
        {
          scales:
          {
            yAxes:
            [{
              ticks:
              {
                beginAtZero:true
              }
            }]
        }}
    });
