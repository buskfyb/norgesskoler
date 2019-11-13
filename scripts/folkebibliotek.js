///////////////////////////////////////////////////////////////////////////////////////////////
//create an array containing the information for each folkebibliotek in Viken
//[lat, long, "color of circle", radius in meters, "text for bibliotek"]
//used to populate the circleMarker() later in the code
///////////////////////////////////////////////////////////////////////////////////////////////

var folkebibliotekArray = [
//Buskerud fylkeskommune
[59.894920, 9.931280, "red", 15, "<b> Buskerud videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.buskerud.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.737280, 10.198230, "red", 15, "<b> Drammen videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.drammen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.773180, 9.903880, "blue", 10, "<b> Eiker videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.eiker.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.702750, 8.943760, "blue", 10, "<b> Gol videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.gol.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.157320, 10.255280, "red", 15, "<b> Hønefoss videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.honefoss.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.669460, 9.647670, "red", 15, "<b> Kongsberg videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.kongsberg.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.757290, 10.245220, "red", 15, "<b> Lier videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.lier.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.168961, 9.007370, "green", 5, "<b> Numedal videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.numedal.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.164250, 10.258950, "red", 15, "<b> Ringerike videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.ringerike.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.737790, 10.399680, "red", 15, "<b> Røyken videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.royken.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.760737,10.237951, "red", 15, "<b> St. Hallvard videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.st-hallvard.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.628901, 8.548977, "blue", 10, "<b> Ål videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.al.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.757090, 10.120740, "red", 15, "<b> Åssiden videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.assiden.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Akershus fylkeskommune
[59.83159, 10.437466, "red", 15, "<b> Asker videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.asker.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.048827, 10.8805, "red", 15, "<b> Bjertnes videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.bjertnes.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.883806, 11.558704, "red", 15, "<b> Bjørkelangen videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.bjorkelangen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.826880, 10.445600, "blue", 10, "<b> Bleiker videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.bleiker.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.715916, 10.867549, "red", 15, "<b> Drømtorp videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.dromtorp.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.907390, 10.527620, "blue", 10, "<b> Dønski videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.donski.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.336961, 11.263347, "red", 15, "<b> Eidsvoll videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.eidsvoll.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.935669, 10.601399, "blue", 10, "<b> Eikeli videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.eikeli.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.692574, 10.660640, "red", 15, "<b> Frogn videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.frogn.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.865867, 10.486992, "green", 5, "<b> Holmen grunn- og videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.holmen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.1040393, 11.3756143, "blue", 10, "<b> Hvam videregående skole </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.hvam.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],


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
	fillColor:purple, //color of circle from array
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
