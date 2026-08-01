function messagesManager(input) {
    let capacity = Number(input[0]);
    let users = new Map();

    for (let i = 1; i < input.length; i++) {
        let line = input[i];

        if (line === 'Statistics') {
            break;
        }

        let parts = line.split('=');
        let command = parts[0];

        if (command === 'Add') {
            let username = parts[1];
            let sent = Number(parts[2]);
            let received = Number(parts[3]);

            if (!users.has(username)) {
                users.set(username, { sent, received });
            }
        } else if (command === 'Message') {
            let sender = parts[1];
            let receiver = parts[2];

            if (users.has(sender) && users.has(receiver)) {
                let senderData = users.get(sender);
                let receiverData = users.get(receiver);

                senderData.sent++;
                receiverData.received++;

                if (senderData.sent + senderData.received >= capacity) {
                    users.delete(sender);
                    console.log(`${sender} reached the capacity!`);
                }

                if (users.get(receiver) && receiverData.sent + receiverData.received >= capacity) {
                    users.delete(receiver);
                    console.log(`${receiver} reached the capacity!`);
                }
            }
        } else if (command === 'Empty') {
            let username = parts[1];

            if (username === 'All') { 
                users.clear();
            } else if (users.has(username)) {
                users.delete(username);
            }
        }
    }
    console.log(`Users count: ${users.size}`);
    for (let [username, data] of users) {
        console.log(`${username} - ${data.sent + data.received}`);
    }
}

messagesManager(["10", "Add=Berg=9=0", "Add=Kevin=0=0", "Message=Berg=Kevin", "Add=Mark=5=4", "Statistics"]);
console.log('--------------------------------');
messagesManager(["20", "Add=Mark=3=9", "Add=Berry=5=5", "Add=Clark=4=0", "Empty=Berry", "Add=Blake=9=3", "Add=Michael=3=9", "Add=Amy=9=9", "Message=Blake=Amy", "Message=Michael=Amy", "Statistics"]);
console.log('--------------------------------');
messagesManager(["12", "Add=Bonnie=3=5", "Add=Johny=4=4", "Empty=All", "Add=Bonnie=3=3", "Statistics"]);    