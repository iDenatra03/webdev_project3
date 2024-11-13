let map;

async function initMap() {
  const position = { lat: 41.8349, lng: -87.6260 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "IIT",
  });
}

initMap();
