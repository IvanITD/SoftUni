function destinationMapper(input) {
    let pattern = /([=\/])([A-Z][a-zA-Z]{2,})\1/g;
    let matches = [...input.matchAll(pattern)];

    let destinations = matches.map(m => m[2]);
    let travelPoints = destinations.reduce((sum, d) => sum + d.length, 0);

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('--------------------------------');
destinationMapper("ThisIs some InvalidInput");