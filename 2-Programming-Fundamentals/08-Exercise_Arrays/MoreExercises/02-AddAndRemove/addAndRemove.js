function addAndRemove(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            result.push(i + 1);
        }
        else if (arr[i] === 'remove') {
            result.pop();
        }
        
    }
    if (result.length === 0) {
        console.log('Empty');
    }
    console.log(result.join(' '));
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);