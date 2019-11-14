///////////////////////////////////////////////////////////////////////////////////////////////
//create an array containing the information for each folkebibliotek in Viken
//[lat, long, "color of circle", radius in meters, "text for bibliotek"]
//used to populate the circleMarker() later in the code
///////////////////////////////////////////////////////////////////////////////////////////////

var folkebibliotekArray = [
//Buskerud
//Drammensbiblioteket 59.743737, 10.194074 https://www.drammensbiblioteket.no/web/arena
[59.743737, 10.194074, "red", 15, "<b> Drammensbiblioteket </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.drammensbiblioteket.no/web/arena' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Flesberg 59.8370, 9.5794 https://flesbergbibliotek.no/
[59.8370, 9.5794, "red", 15, "<b> Flesberg bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://flesbergbibliotek.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Ål 60.629733, 8.561588 https://hallingdalsbiblioteka.no/al-bibliotek/
[60.629733, 8.561588, "red", 15, "<b> Ål bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://hallingdalsbiblioteka.no/al-bibliotek/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Flå 60.429722, 9.464640 https://hallingdalsbiblioteka.no/fla-bibliotek/
[60.429722, 9.464640, "red", 15, "<b> Flå bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://hallingdalsbiblioteka.no/fla-bibliotek/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Gol 60.7033, 8.9432 https://hallingdalsbiblioteka.no/golbibliotek/
[60.7033, 8.9432, "red", 15, "<b> Gol bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://hallingdalsbiblioteka.no/golbibliotek/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Hemsedal 60.8624, 8.5613 https://hallingdalsbiblioteka.no/hemsedalbibliotek/
[60.8624, 8.5613, "red", 15, "<b> Hemsedal bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://hallingdalsbiblioteka.no/hemsedalbibliotek/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Hol 60.535918, 8.221352 https://hallingdalsbiblioteka.no/hol-folkebibliotek/
[60.535918, 8.221352, "red", 15, "<b> Hol bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://hallingdalsbiblioteka.no/hol-folkebibliotek/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Hole 60.0803, 10.2812 http://holebibliotek.no/
[60.0803, 10.2812, "red", 15, "<b> Hole bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://holebibliotek.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Hurum 59.540998, 10.556260 http://www.hurum.kommune.no/innholdssider/naring-kultur-og-frivillig/bibliotek/
[59.540998, 10.556260, "red", 15, "<b> Hurum bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='http://www.hurum.kommune.no/innholdssider/naring-kultur-og-frivillig/bibliotek/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Kongsberg 59.664950, 9.644326 https://kongsbergbibliotek.no/
[59.664950, 9.644326, "red", 15, "<b> Kongsberg bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://kongsbergbibliotek.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

//Lier 59.7872, 10.2446 https://lierbib.no/
[59.7872, 10.2446, "red", 15, "<b> Lier bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://lierbib.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Nedre Eiker 59.7500, 10.0156 https://www.nedre-eiker.kommune.no/tjenester/kultur-idrett-friluftsliv/bibliotek/
[59.7500, 10.0156, "red", 15, "<b> Nedre Eiker bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.nedre-eiker.kommune.no/tjenester/kultur-idrett-friluftsliv/bibliotek/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Nes 60.569261, 9.102371 https://hallingdalsbiblioteka.no/nes-folkebibliotek/
[60.569261, 9.102371, "red", 15, "<b> Nes bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://hallingdalsbiblioteka.no/nes-folkebibliotek/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Nore og Uvdal 60.269382, 8.944922 https://noreoguvdalbibliotek.no/
[60.269382, 8.944922, "red", 15, "<b> Nore og Uvdal bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://noreoguvdalbibliotek.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Øvre Eiker 59.7711, 9.9085 https://oeikbib.no/
[59.7711, 9.9085, "red", 15, "<b> Øvre Eiker bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://oeikbib.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Ringerike 60.1670, 10.2573 https://ringerikebibliotek.no/
[60.1670, 10.2573, "red", 15, "<b> Ringerike bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://ringerikebibliotek.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Rollag 59.9843, 9.2944 https://rollagbibliotek.no/
[59.9843, 9.2944, "red", 15, "<b> Rollag bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://rollagbibliotek.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Røyken 59.781668, 10.497154 https://roykenbibliotek.no/
[59.781668, 10.497154, "red", 15, "<b> Røyken bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://roykenbibliotek.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Midt-Buskerud 59.973432, 10.004611 https://midtfylkebiblioteket.no/
[59.973432, 10.004611, "red", 15, "<b> Midt-Buskerud bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://midtfylkebiblioteket.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],

//Akershus
//Asker 59.8359, 10.4330 https://askerbibliotek.no/
[59.8359, 10.4330, "red", 15, "<b> Asker bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://askerbibliotek.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Aurskog-Høland 59.8841, 11.5684 https://www.bibliotekrom.no/aurskog-holand/
[59.8841, 11.5684, "red", 15, "<b> Aurskog-Høland bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.bibliotekrom.no/aurskog-holand/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Bærum 59.9179, 10.5847 https://barum.folkebibl.no/avdelinger/bekkestua/
[59.9179, 10.5847, "red", 15, "<b> Bærum bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://barum.folkebibl.no/avdelinger/bekkestua/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Heggedal 59.786447, 10.436223 https://askerbibliotek.no/heggedal/
[59.786447, 10.436223, "red", 15, "<b> Heggedal bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://askerbibliotek.no/heggedal/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Enebakk 59.7644, 11.1448 https://www.enebakk.kommune.no/?id=5755119
[59.7644, 11.1448, "red", 15, "<b> Enebakk bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.enebakk.kommune.no/?id=5755119' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Eiksmarka 59.9467, 10.6192 https://barum.folkebibl.no/avdelinger/eiksmarka/
[59.9467, 10.6192, "red", 15, "<b> Eiksmarka bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://barum.folkebibl.no/avdelinger/eiksmarka/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Høvik 59.8990, 10.5775 https://barum.folkebibl.no/avdelinger/hovik/
[59.8990, 10.5775, "red", 15, "<b> Høvik bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://barum.folkebibl.no/avdelinger/hovik/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Eidsvoll 60.3291, 11.2599 https://www.eidsvoll.kommune.no/lokasjoner/eidsvoll-bibliotek/
[60.3291, 11.2599, "red", 15, "<b> Eidsvoll bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.eidsvoll.kommune.no/lokasjoner/eidsvoll-bibliotek/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Gjerdrum 60.072819, 11.035642 https://www.gjerdrum.kommune.no/virksomheter/bibliotek/
[60.072819, 11.035642, "red", 15, "<b> Gjerdrum bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.gjerdrum.kommune.no/virksomheter/bibliotek/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Rykkinn 59.9241, 10.4850 https://barum.folkebibl.no/avdelinger/rykkinn/
[59.9241, 10.4850, "red", 15, "<b> Rykkinn bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://barum.folkebibl.no/avdelinger/rykkinn/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Nannestad 60.2192, 11.0150 https://www.nannestad.kommune.no/biblioteket/
[60.2192, 11.0150, "red", 15, "<b> Nannestad bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.nannestad.kommune.no/biblioteket/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Sandvika 59.892267, 10.525218 https://barum.folkebibl.no/avdelinger/sandvika/
[59.892267, 10.525218, "red", 15, "<b> Sandvika bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://barum.folkebibl.no/avdelinger/sandvika/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Frogn 59.6635, 10.6289 https://frogn.folkebibl.no/
[59.6635, 10.6289, "red", 15, "<b> Frogn bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://frogn.folkebibl.no' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Nittedal 60.044085, 10.880208 https://www.bibliotekrom.no/nittedal/
[60.044085, 10.880208, "red", 15, "<b> Nittedal bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.bibliotekrom.no/nittedal/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Fet 59.9245, 11.1561 https://www.bibliotekrom.no/fet/
[59.9245, 11.1561, "red", 15, "<b> Fet bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.bibliotekrom.no/fet/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Lørenskog 59.927930, 10.962073 https://www.bibliotekrom.no/lorenskog/
[59.927930, 10.962073, "red", 15, "<b> Lørenskog bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.bibliotekrom.no/lorenskog/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Ski 59.7184, 10.8381 https://www.skibibliotek.no/
[59.7184, 10.8381, "red", 15, "<b> Ski bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.skibibliotek.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Hurdal 60.4332, 11.0690 https://www.hurdal.kommune.no/virksomheter/bibliotek/
[60.4332, 11.0690, "red", 15, "<b> Hurdal bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.hurdal.kommune.no/virksomheter/bibliotek/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Nesodden 59.855755, 10.662314 https://nesoddenbibliotek.no/
[59.855755, 10.662314, "red", 15, "<b> Nesodden bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://nesoddenbibliotek.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Nes 60.122067, 11.468186 https://www.nes-ak.kommune.no/virksomheter/bibliotek/
[60.122067, 11.468186, "red", 15, "<b> Nes bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.nes-ak.kommune.no/virksomheter/bibliotek/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Vestby 59.601444, 10.748332 https://www.vestby.kommune.no/biblioteket.80637.no.html
[59.601444, 10.748332, "red", 15, "<b> Vestby bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.vestby.kommune.no/biblioteket.80637.no.html' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Skedsmo 59.948312, 11.009911 https://www.bibliotekrom.no/skedsmo/
[59.601444, 10.748332, "red", 15, "<b> Vestby bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.vestby.kommune.no/biblioteket.80637.no.html' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Son 59.523651, 10.685429 https://www.vestby.kommune.no/biblioteket.80637.no.html
[59.601444, 10.748332, "red", 15, "<b> Vestby bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.vestby.kommune.no/biblioteket.80637.no.html' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Oppegård 59.810027, 10.801229 https://www.oppegard.folkebibl.no/
[59.810027, 10.801229, "red", 15, "<b> Oppegård bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.oppegard.folkebibl.no/' target='_newtab'>Klikk her for å besøke nettstedet</a>"],
	
//Ullensaker 60.143284, 11.174980 https://www.ullensaker.kommune.no/bibliotek
[60.143284, 11.174980, "red", 15, "<b> Ullensaker bibliotek </b><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /><br /> <a href='https://www.ullensaker.kommune.no/bibliotek' target='_newtab'>Klikk her for å besøke nettstedet</a>"]
	
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
	fillColor:"yellow", //color of circle from array
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
