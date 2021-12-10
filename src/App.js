import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1Ijoia2hhdHRha2FobWVkIiwiYSI6ImNrZG95em15bDBwb3MyeHR2YWVvdGkwbnEifQ.Ac_1yEJqfx1X8aw1y1yiag";

const style = {
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0
};

export default function App() {
  const [state] = useState({
    lng: 5,
    lat: 34,
    zoom: 2
  });

  const mapContainer = useRef("");
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [state.lng, state.lat],
      zoom: state.zoom
    });
  }, [state.lng, state.lat, state.zoom]);

  return (
    <div className="App">
      <div style={style} ref={(el) => (mapContainer.current = el)} />
    </div>
  );
}
