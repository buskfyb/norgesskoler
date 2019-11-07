///////////////////////////////////////////////////////////////////////////////////////////////
//make the Akershus polygon outline
///////////////////////////////////////////////////////////////////////////////////////////////
var polygonAkershus = L.polygon(
[ //begin creating Akershus polygon
	[ //define outer polygon
[58.894019,10.643096],
[58.929474,10.85321],
[58.960645,10.991912],
[58.977635,11.07019],
[59.031383,11.129241],
[59.079401,11.155334],
[59.099154,11.285797],
[59.113257,11.338668],
[59.09069,11.376434],
[59.041274,11.415573],
[58.993202,11.465698],
[58.98542,11.454196],
[58.97268,11.462779],
[58.951084,11.460376],
[58.933018,11.464839],
[58.918132,11.456943],
[58.889407,11.457286],
[58.890471,11.489215],
[58.888874,11.494279],
[58.889229,11.500202],
[58.881955,11.514106]
	]
] //end creating Akershus polygon
).addTo(mymap);

// set the color for the Akershus polygon
polygonAkershus.setStyle(
	{
	//fillColor: "#7D7D88",
	fillColor: "purple",
	color: "black", //border
	fillOpacity: 0.5
	}
	
); //end setStyle() for Akershus polygon

var akershusLayer = L.layerGroup().addTo(mymap);

var overlayFylker = {
"<span style='color:red; font-size:15px; font-weight:bold;'> Akershus </span>": akershusLayer
}


L.control.layers(null, overlayFylker, {collapsed: false}).addTo(mymap);
