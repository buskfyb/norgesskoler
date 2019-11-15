///////////////////////////////////////////////////////////////////////////////////////////////
//create an array containing the information for each videregående skole in Viken
//[lat, long, "color of circle", radius in meters, "text for school"]
//used to populate the circleMarker() later in the code
///////////////////////////////////////////////////////////////////////////////////////////////

var skolerArray = [
//Buskerud fylkeskommune
[59.894920, 9.931280, "red", 15, "<b><font size='4'> Buskerud videregående skole </font></b><br /> <a href='http://www.buskerud.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.737280, 10.198230, "red", 15, "<b><font size='4'> Drammen videregående skole </font></b><br /> <a href='http://www.drammen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.773180, 9.903880, "blue", 10, "<b><font size='4'> Eiker videregående skole </font></b><br /> <a href='http://www.eiker.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.702750, 8.943760, "blue", 10, "<b><font size='4'> Gol videregående skole </font></b><br /> <a href='http://www.gol.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.157320, 10.255280, "red", 15, "<b><font size='4'> Hønefoss videregående skole </font></b><br /> <a href='http://www.honefoss.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.669460, 9.647670, "red", 15, "<b><font size='4'> Kongsberg videregående skole </font></b><br /> <a href='http://www.kongsberg.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.757290, 10.245220, "red", 15, "<b><font size='4'> Lier videregående skole </font></b><br /> <a href='http://www.lier.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.168961, 9.007370, "green", 5, "<b><font size='4'> Numedal videregående skole </font></b><br /> <a href='http://www.numedal.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.164250, 10.258950, "red", 15, "<b><font size='4'> Ringerike videregående skole </font></b><br /> <a href='http://www.ringerike.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.737790, 10.399680, "red", 15, "<b><font size='4'> Røyken videregående skole </font></b><br /> <a href='http://www.royken.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.760737,10.237951, "red", 15, "<b><font size='4'> St. Hallvard videregående skole </font></b><br /> <a href='http://www.st-hallvard.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.628901, 8.548977, "blue", 10, "<b><font size='4'> Ål videregående skole </font></b><br /> <a href='http://www.al.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.757090, 10.120740, "red", 15, "<b><font size='4'> Åssiden videregående skole </font></b><br /> <a href='http://www.assiden.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Akershus fylkeskommune
[59.83159, 10.437466, "red", 15, "<b><font size='4'> Asker videregående skole </font></b><br /> <a href='https://www.asker.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.048827, 10.8805, "red", 15, "<b><font size='4'> Bjertnes videregående skole </font></b><br /> <a href='https://www.bjertnes.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.883806, 11.558704, "red", 15, "<b><font size='4'> Bjørkelangen videregående skole </font></b><br /> <a href='https://www.bjorkelangen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.826880, 10.445600, "blue", 10, "<b><font size='4'> Bleiker videregående skole </font></b><br /> <a href='https://www.bleiker.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.715916, 10.867549, "red", 15, "<b><font size='4'> Drømtorp videregående skole </font></b><br /> <a href='https://www.dromtorp.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.907390, 10.527620, "blue", 10, "<b><font size='4'> Dønski videregående skole </font></b><br /> <a href='https://www.donski.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.336961, 11.263347, "red", 15, "<b><font size='4'> Eidsvoll videregående skole </font></b><br /> <a href='https://www.eidsvoll.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.935669, 10.601399, "blue", 10, "<b><font size='4'> Eikeli videregående skole </font></b><br /> <a href='https://www.eikeli.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.692574, 10.660640, "red", 15, "<b><font size='4'> Frogn videregående skole </font></b><br /> <a href='https://www.frogn.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.865867, 10.486992, "green", 5, "<b><font size='4'> Holmen grunn- og videregående skole </font></b><br /> <a href='https://www.holmen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.1040393, 11.3756143, "blue", 10, "<b><font size='4'> Hvam videregående skole </font></b><br /> <a href='https://www.hvam.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.1458046, 11.1640485, "red", 15, "<b><font size='4'> Jessheim videregående skole </font></b><br /> <a href='https://www.jessheim.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.887558, 11.579492, "green", 5, "<b><font size='4'> Kjelle videregående skole </font></b><br /> <a href='https://www.kjelle.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.960524, 11.046157, "red", 15, "<b><font size='4'> Lillestrøm videregående skole </font></b><br /> <a href='https://www.lillestrom.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.932039, 10.984200, "red", 15, "<b><font size='4'> Lørenskog videregående skole </font></b><br /> <a href='https://www.lorenskog.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.929574, 10.960204, "red", 15, "<b><font size='4'> Mailand videregående skole </font></b><br /> <a href='https://www.mailand.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.915656, 10.573212, "red", 15, "<b><font size='4'> Nadderud videregående skole </font></b><br /> <a href='https://www.nadderud.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.220029, 11.020353, "red", 15, "<b><font size='4'> Nannestad videregående skole </font></b><br /> <a href='https://www.nannestad.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[60.125009, 11.480279, "blue", 10, "<b><font size='4'> Nes videregående skole </font></b><br /> <a href='https://www.nes.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.867010, 10.485222, "red", 15, "<b><font size='4'> Nesbru videregående skole </font></b><br /> <a href='https://www.nesbru.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.839684, 10.678009, "red", 15, "<b><font size='4'> Nesodden videregående skole </font></b><br /> <a href='https://www.nesodden.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.794399, 10.812894, "blue", 10, "<b><font size='4'> Roald Amundsen videregående skole </font></b><br /> <a href='https://www.roaldamundsen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.909470, 10.508673, "red", 15, "<b><font size='4'> Rosenvilde videregående skole </font></b><br /> <a href='https://www.rosenvilde.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.908354, 10.501052, "red", 15, "<b><font size='4'> Rud videregående skole </font></b><br /> <a href='https://www.rud.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.926222, 11.065375, "red", 15, "<b><font size='4'> Rælingen videregående skole </font></b><br /> <a href='https://www.raelingen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.892643, 10.517550, "red", 15, "<b><font size='4'> Sandvika videregående skole </font></b><br /> <a href='https://www.sandvika.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.965051, 11.040608, "red", 15, "<b><font size='4'> Skedsmo videregående skole </font></b><br /> <a href='https://www.skedsmo.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.717578, 10.849338, "red", 15, "<b><font size='4'> Ski videregående skole </font></b><br /> <a href='https://www.ski.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.909731, 10.615869, "blue", 10, "<b><font size='4'> Stabekk videregående skole </font></b><br /> <a href='https://www.stabekk.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.954477, 11.014693, "red", 15, "<b><font size='4'> Strømmen videregående skole </font></b><br /> <a href='https://www.strommen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.988004, 11.239037, "red", 15, "<b><font size='4'> Sørumsand videregående skole </font></b><br /> <a href='https://www.sorumsand.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.901180, 10.526938, "red", 15, "<b><font size='4'> Valler videregående skole </font></b><br /> <a href='https://www.valler.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.607144, 10.758375, "red", 15, "<b><font size='4'> Vestby videregående skole </font></b><br /> <a href='https://www.vestby.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.663149, 10.797012, "red", 15, "<b><font size='4'> Ås videregående skole </font></b><br /> <a href='https://www.aas.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

//Østfold fylkeskommune
[59.575233, 11.160232, "red", 15, "<b><font size='4'> Askim videregående skole </font></b><br /> <a href='https://askim.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.266167, 11.174278, "red", 15, "<b><font size='4'> Borg videregående skole </font></b><br /> <a href='https://borg.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.223630, 10.925669, "red", 15, "<b><font size='4'> Frederik II videregående skole </font></b><br /> <a href='https://frederikii.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.218924, 10.941861, "red", 15, "<b><font size='4'> Glemmen videregående skole </font></b><br /> <a href='https://glemmen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.275830, 11.028130, "red", 15, "<b><font size='4'> Greåker videregående skole </font></b><br /> <a href='https://greaker.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.125508, 11.394302, "red", 15, "<b><font size='4'> Halden videregående skole </font></b><br /> <a href='https://halden.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.314648, 11.046861, "blue", 10, "<b><font size='4'> Kalnes videregående skole </font></b><br /> <a href='https://kalnes.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.435249, 10.663210, "red", 15, "<b><font size='4'> Kirkeparken videregående skole </font></b><br /> <a href='https://kirkeparken.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.427916, 10.669456, "red", 15, "<b><font size='4'> Malakoff videregående skole </font></b><br /> <a href='https://malakoff.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.556741, 11.327686, "red", 15, "<b><font size='4'> Mysen videregående skole </font></b><br /> <a href='https://mysen.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

[59.280776, 11.104585, "red", 15, "<b><font size='4'> St. Olav videregående skole </font></b><br /> <a href='https://stolav.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"]

]; // end of skolerArray[]

///////////////////////////////////////////////////////////////////////////////////////////////
//define the layer groups (overlays) for groups of schools based on size; add them to map right away
//so that the selection box (legend) will be populated right away
//see tutorial at https://leafletjs.com/examples/layers-control/
///////////////////////////////////////////////////////////////////////////////////////////////
var bigSchoolsGroup = L.layerGroup().addTo(mymap);
var mediumSchoolsGroup = L.layerGroup().addTo(mymap);
var smallSchoolsGroup = L.layerGroup().addTo(mymap);

///////////////////////////////////////////////////////////////////////////////////////////////
//use a for loop to iterate through the array (of schools) and create a circleMarker() object
//for each school using the info from the array + common info in the loop
//add each new circleMarker object to one of the overlay groups depending upon size
///////////////////////////////////////////////////////////////////////////////////////////////
for (var i = 0; i < skolerArray.length; i++) {
skoleCircle = new L.circleMarker([skolerArray[i][0], skolerArray[i][1]], {
	color:"black", //circleMarker border color
	fillColor:skolerArray[i][2], //color of circle from array
	weight: 2, //thickness of the border line
	fillOpacity: 0.7, //saturation of inner color
	radius:skolerArray[i][3] //size of circle, from the array
	}).bindPopup(skolerArray[i][4]); //add the text from the array for each school to a popup

	//check the radius(m) of each object and add it to the appropriate school overlay group
	if (skolerArray[i][3] == 15) {
		skoleCircle.addTo(bigSchoolsGroup);
	} else if (skolerArray[i][3] == 10) {
		skoleCircle.addTo(mediumSchoolsGroup);
	} else {
		skoleCircle.addTo(smallSchoolsGroup);
	}
	
} //end for loop

///////////////////////////////////////////////////////////////////////////////////////////////
//create the legend of each group of schools as overlay list with checkboxes
///////////////////////////////////////////////////////////////////////////////////////////////
var overlayMaps = {
"<span style='color:#444444; font-size:15px; font-weight:bold;'> Store skoler </span>": bigSchoolsGroup,
"<span style='color:#444444; font-size:15px; font-weight:bold;'> Medium skoler </span>": mediumSchoolsGroup,
"<span style='color:#444444; font-size:15px; font-weight:bold;'> Små skoler </span>": smallSchoolsGroup
}

///////////////////////////////////////////////////////////////////////////////////////////////
//add the overlayMaps legend to the map, not collapsed
///////////////////////////////////////////////////////////////////////////////////////////////
L.control.layers(null, overlayMaps, {collapsed: false}).addTo(mymap);
