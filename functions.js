google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['category 1',     11],
    ['category 2',      11],
    ['category 3',  2],
    ['category 4', 2],
    ['category 5',    7]
  ]);

  var options = {
    title: 'My Daily Activities',
    pieHole: 1,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}