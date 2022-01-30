
data = getSchedule();
console.log(data)

var AllValidSchedules = []
newArr = []
finalArr = []
finalAvailSchedules = []

     console.log("data",data)
    
    
    
    scheduleToSearch = ["ENGL 2120", "BIOL 1040","CPSC 2150", "STAT 3090", "CPSC 2120" ];
    var schedules = []

    
    
function getSchedules(scheduleToSearch, availableSchedule){
        
    for(className in scheduleToSearch){
        // console.log("data2",data)

        schedules.push(availableSchedule.filter(d => {
            // console.log("iter", d["Class"])
            
            return d["Course"] == scheduleToSearch[className];
        }))
    }
    
}

getSchedules(scheduleToSearch, data);
// console.log("SCHEDULES",schedules)

// Schedule of Class index
var validSchedule = [] 



function isValid(newClass){
  
    startTime1 = parseInt(newClass["StartTime"].split(':').join(''))
    endTime1 = parseInt(newClass["EndTime"].split(':').join(''))
    
    for(var currClassIndex = 0; currClassIndex<validSchedule.length; currClassIndex++){
        
        // current class index tells schedules which class (eg 2150) to read valid schedlues from
        startTime2 = parseInt(schedules[currClassIndex][validSchedule[currClassIndex]]["StartTime"].split(':').join(''))
        endTime2 = parseInt(schedules[currClassIndex][validSchedule[currClassIndex]]["EndTime"].split(':').join(''))
        
        // console.log("startTime1", startTime1)
        // console.log("startTime2", startTime2)
        // console.log("endTime1", endTime1)
        // console.log("endTime2", endTime2)
        // Check Time 
        isTimeInvalid = (startTime1< endTime2 && startTime2 < endTime1)
        
        if(isTimeInvalid){
            newClassDay = newClass["Days"].split('')
            
            for(day in newClassDay){
                if(schedules[currClassIndex][validSchedule[currClassIndex]]["Days"].includes(newClassDay[day])){
                    // console.log("valid",schedules[currClassIndex][validSchedule[currClassIndex]]["Days"])
                    // console.log("checking",newClassDay[day] )
                    return false
                }
            }
        }
    }
   
    return true;
}

//    console.log( "tessssst",isValid(demoSchedule[8]))

// classindex --> 2150
function searchValidSchedule(classIndex){
    
    if(classIndex >= scheduleToSearch.length){
        return;
    }

    for(var section=0; section<schedules[classIndex].length; section++){
        var currentClassSections = schedules[classIndex];
         
        if(isValid(currentClassSections[section] )){
             
             validSchedule[classIndex] = section;
            
             if(classIndex == scheduleToSearch.length - 1){
                AllValidSchedules.push([...validSchedule])
                pushJSON([...validSchedule])
                
            }            
            searchValidSchedule(classIndex+1 )

         }
    } 
}
finalData = []

function pushJSON(validIndexes){
    temp=[]
    for(var idx = 0; idx<validIndexes.length; idx++){
        temp.push(schedules[idx][validIndexes[idx]]);
    }

    finalData.push([...temp])
    temp.length = 0

}

searchValidSchedule(0);

// console.log("total Solutions", AllValidSchedules)

if(AllValidSchedules.length > 15){

     selectedNum = parseInt(AllValidSchedules.length) / 15;
    // console.log(Math.floor(selectedNum))
    newArr = finalData.filter((d, i) =>{
        if(i % Math.floor(selectedNum) === 0){
            return d; 
        }
    })
    // console.log("teee", newArr)
}

// console.log("sche",schedules[0])



console.log("FINAL DATA", newArr)
populateCalendarr(newArr);



