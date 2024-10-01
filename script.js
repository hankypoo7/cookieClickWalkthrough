//declare variables
let cookies = 0;
let power = 0;
let cost = 10;

//create functions
function clicked() {
    if (power === 0) { 
        cookies += 1;
    } else {
        cookies += power;  // Increase cookies based on current power
    }
    document.getElementById("cookiesText").innerHTML = cookies; // Update text showing # of cookies
}

function powerBuy() {
    if (cookies >= cost) {  // Check if cookies are enough for the cost
        power += 1; // Add 1 to power
        cookies -= cost;  // Subtract cost from cookies
        cost = Math.ceil(10 * Math.pow(1.1, power));  // Increase cost by 1.1 for every power upgrade
        document.getElementById("cookiesText").innerHTML = cookies; // Update text showing # of cookies
        document.getElementById("powerText").innerHTML = power; // Show amount of power
        document.getElementById("costText").innerHTML = cost;  // Display new cost
    } else {
        console.log('Not enough cookies!'); // If cookies <= cost, log error message
    }
}
