function AddAndRemove(arr) {
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

AddAndRemove(['add', 'add', 'add', 'add']);
AddAndRemove(['add', 'add', 'remove', 'add', 'add']);
AddAndRemove(['remove', 'remove', 'remove']);