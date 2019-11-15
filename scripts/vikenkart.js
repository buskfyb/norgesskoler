///////////////////////////////////////////////////////////////////////////////////////////////
//define the map (base layer) and set its location via ([latitude, longitude], map zoom)
//smaller number map zoom = zoomed out farther, bigger number map zoom = zoomed in more
///////////////////////////////////////////////////////////////////////////////////////////////
var mymap = L.map('mapid', { minZoom: 7 }).setView([60.104657, 10.260997], 8);   

//access the MapBox maps API, with generated API key/access token from Erin's MapBox account
    L.tileLayer('https://api.mapbox.com/styles/v1/eriukristene/ck2dbrpog182c1co38w0y4sib/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXJpdWtyaXN0ZW5lIiwiYSI6ImNrMWFlZDAzMDBjODQzZHBhd2kxaGJndGoifQ.qtMgz7G3f0Ptwawi3Ws_Ww', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'pk.eyJ1IjoiZXJpdWtyaXN0ZW5lIiwiYSI6ImNrMWFlZDAzMDBjODQzZHBhd2kxaGJndGoifQ.qtMgz7G3f0Ptwawi3Ws_Ww'
}).addTo(mymap);

///////////////////////////////////////////////////////////////////////////////////////////////
//make the Viken polygon outline
///////////////////////////////////////////////////////////////////////////////////////////////
var polygonViken = L.polygon(
[ //begin creating Viken polygon
	[ //define outer polygon
//begin Østfold
[59.79,11.925], // A and Ø intersect, outer of Ø begins
[59.77,11.935],
[59.745,11.925],
[59.74,11.935],
[59.7,11.935],
[59.7,11.945],
[59.695,11.94],
[59.695,11.89],
[59.65,11.855],
[59.645,11.78],
[59.625,11.72],
[59.61,11.7],
[59.59,11.69],
[59.51,11.73],
[59.48,11.755],
[59.43,11.76],
[59.415,11.775],
[59.385,11.78],
[59.335,11.82],
[59.24,11.83],
[59.23,11.805],
[59.21,11.785],
[59.18,11.775],
[59.135,11.78],
[59.12,11.765],
[59.11,11.775],
[59.085,11.775],
[59.075,11.755],
[59.06,11.74],
[59.05,11.74],
[59.035,11.71],
[59,11.7],
[58.99,11.685],
[58.955,11.69],
[58.945,11.675],
[58.935,11.675],
[58.935,11.66],
[58.905,11.65],
[58.91,11.63],
[58.89,11.595],
[58.895,11.585],
[58.89,11.565],
[58.9,11.56],
[58.9,11.55],
[58.875,11.53],
[58.89,11.5],
[58.89,11.455],
[58.915,11.455],
[58.935,11.465],
[58.985,11.455],
[58.99,11.465],
[59.04,11.415],
[59.1,11.37],
[59.115,11.34],
[59.1,11.29],
[59.08,11.155],
[59.015,11.115],
[58.975,11.065],
[58.94,10.92],
[58.89,10.64],
[58.76,10.595],
[58.945,10.625],
[59.045,10.675],
[59.11,10.625],
[59.135,10.65],
[59.19,10.655],
[59.27,10.59],
[59.34,10.58],
[59.355,10.595],
[59.375,10.595],
[59.395,10.585],
[59.41,10.545],
[59.435,10.535],
[59.455,10.545], // nearest corner of Ø & B

//begin Buskerud
[59.455,10.545], // corner of O and B
[59.48,10.455],
[59.515,10.395],
[59.565,10.42],
[59.585,10.41],
[59.6,10.425],
[59.61,10.41],
[59.62,10.41],
[59.625,10.425],
[59.645,10.41],
[59.665,10.41],
[59.7,10.365],
[59.7,10.325],
[59.685,10.32],
[59.685,10.31],
[59.67,10.31],
[59.675,10.265],
[59.675,10.245],
[59.665,10.24],
[59.67,10.115],
[59.645,10.09],
[59.64,10.045],
[59.64,10.035],
[59.66,10.02],
[59.665,10],
[59.655,10],
[59.635,9.975],
[59.62,9.98],
[59.61,9.94],
[59.585,9.94],
[59.58,9.92],
[59.57,9.945],
[59.53,9.985],
[59.515,10.025],
[59.485,10.055],
[59.475,10.06],
[59.47,10.055],
[59.46,10.02],
[59.46,10],
[59.47,9.99],
[59.47,9.945],
[59.455,9.93],
[59.46,9.85],
[59.47,9.815],
[59.455,9.775],
[59.46,9.76],
[59.41,9.78],
[59.41,9.66],
[59.425,9.625],
[59.44,9.62],
[59.45,9.585],
[59.455,9.58],
[59.47,9.585],
[59.47,9.575],
[59.485,9.56],
[59.48,9.47],
[59.495,9.47],
[59.54,9.515],
[59.555,9.47],
[59.575,9.465],
[59.61,9.435],
[59.64,9.425],
[59.66,9.405],
[59.685,9.405],
[59.695,9.335],
[59.715,9.355],
[59.72,9.34],
[59.73,9.34],
[59.76,9.345],
[59.78,9.365],
[59.785,9.36],
[59.805,9.295],
[59.805,9.265],
[59.815,9.255],
[59.81,9.235],
[59.825,9.185],
[59.84,9.19],
[59.875,9.18],
[59.895,9.19],
[59.9,9.175],
[59.92,9.19],
[59.93,9.18],
[59.94,9.135],
[59.95,9.11],
[59.96,9.105],
[59.96,9.06],
[59.975,9.045],
[59.975,9.03],
[59.985,9.025],
[59.98,8.99],
[60.005,9],
[60.01,8.99],
[60.07,8.98],
[60.09,8.955],
[60.1,8.96],
[60.1,8.94],
[60.14,8.86],
[60.155,8.8],
[60.175,8.76],
[60.185,8.725],
[60.17,8.66],
[60.175,8.65],
[60.17,8.455],
[60.18,8.405],
[60.175,8.285],
[60.19,8.21],
[60.185,8.165],
[60.175,8.185],
[60.175,8.165],
[60.185,8.16],
[60.185,8.1],
[60.17,8.08],
[60.105,7.815],
[60.125,7.645],
[60.1,7.49],
[60.175,7.585],
[60.245,7.61],
[60.295,7.675],
[60.415,7.69],
[60.52,7.73],
[60.535,7.675],
[60.57,7.63],
[60.595,7.62],
[60.635,7.635],
[60.655,7.545],
[60.66,7.44],
[60.675,7.47],
[60.745,7.615],
[60.73,7.685],
[60.74,7.705],
[60.76,7.725],
[60.79,7.72],
[60.795,7.705],
[60.895,7.805],
[60.92,7.85],
[60.925,7.88],
[60.895,7.935],
[60.895,8.04],
[60.98,8.15],
[60.98,8.17],
[60.97,8.18],
[60.97,8.225],
[60.995,8.235],
[60.995,8.225],
[61.005,8.22],
[61.01,8.26],
[61.035,8.285],
[61.055,8.215],
[61.075,8.25],
[61.09,8.31],
[61.055,8.355],
[61.03,8.435],
[61.02,8.44],
[61.02,8.51],
[60.985,8.605],
[60.96,8.635],
[60.95,8.62],
[60.945,8.645],
[60.935,8.655],
[60.9,8.81],
[60.895,8.895],
[60.885,8.895],
[60.88,8.91],
[60.865,8.92],
[60.835,9.04],
[60.82,9.07],
[60.815,9.12],
[60.795,9.185],
[60.77,9.215],
[60.76,9.295],
[60.73,9.33],
[60.68,9.32],
[60.665,9.355],
[60.65,9.365],
[60.635,9.36],
[60.625,9.37],
[60.615,9.39],
[60.615,9.42],
[60.6,9.435],
[60.585,9.42],
[60.585,9.41],
[60.55,9.415],
[60.545,9.45],
[60.53,9.475],
[60.54,9.61],
[60.515,9.62],
[60.505,9.62],
[60.5,9.61],
[60.455,9.79],
[60.455,9.83],
[60.495,9.825],
[60.51,9.81],
[60.56,9.81],
[60.585,9.835],
[60.585,9.845],
[60.57,9.85],
[60.57,9.86],
[60.585,9.88],
[60.605,9.95],
[60.615,9.95],
[60.615,9.925],
[60.635,9.905],
[60.64,9.96],
[60.635,10.03],
[60.605,10.07],
[60.57,10.085],
[60.56,10.105],
[60.54,10.115],
[60.525,10.155],
[60.5,10.16],
[60.485,10.175],
[60.455,10.175],
[60.375,10.2],
[60.355,10.225],
[60.345,10.225],
[60.335,10.245],
[60.325,10.245],
[60.29,10.28],
[60.29,10.29],
[60.275,10.3],
[60.265,10.32],
[60.255,10.31],
[60.24,10.315],
[60.24,10.325],
[60.225,10.335],
[60.215,10.355],
[60.225,10.375],
[60.21,10.42],
[60.19,10.45],
[60.185,10.48],
[60.175,10.485],
[60.165,10.56],
[60.15,10.575],
[60.145,10.595],
[60.13,10.6], // end of outer B

//start outer Akershus
//to connect B and A
[60.135,10.68], // outer of A
[60.15,10.675],
[60.15,10.71],
[60.16,10.725],
[60.15,10.73],
[60.15,10.77],
[60.165,10.77],
[60.175,10.78],
[60.215,10.77],
[60.22,10.78],
[60.23,10.78],
[60.24,10.8],
[60.265,10.81],
[60.32,10.87],
[60.32,10.885],
[60.35,10.935],
[60.38,10.9],
[60.395,10.905],
[60.425,10.82],
[60.435,10.67],
[60.455,10.71],
[60.49,10.69],
[60.495,10.71],
[60.525,10.715],
[60.49,10.77],
[60.47,10.925],
[60.48,10.955],
[60.49,10.945],
[60.5,10.975],
[60.5,11.005],
[60.52,11.065],
[60.515,11.095],
[60.52,11.09],
[60.52,11.1],
[60.55,11.1],
[60.56,11.105],
[60.56,11.115],
[60.57,11.11],
[60.59,11.12],
[60.605,11.155],
[60.565,11.215],
[60.54,11.22],
[60.505,11.21],
[60.5,11.245],
[60.465,11.3],
[60.46,11.34],
[60.41,11.385],
[60.375,11.4],
[60.37,11.42],
[60.35,11.42],
[60.33,11.455],
[60.325,11.485],
[60.285,11.54],
[60.27,11.6],
[60.25,11.6],
[60.24,11.58],
[60.205,11.585],
[60.2,11.575],
[60.19,11.575],
[60.185,11.56],
[60.175,11.56],
[60.175,11.585],
[60.155,11.595],
[60.145,11.625],
[60.135,11.625],
[60.12,11.655],
[60.115,11.69],
[60.095,11.73],
[60.09,11.78],
[60.07,11.79],
[60.05,11.785],
[60.055,11.82],
[60.045,11.825],
[60.025,11.82],
[60.01,11.84],
[59.995,11.835],
[59.995,11.815],
[59.98,11.81],
[59.97,11.795],
[59.955,11.795],
[59.935,11.82],
[59.92,11.805],
[59.905,11.81],
[59.895,11.805],
[59.89,11.82],
[59.87,11.825],
[59.87,11.835],
[59.84,11.835],
[59.84,11.845],
[59.83,11.85],
[59.825,11.89],
[59.79,11.925]  // A and Ø intersect, outer of A begins
	], //close outer polygon
	[  //define inner polygon to take out Oslo area
[60.13,10.6], // end of outer B
[60.12,10.575],
[60.11,10.575],
[60.1,10.59],
[60.075,10.595],
[60.075,10.575],
[60.02,10.495],
//[60.02,10.485],
//60.03,10.48], // where A Oslo B intersect on the left
//start Oslo from inside of A
[60.01,10.495], // end of A line on bottom
[60,10.515],
[60,10.545],
[59.985,10.585],
[59.975,10.59],
[59.98,10.595],
[59.975,10.615],
[59.955,10.635],
[59.93,10.635],
[59.93,10.625],
[59.92,10.625],
[59.91,10.65],
[59.885,10.66],
[59.875,10.69],
[59.875,10.73],
[59.845,10.74],
[59.825,10.77],
[59.825,10.815],
[59.81,10.85],
[59.81,10.88],
[59.825,10.895],
[59.83,10.915],
[59.825,10.93],
[59.835,10.935],
[59.87,10.905],
[59.92,10.915],
[59.94,10.935],
[59.94,10.945],
[59.955,10.945],
[59.965,10.935],
[59.97,10.94],
[59.985,10.925],
[59.98,10.89],
[60,10.855],
[59.995,10.84],
[60.025,10.83],
[60.025,10.81],
[60.04,10.82],
[60.045,10.815],
[60.065,10.82],
[60.065,10.79],
[60.1,10.755],
[60.115,10.77],
[60.115,10.755],
[60.125,10.75],
[60.12,10.705],
[60.135,10.68] // outer of A, to connect to B, where A, B, and Oslo intersect, on top

	] //close inner Oslo area polygon
] //end creating Viken polygon
).addTo(mymap);

// set the color for the Viken polygon
polygonViken.setStyle(
	{
	fillColor: "#7D7D88",
	//fillColor: "green",
	color: "black", //border
	fillOpacity: 0.5
	}
	
); //end setStyle() for Viken polygon

//end vikenkart.js
