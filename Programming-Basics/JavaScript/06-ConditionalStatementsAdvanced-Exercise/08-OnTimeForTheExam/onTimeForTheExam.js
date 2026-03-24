function OnTimeForTheExam(examHour, examMinute, arrivalHour, arrivalMinute) {
    // Calculate the time properly in order to get the exam time, arrival time and the difference in between them
    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;
    
    // Calculate the difference in between
    let timeDifference = arrivalTime - examTime;


    if (timeDifference > 0) {
        console.log("Late");

        let diff = timeDifference;
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            let hours = Math.floor(diff / 60);
            let minutes = diff % 60;
            let paddedMinutes = minutes.toString().padStart(2, '0');
            console.log(`${hours}:${paddedMinutes} hours after the start`);
        }
    }
    else if (timeDifference >= -30) {
        console.log("On time");

        if (timeDifference < 0) {
            console.log(`${Math.abs(timeDifference)} minutes before the start`);
        }
    }
    else {
        console.log("Early");

        let diff = Math.abs(timeDifference);
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        } else {
            let hours = Math.floor(diff / 60);
            let minutes = diff % 60;
            let paddedMinutes = minutes.toString().padStart(2, '0');
            console.log(`${hours}:${paddedMinutes} hours before the start`);
        }
    }
}

OnTimeForTheExam(9, 30, 9, 50);
OnTimeForTheExam(9, 0, 8, 30);
OnTimeForTheExam(16, 0, 15, 0);
OnTimeForTheExam(9, 0, 10, 30);
OnTimeForTheExam(14, 0, 13, 55);
OnTimeForTheExam(11, 30, 8, 12);
OnTimeForTheExam(10, 0, 10, 0);
OnTimeForTheExam(11, 30, 10, 55);
OnTimeForTheExam(11, 30, 12, 29);