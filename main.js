// Name: Hillary Elliott. Year: 2022

//initialize function called when the script loads

function initialize(){
    loadMap();
	
	
};

function onEachFunction(feature, geojsonLayer
){
	if (feature.properties && feature.properties.popupContent){
		geojsonLayer.bindPopup (feature.properties.popupContent);
		
	}
}


//function to create a table with cities and their populations
function loadMap(){
    	//create a basemap style. You can find other options at https://leaflet-extras.github.io/leaflet-providers/preview/
	var CartoDB_Positron = L.tileLayer(
		'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', 
		{
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
			subdomains: 'abcd'
		}
	)
	//add this basemap style to a JS object, to which you could also add other baselayers. This object is loaded as a basemap selector as seen further down
	var baseLayers = {
		"CartoDB": CartoDB_Positron
		//,...
	};
	// create the map
	var mymap = L.map('mapdiv', {
		center: [20, 20]
		,zoom: 1.5
		,maxZoom: 18
		,minZoom: 1.5
		,layers: CartoDB_Positron
	});

		
	// parse json object (var geojsonData) and turn into loadable layer
	geojsonLayer = L.geoJSON(geojsonData, {
		onEachFeature: onEachFeature

	});
	
	//add geojsonData to map
	geojsonLayer.addTo(mymap);// add json element to map
	
	//declare basemap selector widget
	var lcontrol = L.control.layers(baseLayers);

	//add it to the map
	lcontrol.addTo(mymap);

};

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}


//call the initialize function when the window has loaded
window.onload = initialize();
