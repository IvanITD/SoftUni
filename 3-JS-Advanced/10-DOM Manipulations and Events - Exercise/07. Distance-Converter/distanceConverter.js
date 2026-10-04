function attachEventsListeners() {
    const rates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    document.getElementById('convert').addEventListener('click', onConvert);

    function onConvert() {
        const value = Number(document.getElementById('inputDistance').value);
        const fromUnit = document.getElementById('inputUnits').value;
        const toUnit = document.getElementById('outputUnits').value;

        const meters = value * rates[fromUnit];
        const result = meters / rates[toUnit];

        document.getElementById('outputDistance').value = result;
    }
}