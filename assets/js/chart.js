$(function() {
  /* ChartJS
   * -------
   * Data and config for chartjs
   */
  'use strict';
  Chart.defaults.global.defaultFontFamily = "KD2";
  var data = {
    labels: ["บ้านเตย", "บ้านกระเบื้องน้อย", "บ้านตำแย", "บ้านกระเบื้องใหญ่", "บ้านไผ่", "บ้านโนนกระสัง","บ้านท่ามะเขือ","บ้านวัด","บ้านโนนทอง","บ้านจบก","บ้านโนนเสว"],
    datasets: [{
      label: 'เกษตรกร',
      data: [10, 19, 3, 5, 2, 3, 8, 25, 21, 18, 43],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 139, 139, 0.2)',
        'rgba(70, 130, 180, 0.2)',
        'rgba(112, 128, 144, 0.2)',
        'rgba(219, 112, 147, 0.2)',
        'rgba(95, 158, 160, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 139, 139, 1)',
        'rgba(70, 130, 180, 1)',
        'rgba(112, 128, 144, 1)',
        'rgba(219, 112, 147, 1)',
        'rgba(95, 158, 160, 1)'
      ],
      borderWidth: 1,
      // fill: false,
      borderRadius: 5,
      barThickness: 40,
    }]
  };


  // var multiLineData = {
  //   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //   datasets: [{
  //       label: 'Dataset 1',
  //       data: [12, 19, 3, 5, 2, 3],
  //       borderColor: [
  //         '#587ce4'
  //       ],
  //       borderWidth: 2,
  //       fill: false
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: [5, 23, 7, 12, 42, 23],
  //       borderColor: [
  //         '#ede190'
  //       ],
  //       borderWidth: 2,
  //       fill: false
  //     },
  //     {
  //       label: 'Dataset 3',
  //       data: [15, 10, 21, 32, 12, 33],
  //       borderColor: [
  //         '#f44252'
  //       ],
  //       borderWidth: 2,
  //       fill: false
  //     }
  //   ]
  // };

  var options = {
    scales: {
      yAxes: [{
        gridLines: {
          borderDash: [8, 3],
          borderColor: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          beginAtZero: true,
          font: {
            size: 12,
            defaultFontFamily: "sans-serif",
          },
        }
      }],
      xAxes: [{
        gridLines: {
          borderDash: [8, 3],
          borderColor: "rgba(0, 0, 0, 0)",
        },
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    },
    plugin:{
      tooltip: {
        displayColors: false,
        bodyFont: { family: "KD2", size: 12 },
        padding: 10,
        titleFont : { family: "K2D", size: 12 },
      },
    },

  };

  var doughnutPieData = {
    datasets: [{
      data: [50, 20, 30],
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'ประมง',
      'เลี้ยงสัตว์',
      'ปลูกพืช',
    ]
  };

  var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  // var areaData = {
  //   labels: ["2013", "2014", "2015", "2016", "2017"],
  //   datasets: [{
  //     label: '# of Votes',
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgba(255,99,132,1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)'
  //     ],
  //     borderWidth: 1,
  //     fill: true, // 3: no fill
  //   }]
  // };

  // var areaOptions = {
  //   plugins: {
  //     filler: {
  //       propagate: true
  //     }
  //   }
  // }

  // var multiAreaData = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //   datasets: [{
  //       label: 'Facebook',
  //       data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
  //       borderColor: ['rgba(255, 99, 132, 0.5)'],
  //       backgroundColor: ['rgba(255, 99, 132, 0.5)'],
  //       borderWidth: 1,
  //       fill: true
  //     },
  //     {
  //       label: 'Twitter',
  //       data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
  //       borderColor: ['rgba(54, 162, 235, 0.5)'],
  //       backgroundColor: ['rgba(54, 162, 235, 0.5)'],
  //       borderWidth: 1,
  //       fill: true
  //     },
  //     {
  //       label: 'Linkedin',
  //       data: [6, 14, 16, 20, 12, 18, 15, 12, 17, 19, 15, 11],
  //       borderColor: ['rgba(255, 206, 86, 0.5)'],
  //       backgroundColor: ['rgba(255, 206, 86, 0.5)'],
  //       borderWidth: 1,
  //       fill: true
  //     }
  //   ]
  // };

  // var multiAreaOptions = {
  //   plugins: {
  //     filler: {
  //       propagate: true
  //     }
  //   },
  //   elements: {
  //     point: {
  //       radius: 0
  //     }
  //   },
  //   scales: {
  //     xAxes: [{
  //       gridLines: {
  //         display: false
  //       }
  //     }],
  //     yAxes: [{
  //       gridLines: {
  //         display: false
  //       }
  //     }]
  //   }
  // }

  // var scatterChartData = {
  //   datasets: [{
  //       label: 'First Dataset',
  //       data: [{
  //           x: -10,
  //           y: 0
  //         },
  //         {
  //           x: 0,
  //           y: 3
  //         },
  //         {
  //           x: -25,
  //           y: 5
  //         },
  //         {
  //           x: 40,
  //           y: 5
  //         }
  //       ],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)'
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)'
  //       ],
  //       borderWidth: 1
  //     },
  //     {
  //       label: 'Second Dataset',
  //       data: [{
  //           x: 10,
  //           y: 5
  //         },
  //         {
  //           x: 20,
  //           y: -30
  //         },
  //         {
  //           x: -25,
  //           y: 15
  //         },
  //         {
  //           x: -10,
  //           y: 5
  //         }
  //       ],
  //       backgroundColor: [
  //         'rgba(54, 162, 235, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(54, 162, 235, 1)',
  //       ],
  //       borderWidth: 1
  //     }
  //   ]
  // }

  // var scatterChartOptions = {
  //   scales: {
  //     xAxes: [{
  //       type: 'linear',
  //       position: 'bottom'
  //     }]
  //   }
  // }

  // Get context with jQuery - using jQuery's .get() method.
  if ($("#barChart").length) {
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: data,
      options: options
    });
  }

  if ($("#barChart1").length) {
    var barChartCanvas = $("#barChart1").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: data,
      options: options
    });
  }

  if ($("#pieChart").length) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
  }


  // if ($("#lineChart").length) {
  //   var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
  //   var lineChart = new Chart(lineChartCanvas, {
  //     type: 'line',
  //     data: data,
  //     options: options
  //   });
  // }

  // if ($("#linechart-multi").length) {
  //   var multiLineCanvas = $("#linechart-multi").get(0).getContext("2d");
  //   var lineChart = new Chart(multiLineCanvas, {
  //     type: 'line',
  //     data: multiLineData,
  //     options: options
  //   });
  // }

  // if ($("#areachart-multi").length) {
  //   var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
  //   var multiAreaChart = new Chart(multiAreaCanvas, {
  //     type: 'line',
  //     data: multiAreaData,
  //     options: multiAreaOptions
  //   });
  // }

  // if ($("#doughnutChart").length) {
  //   var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
  //   var doughnutChart = new Chart(doughnutChartCanvas, {
  //     type: 'doughnut',
  //     data: doughnutPieData,
  //     options: doughnutPieOptions
  //   });
  // }
  // if ($("#areaChart").length) {
  //   var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
  //   var areaChart = new Chart(areaChartCanvas, {
  //     type: 'line',
  //     data: areaData,
  //     options: areaOptions
  //   });
  // }

  // if ($("#scatterChart").length) {
  //   var scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
  //   var scatterChart = new Chart(scatterChartCanvas, {
  //     type: 'scatter',
  //     data: scatterChartData,
  //     options: scatterChartOptions
  //   });
  // }

//   if ($("#browserTrafficChart").length) {
//     var doughnutChartCanvas = $("#browserTrafficChart").get(0).getContext("2d");
//     var doughnutChart = new Chart(doughnutChartCanvas, {
//       type: 'doughnut',
//       data: browserTrafficData,
//       options: doughnutPieOptions
//     });
//   }
});