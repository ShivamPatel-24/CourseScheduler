
// Filtered Schedule
demoSchedule = [ 
    {
        Class: "CPSC 2070",         // 0
        StartTime: "3:30:00 PM",
        EndTime: "4:45:00 PM",
        Days: "TR"
    },
    {
        Class: "CPSC 2120",         // 1
        StartTime: "1:30:00 PM",
        EndTime: "2:45:00 PM",
        Days: "MWF"

    },
    {
        Class: "CPSC 2130",         // 2
        StartTime: "8:30:00 AM",
        EndTime: "9:55:00 AM",
        Days: "TF"
    },
    {
        Class: "CPSC 2150",         // 3
        StartTime: "10:00:00 AM",
        EndTime: "12:55:00 PM",
        Days: "MW"
    },
    {
        Class: "CPSC 2150",         // 4
        StartTime: "11:00:00 AM",
        EndTime: "12:35:00 PM",
        Days: "TR"
    },

]

// 

scheduleToSearch = ["CPSC 2150", "CPSC 2120"];

var validSchedule = [[0]]

function isValid( class1, class2 ){

    startTime1 = parseInt(class1["StartTime"].split(':').join(''))
    endTime1 = parseInt(class1["EndTime"].split(':').join(''))
    startTime2 = parseInt(class2["StartTime"].split(':').join(''))
    endTime2 = parseInt(class2["EndTime"].split(':').join(''))
    
    // end time of first is before start time of second
        
    
    // start time 
}

function searchValidSchedule(validSchedule){



}