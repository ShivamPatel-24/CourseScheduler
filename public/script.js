d3.csv("/grade-dist.csv").then(function (data){


    // For now only send one data for a graph
    data = data[0];

    nonGradeItem = ["Course", "Course Title", "Honor", "Instructor", "Number", "Section"];

    for( item in nonGradeItem){
        // console.log(nonGradeItem[item])
        delete data[nonGradeItem[item]];
    }

    console.log(data);

    generatePieChart(data);

})



function generatePieChart( data){

    var chartData = [];
    for(d in data){
        chartData.push({x:d,value:data[d]})
    }

    console.log(chartData)


    anychart.onDocumentReady(function(){

        var chart = anychart.pie();

        chart.title("CPSC 2120");

        chart.data(chartData)

        chart.container('container')
        chart.draw()


        var chart2 = anychart.pie();

        chart2.title("ENGL 2120");
        chart2.data(chartData)

        chart2.container('container')
        chart2.draw()


        var chart3 = anychart.pie();

        chart3.title("CPSC 2150");
        chart3.data(chartData)

        chart3.container('container')
        chart3.draw()


        var chart4 = anychart.pie();

        chart4.title("STAT 3090");
        chart4.data(chartData)

        chart4.container('container')
        chart4.draw()



        var chart5 = anychart.pie();

        chart5.title("BIOL 1040");
        chart5.data(chartData)

        chart5.container('container')
        chart5s.draw()


    });

}
