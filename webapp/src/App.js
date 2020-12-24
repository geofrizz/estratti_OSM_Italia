import "./App.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import * as topojson from "topojson-client";
import provinces from "./static/boundaries/provinces.topo.json";
const italyCoords = [42, 12.5];

function App() {
  const kri = topojson.feature(provinces, "provinces");
  return (
    <div className="container">
      <MapContainer
        id="mapContainer"
        center={italyCoords}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON pathOptions={{ color: "red" }} key={"prov"} data={kri} />
      </MapContainer>
    </div>
  );
}

export default App;
