<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      
      let dataAry = [['Sido', 'Cnt Per Sido']]; // [['sido','Cnt per sido'],['서울',33],[]...[]]
       
      fetch('../getSidoInfo.do')
      .then(resolve => resolve.json())
      .then(result => {
    	  console.log(result); // [{sido: '경기도', cnt: 51},{sido: '서울특별시', cnt: 43}]
    	  // [{},{}] -> [[],[]] (객체->배열) for문사용. 객체 불러와서 배열에 저장.
    	  result.forEach(item => {
    		  let ary = [];
    		  for (let prop in item) {
    			  ary.push(item[prop])
    		  }
    		  dataAry.push(ary)
    		  
    		  //dataAry.push([item.sido, item.cnt]); // 위에 for in문과 같은 내용
    	  })
    	  
    	  google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);
      })
      .catch(err => console.log(err));

      function drawChart() {

        var data = google.visualization.arrayToDataTable(dataAry);
        		
        		
        /* [
          ['Sido', 'Count per Sido'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ] */

        var options = {
          title: '일과 구성표'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <div id="piechart" style="width: 900px; height: 500px;"></div>
  </body>
</html>