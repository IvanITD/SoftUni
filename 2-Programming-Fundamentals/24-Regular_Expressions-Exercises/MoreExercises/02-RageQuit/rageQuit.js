function rageQuit(input) {
    let message = '';
    let pattern = /([^\d]+)(\d+)/g;
    let match = pattern.exec(input);

    while (match !== null) {
        let text = match[1].toUpperCase();
        let count = Number(match[2]);

        message += text.repeat(count);
        match = pattern.exec(input);
    }

    console.log(`Unique symbols used: ${new Set(message).size}`);
    console.log(message);
}

rageQuit('a3');
console.log('--------------------------------');
rageQuit('aSd2&5s@1');
console.log('--------------------------------');
rageQuit("e-!btI17z=E:DMJ19U1Tvg VQ>11P\"qCmo.-0YHYu~o%/%b.}a[=d15fz^\"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D'xi]-~17 *%p\"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p\"Z<v13fI]':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15");
