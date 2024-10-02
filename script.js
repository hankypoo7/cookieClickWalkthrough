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
        document.getElementById("cookiesText").innerHTML = cookies;
        document.getElementById("powerText").innerHTML = power;
        document.getElementById("costText").innerHTML = Math.floor(cost);
        document.getElementById("powerNumButton").innerHTML = power;
    } else {
        console.log('Not enough cookies!');
    }
}
