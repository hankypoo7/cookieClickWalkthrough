let cookies = 0;
let power = 0;
let cost = power * 1.1;

function clicked() {
  if (power = 0) {
    cookies = cookies + 1;
    document.getElementById("cookiesText").innerHTML = cookies;
  }
  else {
    cookies = cookies * power;
    document.getElementById("cookiesText").innerHTML = cookies;
}

function powerBuy() {
  if (cookies > 9) {
    if (cookies > cost) {
      power = power + 1;
      cookies = cookies - cost;
      document.getElementById("cookiesText").innerHTML = cookies;
      document.getElementById("powerText").innerHTML = power;
    }
    else {
      console.log('Not enough cookies!')
    }
  else {
    console.log('Not enough cookies!')
  }
    
