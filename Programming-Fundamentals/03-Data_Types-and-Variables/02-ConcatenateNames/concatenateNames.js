function ConcatenateNames(firstName, lastName, delimiter) {
    let result = `${firstName}${delimiter}${lastName}`;

    console.log(result);
}

ConcatenateNames('John', 'Smith', '->');
ConcatenateNames('Jan', 'White', '<->');
ConcatenateNames('Linda', 'Terry', '=>');