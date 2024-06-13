/*
  .__                              __                 __   
  |__| _____ ______   ____________/  |______    _____/  |_ 
  |  |/     \\____ \ /  _ \_  __ \   __\__  \  /    \   __\
  |  |  Y Y  \  |_> >  <_> )  | \/|  |  / __ \|   |  \  |  
  |__|__|_|  /   __/ \____/|__|   |__| (____  /___|  /__|  
          \/|__|                           \/     \/      

   Use Live Server and Go Live to run your web application, 
   DO NOT just open index7.html file using your browser.
*/

/* DOMContentLoaded ----------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  // CREATE FUNCTIONS WITH THESE NAMES IN YOUR CODE AND THEN UNCOMMENT THESE LINES TO RUN THEM
  ajaxWeather(); // Task 3
  fetchPokemon(); // Task 4 - fair use policy!!!
  fetchDataFromFile('books7.json'); // Task 5
  fetchDataFromFile('not-found.json'); // Task 5
  fetchCors(); // Task 6
});

/* Task 1 --------------------------------------------------------------------------------------- */

/* This is a line with exactly 100 characters --------------------------------------------------- */

/**
 * The question about CORS:
 * El mecanisme de CORS és una mesura de seguretat implementada pels navegadors web per protegir els usuaris contra atacs de sol·licituds creuades entre dominis. No ens dona problemes perquè no estem realitzant les peticions des d'un navegador web.
 */

/**
 * The question about promises:
 * Les alternatives que tenim per aconseguir molestrar els resultats seria Then, async/await, AJAX i XMLHttpRequest.

 */

/**
 * The question about HTTP response status codes:
 * 200 --> Aquest codi indica que la sol·licitud ha estat completada amb èxit.
 * 201 --> Aquest codi s'utilitza per indicar que la sol·licitud ha estat completada amb èxit i que s'ha creat un nou recurs com a resultat de la sol·licitud.
 * 204 --> Aquest codi indica que la sol·licitud ha estat completada amb èxit, però el servidor no ha retornat cap contingut com a part de la resposta.
 * 301 --> Aquest codi indica que el recurs sol·licitat ha estat permanentment mogut a una nova ubicació.
 * 401 --> Aquest codi indica que l'accés al recurs sol·licitat està denegat perquè el client no ha proporcionat credencials d'autenticació vàlides o no està autenticat.
 * 404 --> Aquest codi indica que el recurs sol·licitat no ha estat trobat en el servidor.
 * 503 --> Aquest codi indica que el servidor no pot gestionar la sol·licitud en aquest moment perquè està sobrecarregat o en manteniment.
 */

/* Task 2 --------------------------------------------------------------------------------------- */

const googleMaps = {
  markers: [
    {
      name: "Rixos The Palm Dubai",
      location: {
        lat: 25.1212,
        long: 55.1535,
      },
    },
    {
      name: "Shangri-La Hotel",
      location: {
        lat: 25.2084,
        long: 55.2719,
      },
    },
    {
      name: "Grand Hyatt",
      location: {
        lat: 25.2285,
        long: 55.3273,
      },
    },
  ],
};

const database = [
  {
    _id: {
      $oid: "5968dd23fc13ae04d94561",
    },
    product_name: "sildenafil citrate",
    supplier: "Wisozk Inc",
    quantity: 261,
    unit_cost: "$10.47",
  },
  {
    _id: {
      $oid: "5968dd23fc13ae04d92342",
    },
    product_name: "Mountain Juniperus ashei",
    supplier: "Keebler-Hilpert",
    quantity: 292,
    unit_cost: "$8.74",
  },
  {
    _id: {
      $oid: "5968dd23fc13ae04d92403",
    },
    product_name: "Dextromathorphan HBr",
    supplier: "Schmitt-Weissnat",
    quantity: 211,
    unit_cost: "$20.53",
  },
];

const youtube = {
  kind: "youtube#searchListResponse",
  etag: '"m2yskBQFythfE4irbTIeOgYYfBU/PaiEDiVxOyCWelLPuuwa9LKz3Gk"',
  nextPageToken: "CAUQAA",
  regionCode: "KE",
  pageInfo: { totalResults: 4249, resultsPerPage: 5 },
  items: [
    {
      kind: "youtube#searchResult",
      etag: '"m2yskBQFythfE4irbTIeOgYYfBU/QpOIr3QKlV5EUlzfFcVvDiJT0hw"',
      id: { kind: "youtube#channel", channelId: "UCJowOS1R0FnhipXVqEnYU1A" },
    },
    {
      kind: "youtube#searchResult",
      etag: '"m2yskBQFythfE4irbTIeOgYYfBU/AWutzVOt_5p1iLVifyBdfoSTf9E"',
      id: { kind: "youtube#video", videoId: "Eqa2nAAhHN0" },
    },
    {
      kind: "youtube#searchResult",
      etag: '"m2yskBQFythfE4irbTIeOgYYfBU/2dIR9BTfr7QphpBuY3hPU-h5u-4"',
      id: { kind: "youtube#video", videoId: "IirngItQuVs" },
    },
  ],
};

