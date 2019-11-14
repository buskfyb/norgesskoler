///////////////////////////////////////////////////////////////////////////////////////////////
//create an array containing the information for each folkebibliotek in Viken
//[lat, long, "color of circle", radius in meters, "text for bibliotek"]
//used to populate the circleMarker() later in the code
///////////////////////////////////////////////////////////////////////////////////////////////

var folkebibliotekArray = [

[59.894920, 9.931280, "red", 15, "<b> Buskerud folkebibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.buskerud.vgs.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"]

//Buskerud
//Drammensbiblioteket 59.743737, 10.194074 https://www.drammensbiblioteket.no/web/arena
//Flesberg 59.8370, 9.5794 https://flesbergbibliotek.no/
//Ål 60.629733, 8.561588 https://hallingdalsbiblioteka.no/al-bibliotek/
//Flå 60.429722, 9.464640 https://hallingdalsbiblioteka.no/fla-bibliotek/
//Gol 60.7033, 8.9432 https://hallingdalsbiblioteka.no/golbibliotek/
//Hemsedal 60.8624, 8.5613 https://hallingdalsbiblioteka.no/hemsedalbibliotek/
//Hol 60.535918, 8.221352 https://hallingdalsbiblioteka.no/hol-folkebibliotek/
//Hole 60.0803, 10.2812 http://holebibliotek.no/
//Hurum 59.540998, 10.556260 http://www.hurum.kommune.no/innholdssider/naring-kultur-og-frivillig/bibliotek/
//Kongsberg 559.664950, 9.644326 https://kongsbergbibliotek.no/
//Lier 59.7872, 10.2446 https://lierbib.no/
//Nedre Eiker 59.7500, 10.0156 https://www.nedre-eiker.kommune.no/tjenester/kultur-idrett-friluftsliv/bibliotek/
//Nes 60.569261, 9.102371 https://hallingdalsbiblioteka.no/nes-folkebibliotek/
//Nore og Uvdal 60.269382, 8.944922 https://noreoguvdalbibliotek.no/
//Øvre Eiker 59.7711, 9.9085 https://oeikbib.no/
//Ringerike 60.1670, 10.2573 https://ringerikebibliotek.no/
//Rollag 59.9843, 9.2944 https://rollagbibliotek.no/
//Røyken 59.781668, 10.497154 https://roykenbibliotek.no/
//Midt-Buskerud 59.973432, 10.004611 https://midtfylkebiblioteket.no/


//Akershus
//Asker 59.8359, 10.4330 https://askerbibliotek.no/
//Aurskog-Høland 59.8841, 11.5684 https://www.bibliotekrom.no/aurskog-holand/
//Bærum 59.9179, 10.5847 https://barum.folkebibl.no/avdelinger/bekkestua/
//Heggedal 59.786447, 10.436223 https://askerbibliotek.no/heggedal/
//Enebakk 59.7644, 11.1448 https://www.enebakk.kommune.no/?id=5755119
//Eiksmarka 59.9467, 10.6192 https://barum.folkebibl.no/avdelinger/eiksmarka/
//Høvik 59.8990, 10.5775 https://barum.folkebibl.no/avdelinger/hovik/
//Eidsvoll 60.3291, 11.2599 https://www.eidsvoll.kommune.no/lokasjoner/eidsvoll-bibliotek/
//Gjerdrum 60.072819, 11.035642 https://www.gjerdrum.kommune.no/virksomheter/bibliotek/
//Rykkinn 59.9241, 10.4850 https://barum.folkebibl.no/avdelinger/rykkinn/
//Nannestad 60.2192, 11.0150 https://www.nannestad.kommune.no/biblioteket/
//Sandvika 59.892267, 10.525218 https://barum.folkebibl.no/avdelinger/sandvika/
//Frogn 59.6635, 10.6289 https://frogn.folkebibl.no/
//Nittedal 60.044085, 10.880208 https://www.bibliotekrom.no/nittedal/
//Fet 59.9245, 11.1561 https://www.bibliotekrom.no/fet/
//Lørenskog 59.927930, 10.962073 https://www.bibliotekrom.no/lorenskog/
//Ski 59.7184, 10.8381 https://www.skibibliotek.no/
//Hurdal 60.4332, 11.0690 https://www.hurdal.kommune.no/virksomheter/bibliotek/
//Nesodden 59.855755, 10.662314 https://nesoddenbibliotek.no/
//Nes 60.122067, 11.468186 https://www.nes-ak.kommune.no/virksomheter/bibliotek/
//Vestby 59.601444, 10.748332 https://www.vestby.kommune.no/biblioteket.80637.no.html 
//Skedsmo 59.948312, 11.009911 https://www.bibliotekrom.no/skedsmo/
//Son 59.523651, 10.685429 https://www.vestby.kommune.no/biblioteket.80637.no.html
//Oppegård 59.810027, 10.801229 https://www.oppegard.folkebibl.no/
//Ullensaker 60.143284, 11.174980 https://www.ullensaker.kommune.no/bibliotek
//Sørum 59.986720, 11.246607 https://www.bibliotekrom.no/sorum/
//Ås 59.664136, 10.791143 http://as.folkebibl.no/
//Kløfta 60.076176, 11.137700 https://www.ullensaker.kommune.no/bibliotek
	
//Østfold
//Aremark 59.226074, 11.695858 http://aremarkbibliotek.no/
//Askim 59.584508, 11.161070 https://www.askim.kommune.no/velkommen-til-askim-bibliotek.5252294-215587.html
//Eidsberg 59.552807, 11.330991 https://eidsberg.folkebibl.no/
//Fredrikstad 59.206367, 10.941629 https://www.fredrikstadbibliotek.no/
//Halden 59.123126, 11.384848 https://haldenbibliotek.no/
//Hobøl 59.658881, 11.002194 https://www.hobol.kommune.no/hoboel-bibliotek.364820.no.html
//Hvaler 59.024994, 11.036649 https://www.hvaler.kommune.no/innhold/kultur/bibliotek/
//Marker 59.479535, 11.659163 https://www.marker.kommune.no/kontakt-og-informasjon.378611.no.html
//Moss 59.438341, 10.667644 https://www.mossbibliotek.no/
//Rakkestad 59.428155, 11.343540 https://www.rakkestad.kommune.no/velkommen-til-rakkestad-bibliotek.4886487-487395.html
//Rygge 59.406673, 10.691427 https://www.rygge.kommune.no/kultur-og-fritid/rygge-bibliotek/
//Rømskog 59.749544, 11.810336 https://www.romskog.kommune.no/bibliotek.237812.no.html
//Råde 59.352014, 10.871119 https://radebibliotek.no/
//Sarpsborg 59.281809, 11.107978 https://www.sarpsborg.com/bibliotek#/
//Skiptvet 59.470588, 11.170891 https://www.skiptvet.kommune.no/bibliotek.237532.no.html
//Spydeberg 59.620218, 11.080773 https://www.spydeberg.kommune.no/om-biblioteket.379454.no.html
//Trøgstad 59.641419, 11.316533 https://www.trogstad.kommune.no/bibliotek.243858.no.html
//Våler 60.673390, 11.830123 http://www.valer.folkebibl.no/



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
	//var bibliotekSquare = L.rectangle(bibliotekCircle.getBounds());
	//bibliotekSquare.addTo(folkebibliotekGroup);
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
