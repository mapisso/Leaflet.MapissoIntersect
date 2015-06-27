Leaflet.MapissoIntersect
=======================

Simple Leaflet control to intersect analysis on a leaflet map.

Check out the demo here: ...

There are one panel that you can intersect operation and download intersected geometry. For these simple intersect operation you must draw something on map (point, line or polygon etc.). The main files for the control are ````lib/MapissoBuffer/Jquery.MapissoAjaxIntersectRequest.js```` and ````lib/MapissoBuffer/Leaflet.MapissoIntersect.js````. Intersect control uses jQuery when sending buffer requests to the our restful service. jQuery working version added into project jquery folder.

To initialize the controls, add the following lines to the BODY of your HTML document:

    var mIntersect = new L.Control.mapissoIntersect();
    map2.addControl(mIntersect);
				   
    
To intersect two geometries you must define these Draw options. These is a Leaflet plugin Leaflet.draw 0.2.3+ Thanks for this beautiful Leaflet plugin.

    	var drawnItems2 = new L.FeatureGroup();
                map2.addLayer(drawnItems2);
                var layer1, layer2;
                var drawControl2 = new L.Control.Draw({
                    draw : {
                        //polyline : false,
                        circle : false,
                        //marker : false
                    }
                });
                map2.addControl(drawControl2);
                map2.on('draw:created', function(e) {
                    var type = e.layerType, layer = e.layer;

                    if (layer1 != undefined)
                        drawnItems2.removeLayer(layer1);
                    drawnItems2.addLayer(layer);
                    layer1 = layer2;
                    layer2 = layer;

                });
                
    
The controls make use of the Leaflet and jquery libraries. Include the following lines of code in the HEAD of your HTML document:

    <link rel="stylesheet" href="lib/leaflet/leaflet.css" />    
    <script src="lib/leaflet/leaflet.js"></script> 
    <script src="lib/jquery/jquery-1.11.2.min.js"></script> 
    <link rel="stylesheet" href="lib/Leaflet.draw-master/dist/leaflet.draw.css" />
    <script src="lib/Leaflet.draw-master/dist/leaflet.draw.js"></script>  
    <script src="lib/mapissoIntersect/jQueryMapissoAjaxIntersectRequest.js" charset="UTF-8"></script>
    <script src="lib/mapissoIntersect/Leaflet.MapissoIntersect.js" charset="UTF-8"></script>
    
   