/* Task 2 solution ------------------------------------------------------------------------------ */

const grandHyattLat = googleMaps.markers.find(
  (markers) => markers.name === "Grand Hyatt"
);
console.log(grandHyattLat.location.lat);
const maxLong = googleMaps.markers.reduce((maxMarker, currentMarker) => {
  return currentMarker.location.long > maxMarker.location.long
    ? currentMarker
    : maxMarker;
});
console.log(maxLong.name);
const foundOid = database.find((el) => el._id.$oid.includes("9234"));
console.log(foundOid.product_name);
const filteredQuantity = database.filter((el) => el.quantity > 250);
const idQuantity = filteredQuantity.map((el) => el._id);
console.log(...idQuantity);
const totalResults = youtube.pageInfo.totalResults;
const resultsPerPage = youtube.pageInfo.resultsPerPage;
console.log(
  `Hi ha un total de ${totalResults} resultats i se'n mostren ${resultsPerPage} per pàgina`
);
const firstVideoId = youtube.items.find((video) => video.id.videoId);
console.log(firstVideoId.id.videoId);
/* Task 3 --------------------------------------------------------------------------------------- */

// Use these constants to build your final endpoint.
// You will need four parameters (timezone is already provided, you need to add the other three).
const apiUrl = "https://api.open-meteo.com/v1/forecast?timezone=Europe/Madrid";
const latitude = 41.60594;
const longitude = 1.039171;

/* Task 3 solution ------------------------------------------------------------------------------ */

function ajaxWeather() {
  const temperatureUrl = `${apiUrl}&latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;
  const elevationUrl = `https://api.open-meteo.com/v1/elevation?latitude=${latitude}&longitude=${longitude}`;
  const minTemperatureUrl = `${apiUrl}&latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=temperature_2m_min&start_date=2024-06-11&end_date=2024-06-15`;

  let temperatureReq = new XMLHttpRequest();
  temperatureReq.addEventListener("load", temperature);
  temperatureReq.open("GET", temperatureUrl);
  temperatureReq.send();

  let elevationReq = new XMLHttpRequest();
  elevationReq.addEventListener("load", elevation);
  elevationReq.open("GET", elevationUrl);
  elevationReq.send();

  let minTemperatureReq = new XMLHttpRequest();
  minTemperatureReq.addEventListener("load", minTemperature);
  minTemperatureReq.open("GET", minTemperatureUrl);
  minTemperatureReq.send();

  function temperature() {
    const responseObj = JSON.parse(this.responseText);
    const temperature = responseObj.hourly.temperature_2m;
    console.log(Math.max(...temperature));
    console.log(Math.min(...temperature));
  }
  function elevation() {
    const responseObj = JSON.parse(this.responseText);
    return console.log(...responseObj.elevation);
  }

  function minTemperature() {
    const responseObj = JSON.parse(this.responseText);
    console.log([...responseObj.daily.temperature_2m_min]);
  }
}

/* Task 4 --------------------------------------------------------------------------------------- */

const pokeapiEndpoint = "https://pokeapi.co/api/v2/pokemon?offset=500&limit=50";

/* Task 4 solution ------------------------------------------------------------------------------ */

function fetchPokemon() {
  fetch(pokeapiEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      const pokemonWithP = data.results.filter((pokemon) =>
        pokemon.name.includes("p")
      );
      console.log(pokemonWithP.map((pokemon) => pokemon.name));
    });
}
/* Task 5 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 5 solution ------------------------------------------------------------------------------ */

async function fetchDataFromFile(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    let totalCost = 0;
    for (const book of data) {
      totalCost += book.price * 2;
    }
    console.log(totalCost.toFixed(2));
  } catch (error) {
    console.error(error);
  }
}
/* Task 6 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 6 solution ------------------------------------------------------------------------------ */
const apiUrlCors =
  "https://cors-anywhere.herokuapp.com/https://random-d.uk/api";
async function fetchCors() {
  try {
    const response = await fetch(apiUrlCors, {
      method: "GET",
      headers: { "X-Requested-With": "Demo" },
    });

    if (!response.ok) {
      throw new Error("Error");
    }
  } catch (error) {
    console.log(error);
  }
}
