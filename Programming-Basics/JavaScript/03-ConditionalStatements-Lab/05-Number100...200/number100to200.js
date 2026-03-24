function Number100To200(num) {
    if (num > 200) {
        console.log("Greater than 200");
    }
    else if (num >= 100 && num <= 200) {
        console.log("Between 100 and 200");
    }
    else {
        console.log("Less than 100");
    }
}

Number100To200(95);
Number100To200(120);
Number100To200(210);