function loadingBar(number) {
    let percentCount = number / 10;

    let dotsCount = 10 - percentCount;

    let loading = `${number}% [${'%'.repeat(percentCount)}${'.'.repeat(dotsCount)}]`;
    let stillLoading = "Still loading..."

    if (number === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
    else {
        console.log(loading);
        console.log(stillLoading);
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);
