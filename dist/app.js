const form = document.querySelector('form');
const addressInput = document.getElementById('address');
const API_KEY = 'AIzaSyAhIS4ZkB5arBMj48IoDYpad466A9xNCM4';
const API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=';
function searchAddressHandler(event) {
    event.preventDefault();
    const address = addressInput.value;
}
form.addEventListener('submit', searchAddressHandler);
export {};
//# sourceMappingURL=app.js.map