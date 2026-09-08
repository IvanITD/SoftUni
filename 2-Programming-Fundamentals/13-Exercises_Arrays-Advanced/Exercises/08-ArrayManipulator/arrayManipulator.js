function arrayManipulator(nums, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action === 'add') {
            let idx = Number(tokens.shift());
            let el = Number(tokens.shift());

            nums.splice(idx, 0, el);
        } else if (action === 'addMany') {
            let idx = Number(tokens.shift());
            let els = tokens.map(Number);

            nums.splice(idx, 0, ...els);
        } else if (action === 'contains') {
            let el = Number(tokens.shift());

            console.log(nums.indexOf(el));
        } else if (action === 'remove') {
            let idx = Number(tokens.shift());
            nums.splice(idx, 1);
        } else if (action === 'shift') {
            let rotations = Number(tokens.shift());
            
            for (let rotation = 1; rotation <= rotations; rotation++) {
                let firstEl = nums.shift();
                nums.push(firstEl);
            }
        } else if (action === 'sumPairs') {
            let pairSums = [];

            for (let i = 0; i < nums.length; i += 2) {
                let currentNum = nums[i];
                let nextNum = nums[i + 1];

                if (nextNum) {
                    pairSums.push(currentNum + nextNum);
                } else {
                    pairSums.push(currentNum);
                }
            }
            nums = pairSums;
        } else if (action === 'print') {
            console.log(`[ ${nums.join(', ')} ]`);
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
console.log();
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);