/*
        Leaflet.MapissoBuffer, a plugin for buffering drawn items on a Leaflet map.
        (c) 2015, Muhammet Emre Y�ld�r�m
        (c) 2015, mapisso.com and Innotech Software
        https://github.com/mapisso/Leaflet.MapissoIntersect
*/
var mapissoIntersect={};
mapissoIntersect.baseUrl="/InnotechRestful/api/geoservices";

mapissoIntersect.sayHello=function(){
	alert("Innotech Restful Web Services");
};
mapissoIntersect.baseUrl="/InnotechRestful/api/geoservices";

mapissoIntersect.intersectGet=function(geojson1,geojson2,key){
	
	var url=mapissoIntersect.baseUrl+"/intersect/get";
	
	var response=$.ajax({
		type : 'GET',
		url : url,
		data : {
			geojson1:JSON.stringify(geojson1),
			geojson2:JSON.stringify(geojson2),
			key:key
		},
		dataType : 'json',
		 async: !1,
		success : function(response) {
			console.log("success intersect get");
		},
		error : function(XMLHttpRequest, textStatus,
				errorThrown) {
			console.log("some error in intersect get ajax");
		}
	});
	
	return response.responseJSON;
	
};

mapissoIntersect.intersectPost=function(geojson1,geojson2,key){
	
	var url=mapissoIntersect.baseUrl+"/intersect/post";
	
	var response=$.ajax({
		type : 'POST',
		url : url,
		data : {
			geojson1:JSON.stringify(geojson1),
			geojson2:JSON.stringify(geojson2),
			key:key
		},
		dataType : 'json',
		 async: !1,
		success : function(response) {
			console.log("success intersect post");
		},
		error : function(XMLHttpRequest, textStatus,
				errorThrown) {
			console.log("some error in intersect post ajax");
		}
	});
	
	return response.responseJSON;
	
};
mapissoIntersect.getDownload=function(id){
	var url=mapissoIntersect.baseUrl+"/download/get?id="+id;
	
	var iframe = document.createElement("iframe");
	  iframe.setAttribute("src", url);
	  iframe.setAttribute("style", "display: none");
	  document.body.appendChild(iframe);
	 
};
