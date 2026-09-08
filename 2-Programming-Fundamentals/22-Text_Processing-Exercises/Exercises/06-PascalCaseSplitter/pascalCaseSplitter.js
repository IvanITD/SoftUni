function pascalCaseSplitter(string) {
    let result = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase() && i > 0) {
            result.push(string.substring(0, i));
            string = string.substring(i);
            i = 0;
        }
    }
    result.push(string);

    console.log(result.join(', ').trim());
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log("--------------------------------");
pascalCaseSplitter('HoldTheDoor');
console.log("--------------------------------");
pascalCaseSplitter('ThisIsSoAnnoyingToDo');