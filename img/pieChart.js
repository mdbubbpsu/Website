google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['', 'Hours per Day'],
    ['Computer Science',     60],
    ['Mathematics / Statistics',      25],
    ['Data Science',    15],
    
  ]);

  var options = {
    title: 'Course Breakdown',
     colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}