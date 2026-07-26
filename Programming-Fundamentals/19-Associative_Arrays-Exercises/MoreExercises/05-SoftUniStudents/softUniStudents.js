function softUniStudents(input) {
    let courses = {};

    for (let line of input) {
        if (line.includes(': ')) {
            let [courseName, capacityStr] = line.split(': ');
            let capacity = Number(capacityStr);

            if (!courses[courseName]) {
                courses[courseName] = {
                    capacity: capacity,
                    students: []
                };
            } else {
                courses[courseName].capacity += capacity;
            }
        } else if (line.includes(' joins ')) {
            let [leftSide, courseName] = line.split(' joins ');

            let [userPart, email] = leftSide.split(' with email ');

            let username = userPart.split('[')[0];

            let credits = Number(userPart.split('[')[1].replace(']', ''));

            if (courses[courseName] &&
                courses[courseName].students.length < courses[courseName].capacity) {

                courses[courseName].students.push({
                    username: username,
                    email: email,
                    credits: credits
                });
            }
        }
    }

    let courseNames = Object.keys(courses);

    courseNames.sort((a, b) => {
        return courses[b].students.length - courses[a].students.length;
    });

    for (let name of courseNames) {
        courses[name].students.sort((a, b) => {
            return b.credits - a.credits;
        });

        let course = courses[name];
        let placesLeft = course.capacity - course.students.length;

        console.log(`${name}: ${placesLeft} places left`);

        for (let student of course.students) {
            console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
        }
    }
}

softUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 
    'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 
    'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 
    'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 
    'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 
    'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);
console.log('--------------------------------');
softUniStudents(['JavaBasics: 15', 'user1[26] with email user1@user.com joins JavaBasics', 'user2[36] with email user11@user.com joins JavaBasics', 
    'JavaBasics: 5', 'C#Advanced: 5', 'user1[26] with email user1@user.com joins C#Advanced', 'user2[36] with email user11@user.com joins C#Advanced', 
    'user3[6] with email user3@user.com joins C#Advanced', 'C#Advanced: 1', 'JSCore: 8', 'user23[62] with email user23@user.com joins JSCore']);