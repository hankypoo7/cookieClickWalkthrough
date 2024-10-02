let cookies = 0;
let power = 0;
let cost = 10;

function clicked() {
    if (power === 0) {
        cookies += 1;
    } else {
        cookies += power;
    }
    document.getElementById("cookiesText").innerHTML = cookies;
}

function powerBuy() {
    if (cookies >= cost) {
        power += 1;
        cookies -= cost;
        cost = 10 * (1 + (power * 0.1));

        // Update the number of cookies, power per click, and cost in the display
        document.getElementById("cookiesText").innerHTML = cookies;
        document.getElementById("powerPerClickText").innerHTML = power;  // Power per click on the left
        document.getElementById("costText").innerHTML = Math.floor(cost);  // Update cost text

        // Update the owned power count in the sidebar
        document.getElementById("powerOwnedText").innerHTML = power;  // Owned power in the sidebar
    } else {
        console.log('Not enough cookies!');
    }
}
