import axios from 'axios';

//declare var google: any;

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const API_KEY = 'AIzaSyAhIS4ZkB5arBMj48IoDYpad466A9xNCM4';
const API_URL = 'https://maps.googleapis.com/maps/api/js?key=&callback=initMap';

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
      const map = new google.maps.Map(document.getElementById('map')!, {
        center: coords,
        zoom: 16,
      });
      new google.maps.Marker({ position: coords, map: map });
      console.log(coords);
    })
    .catch((error) => console.log(error));
}

form.addEventListener('submit', searchAddressHandler);
