function cutAndReverse(string) {
    let mid = Math.floor(string.length / 2);

    let firstHalf = string.substring(0, mid);
    let secondHalf = string.substring(mid);

    reversedFirstHalf = firstHalf.split('').reverse().join('');
    reversedSecondHalf = secondHalf.split('').reverse().join('');

    console.log(reversedFirstHalf);
    console.log(reversedSecondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('--------------------------------');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');