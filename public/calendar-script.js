
demoSchedule = [
    {
        Class: "CPSC 2070",
        StartTime: "3:30:00 PM",
        EndTime: "4:45:00 PM",
        Days: "TR"
    },
    {
        Class: "CPSC 2120",
        StartTime: "1:30:00 PM",
        EndTime: "2:45:00 PM",
        Days: "MWF"

    },
    {
        Class: "CPSC 2130",
        StartTime: "8:30:00 AM",
        EndTime: "9:55:00 AM",
        Days: "TF"
    },
    {
        Class: "CPSC 2150",
        StartTime: "10:00:00 AM",
        EndTime: "12:55:00 PM",
        Days: "MW"
    },

]

var finalData = []
var temp = []

function populateCalendarr(scheduleArray){
    console.log("EEEE", scheduleArray[0])
  temp =   formatScheduleJSON(scheduleArray[2])
    console.log("teemp",temp)
    getSCHS(temp)
}



function formatScheduleJSON(schedule){

    formatTime = d => {


        temp2 = d.split(":");
        if(temp2[0].length == 1){
            temp2[0] = "0"+temp2[0];
        }
        d = temp2.join(':');

        return ("T" + d);
    }

    dayToDate = {
        M: "2022-01-03",
        T: "2022-01-04",
        W: "2022-01-05",
        R: "2022-01-06",
        F: "2022-01-07",
    }

    var event = []
    console.log("schedule", schedule)
    schedule.forEach((item) => {

        numOfDays = item["Days"].length;
        // console.log("formatTime Test",formatTime(item["StartTime"]));
        for (var i=0; i<numOfDays; i++){

            // console.log(dayToDate[item["Days"][i]])

            sDate = dayToDate[item["Days"][i]] + (formatTime(item["StartTime"]));
            eDate = dayToDate[item["Days"][i]] + (formatTime(item["EndTime"]));
            
            event.push({
                title: item["Course"],
                start: sDate,
                end: eDate
            });
        }
    });
        
        console.log("EVENT BROSEPH")
        console.log(event)
        return event;

}


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    console.log("dfdgdfrghhf",mainSchedule)

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      initialDate: '2022-01-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
      },
      events: [ ...temp

      ]
    });

    calendar.render();
  });





