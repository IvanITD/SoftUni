function foreignLanguage(country) {
    // Check the country to determine the speaking language
    switch (country) {
        case 'England':
        case 'USA':
            // Print the speaking language English
            console.log('English');
            break;
        
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            // Print the speaking language Spanish
            console.log('Spanish');
            break;
        
        default: // If anything else
            // Print unknown
            console.log('unknown');
            break;
    }
}

foreignLanguage('USA');
foreignLanguage('Germany');