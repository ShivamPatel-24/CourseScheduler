var data2, data3, data4, data5;

d3.csv("/grade-dist.csv").then(function (data){

  console.log(data);
    // For now only send one data for a graph

    data2 = data[1]
    data3 = data[2]
    data4 = data[3]
    data5 = data[4]
    data = data[0];

    nonGradeItem = ["Course", "Course Title", "Honor", "Instructor", "Number", "Section"];
    console.log("data2 ", data2);
    for( item in nonGradeItem){
        console.log(nonGradeItem[item])
        delete data[nonGradeItem[item]];
        delete data2[nonGradeItem[item]];
        delete data3[nonGradeItem[item]];
        delete data4[nonGradeItem[item]];
        delete data5[nonGradeItem[item]];
    }

    console.log(data);

    generatePieChart(data);

})

function findClass(data){
    for (d in data){
        return d["Course"];
    }
}

function generatePieChart( data){


    var chartData = [];
    var chartData2 = [];
    var chartData3 = [];
    var chartData4 = [];
    var chartData5 = [];
    for(d in data){
        chartData.push({x:d,value:data[d]})
    }

    for(d in data2){
        chartData2.push({x:d,value:data2[d]})
    }

    for(d in data3){
        chartData3.push({x:d,value:data3[d]})
    }

    for(d in data4){
        chartData4.push({x:d,value:data4[d]})
    }

    for(d in data5){
        chartData5.push({x:d,value:data5[d]})
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
        chart2.data(chartData2)

        chart2.container('container')
        chart2.draw()


        var chart3 = anychart.pie();

        chart3.title("CPSC 2150");
        chart3.data(chartData3)

        chart3.container('container')
        chart3.draw()


        var chart4 = anychart.pie();

        chart4.title("STAT 3090");
        chart4.data(chartData4)

        chart4.container('container')
        chart4.draw()



        var chart5 = anychart.pie();

        chart5.title("BIOL 1040");
        chart5.data(chartData5)

        chart5.container('container')
        chart5s.draw()


    });



}
