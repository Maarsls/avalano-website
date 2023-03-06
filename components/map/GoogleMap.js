import React from "react";

import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  //   responisve map

  width: "100%",
  height: "600px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

const locations = [
  {
    name: "Location 1",
    location: {
      lat: -3.745,
      lng: -39.523,
    },
  },
  {
    name: "Location 2",
    location: {
      lat: -3.745,
      lng: -38.623,
    },
  },
  {
    name: "Location 3",
    location: {
      lat: -3.745,
      lng: -38.323,
    },
  },
  {
    name: "Location 4",
    location: {
      lat: -3.745,
      lng: -38.223,
    },
  },
  {
    name: "Location 5",
    location: {
      lat: -3.745,
      lng: -38.823,
    },
  },
];

function createKey(location) {
  return location.lat + location.lng;
}

const options = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
};

export default function MyGoogleMap() {
  return (
    <div className="px-15">
      <LoadScript googleMapsApiKey="AIzaSyAJQyVi50EhewyyEAtfQ5QYsZc_h2moMhw">
        <GoogleMap
          id="avalano-map"
          mapContainerStyle={containerStyle}
          zoom={3}
          center={center}
        >
          <MarkerClusterer options={options}>
            {(clusterer) =>
              locations.map((location) => (
                <Marker
                  key={createKey(location.location)}
                  position={location.location}
                  clusterer={clusterer}
                  onLoad={onLoad}
                 
                />
              ))
            }
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
