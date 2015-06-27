/*
        Leaflet.MapissoBuffer, a plugin for buffering drawn items on a Leaflet map.
        (c) 2015, Muhammet Emre Y�ld�r�m
        (c) 2015, mapisso.com and Innotech Software
        https://github.com/mapisso/Leaflet.MapissoIntersect
*/


L.Control.mapissoIntersect = L.Control.extend({
	options: {
	        position: 'topright'
	    },	
	
    onAdd: function () { 
    	    
    	    var intersect_button_div = L.DomUtil.create('div', 'info'); // create a div with a class "intersect"
    	    
    	     
    	     intersect_button_div.innerHTML = '<h4>Mapisso Intersect Service Demo</h4>'+'<input id="intersectbutton" type="button" value="Intersect" onclick="intersect()" style="width:100%; height:35px"/>'+
    	     '<br><br><input id="downloadbutton" type="button" value="Download" onclick="download()" style="width:100%; height:35px"/>'+
		    '<p>Note: Draw two geometries whcih will be intersected. (Geomoetries can be point, polyline, polygon).After that, click the Intersect button. And then, click the download button for downloading intersected geometry.';
    	    
        
        return intersect_button_div;
    	    
    	   
    }  
    
});


function intersect() {
					if (layer1 != undefined && layer2 != undefined) {
						//console.log(layer1.toGeoJSON().geometry);
						//console.log(layer2.toGeoJSON().geometry);

						try {
							var donen = mapissoIntersect.intersectPost(
									layer1.toGeoJSON().geometry, 
									layer2.toGeoJSON().geometry,
									key2);
							L.geoJson(donen.response).addTo(map2);
							id=donen.id;
						} catch (err) {
							alert(err);
						}

					} else {
						alert("Draw two shapes!");
					}
}
function download(){
	if(id!=""&&layer1!=undefined&&layer2!=undefined){
		mapissoIntersect.getDownload(id);
	}
	else{
		alert("First intersect!");
	}
}
