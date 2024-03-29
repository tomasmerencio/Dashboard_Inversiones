 $('.wrapper').toggleClass('toggled')

 $(window).resize(function(e) {
      if($(window).width()<=992){
        $('#sidebar').toggleClass('active');
        $('.wrapper').toggleClass('toggled');
      }else{
        $('#sidebar').removeClass('active');
        $('.wrapper').removeClass('toggled');
      }
 });

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

var tenenciasCanvas = document.getElementById("grafico_tenencias");
var composicionCanvas = document.getElementById("grafico_composicion");
var gananciasPerdidasCanvas = document.getElementById("grafico_ganancias_perdidas");

Chart.defaults.global.defaultFontFamily = "Poppins";
Chart.defaults.global.defaultFontSize = 12;

var options = {
      legend: {
          position: 'right',
          labels: {
              fontColor: "#f5f5f5",
              boxWidth: 20,
              padding: 10
          }
      }
};

var lineChartOptions = {
  scales: {
    yAxes: [{
      gridLines: {
        drawBorder: false,
        color: "#C9C9C9",
      },
      ticks: {
        max: 15,
        min: 0,
        stepSize: 5,
        fontColor: "#f5f5f5"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false,
        color: "#f5f5f5"
      },
      ticks: {
        fontColor: "#f5f5f5"
      }
    }]
  },
  legend: {
      position: 'bottom',
      labels: {
          fontColor: "#f5f5f5",
          boxWidth: 20,
          padding: 10
      }
  }
}

var dataTenencias = {
    labels: [
        "AR$ - Peso",
        "US$ - Dólar"
    ],
    datasets: [
        {
            data: [60, 40],
            backgroundColor: [
                "#006671",
                "#25AEA1"
            ]
        }]
};

var pieChart = new Chart(tenenciasCanvas, {
  type: 'pie',
  data: dataTenencias,
  options: options
});

var dataComposicion = {
    labels: [
        "Bonos",
        "Acciones",
        "FCIs"
    ],
    datasets: [
        {
            data: [30, 50, 20],
            backgroundColor: [
                "#006671",
                "#25AEA1",
                "#84F9BE"
            ]
        }]
};

var doughnutChart = new Chart(composicionCanvas, {
  type: 'doughnut',
  data: dataComposicion,
  options: options
});

var dataGanancias = {
  label: "Ganancias",
  data: [0, 6, 14, 7, 2, 5, 12],
  lineTension: 0,
  fill: false,
  borderColor: '#99D976'
};

var dataPerdidas = {
  label: "Perdidas",
  data: [0, 1, 5, 5, 8, 4, 7],
  lineTension: 0,
  fill: false,
  borderColor: '#F1962E'
};

var dataGananciasPerdidas = {
  labels: ["1", "5", "10", "15", "20", "25", "30"],
  datasets: [dataGanancias, dataPerdidas]
};

var lineChart = new Chart(gananciasPerdidasCanvas, {
  type: 'line',
  data: dataGananciasPerdidas,
  options: lineChartOptions
});
