///////////////////////////////////////////////////////////////////////////////////////////////
//create an array containing the information for each folkebibliotek in Viken
//[lat, long, "color of circle", radius in meters, "text for bibliotek"]
//used to populate the circleMarker() later in the code
///////////////////////////////////////////////////////////////////////////////////////////////

var folkebibliotekArray = [
//Buskerud fylkeskommune
[59.894920, 9.931280, "red", 15, "<b> Buskerud videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.buskerud.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"]

//Akershus fylkeskommune
	
//Østfold fylkeskommune



]; // end of folkebibliotekArray[]

///////////////////////////////////////////////////////////////////////////////////////////////
//define the layer group(overlays) for groups of libraries based on size; add them to map right away
//so that the selection box (legend) will be populated right away
//see tutorial at https://leafletjs.com/examples/layers-control/
///////////////////////////////////////////////////////////////////////////////////////////////
var folkebibliotekGroup = L.layerGroup().addTo(mymap);

///////////////////////////////////////////////////////////////////////////////////////////////
//use a for loop to iterate through the array (of schools) and create a circleMarker() object
//for each school using the info from the array + common info in the loop
//add each new circleMarker object to one of the overlay groups depending upon size
///////////////////////////////////////////////////////////////////////////////////////////////
for (var i = 0; i < folkebibliotekArray.length; i++) {
bibliotekCircle = new L.circleMarker([folkebibliotekArray[i][0], folkebibliotekArray[i][1]], {
	color:"black", //circleMarker border color
	fillColor:"purple", //color of circle from array
	weight: 2, //thickness of the border line
	fillOpacity: 0.7, //saturation of inner color
	radius:folkebibliotekArray[i][3] //size of circle, from the array
	}).bindPopup(folkebibliotekArray[i][4]); //add the text from the array for each library to a popup

	//add it to the folkebibliotek overlay group
	bibliotekCircle.addTo(folkebibliotekGroup);
	
} //end for loop

///////////////////////////////////////////////////////////////////////////////////////////////
//create the legend of each group of schools as overlay list with checkboxes
///////////////////////////////////////////////////////////////////////////////////////////////
var overlayMapBibliotek = {
"<span style='color:#444444; font-size:15px; font-weight:bold;'> Viken folkebibliotek </span>": folkebibliotekGroup
}

///////////////////////////////////////////////////////////////////////////////////////////////
//add the overlayMaps legend to the map, not collapsed
///////////////////////////////////////////////////////////////////////////////////////////////
L.control.layers(null, overlayMapBibliotek, {collapsed: false}).addTo(mymap);
