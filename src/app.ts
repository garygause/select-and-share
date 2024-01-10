import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const API_KEY = '';
const API_URL =
  'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=';

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const address = addressInput.value;

  // google api
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        address
      )}&key=${API_KEY}`
    )
    .then((response) => {
      const coords = response.data.results[0].geometry.location;
      console.log(coords);
    })
    .catch((error) => console.log(error));
}

form.addEventListener('submit', searchAddressHandler);
