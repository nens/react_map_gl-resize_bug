import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const mapBoxAccesToken = "pk.eyJ1IjoibmVsZW5zY2h1dXJtYW5zIiwiYSI6ImNrZWlnbHdycjFqNHMyem95cWFqNzhkc3IifQ.ymzd92iqviR5RZ-dd-xRIg";

function App() {
  return (
    <div 
      className="App" 
      style={{
        height: "600px", 
        display: "grid", 
        gridTemplateColumns: "auto 1fr", 
        overflow: "hidden"
      }}
    >
      <div 
        style={{
          width: "120px", 
          resize: "horizontal", 
          overflow: "auto", 
          borderStyle: "solid", 
          borderWidth: "2px", 
          borderColor: "lime"
        }}
      />
      <div 
        style={{
          borderStyle: "solid", 
          borderWidth: "2px", 
          borderColor: "purple"
        }}
      >
        <ReactMapGL
          style={{
            width:"100%",
            height: "100%",
          }}
          mapboxAccessToken={mapBoxAccesToken}
          mapStyle={"mapbox://styles/nelenschuurmans/ck8sgpk8h25ql1io2ccnueuj6"}
        />
      </div>
    </div>
  );
}

export default App;
