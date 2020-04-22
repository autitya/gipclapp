 dataobj = function(g,f) {
 result = {}
 totalf = 0
 function form(m){
   d = {}

   var data
var xhttp = new XMLHttpRequest();
//xhttp.withCredentials = true;
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
      r = JSON.parse(xhttp.responseText);
	 t = Object.keys(r).sort()
   
   for (n in t)
   {
	   var total = 0;
	  // console.log(t[n])
	if (t[n] != 'meterid')
	{
	   o = Object.keys(r[t[n]])
	   for (k in o )
	   {total +=(r[t[n]][o[k]])*f;} 
	   
	   
	
   }
   result[t[n]] = parseFloat(total.toFixed(2))
   totalf+=parseFloat(result[t[n]])
   }
  var object = Object.keys(result)
  object.splice( object.indexOf('meterid'), 1 );
  var value = [];
  for (q in object){value.push(result[object[q]])}
  result['value']=value;
  result['object']=object;
  result['total']=totalf;
  var wp = {};
  wp[g+'-'+m] = result;
  postMessage(wp);

  return result;

    }
};
xhttp.open("GET", 'http://192.168.1.218:5005/rest/'+g+'/'+m, false);
xhttp.send();
 }
 return{
 form : form 
 }
 }

function task(){

 ////////////////////////today//////////////////////////////////////
var conventialgipcl = dataobj('convential-gipcl',1).form('today')
var conventialslpp = dataobj('convential-slpp',0.001).form('today')
var windkotadapitha = dataobj('wind-kotadapitha',0.006).form('today')
var windrojmal = dataobj('wind-rojmal',0.001).form('today')
var windnakhtrana = dataobj('wind-nakhtrana',0.001).form('today')
var windkuchhdi = dataobj('wind-kuchhdi',0.001).form('today')
var windcharanka = dataobj('wind-charanka',0.001).form('today')
var solarrooftop = dataobj('solar-rooftop',0.001).form('today')

/////////////////////////////////////////////////week//////////////////////////////////////////////////////////////

var conventialgipclw = dataobj('convential-gipcl',1).form('week')
var conventialslppw = dataobj('convential-slpp',0.001).form('week')
var windkotadapithaw = dataobj('wind-kotadapitha',0.006).form('week')
var windrojmalw = dataobj('wind-rojmal',0.001).form('week')
var windnakhtranaw = dataobj('wind-nakhtrana',0.001).form('week')
var windkuchhdiw = dataobj('wind-kuchhdi',0.001).form('week')
var windcharankaw = dataobj('wind-charanka',0.001).form('week')
var solarrooftopw = dataobj('solar-rooftop',0.001).form('week')

/////////////////////////////////////////////////month//////////////////////////////////////////////////////////////

var conventialgipclm = dataobj('convential-gipcl',1).form('month')
var conventialslppm = dataobj('convential-slpp',0.001).form('month')
var windkotadapitham = dataobj('wind-kotadapitha',0.006).form('month')
var windrojmalm = dataobj('wind-rojmal',0.001).form('month')
var windnakhtranam = dataobj('wind-nakhtrana',0.001).form('month')
var windkuchhdim = dataobj('wind-kuchhdi',0.001).form('month')
var windcharankam = dataobj('wind-charanka',0.001).form('month')
var solarrooftopm = dataobj('solar-rooftop',0.001).form('month')

/////////////////////////////////////////////////year//////////////////////////////////////////////////////////////

var conventialgipcly = dataobj('convential-gipcl',1).form('year')
var conventialslppy = dataobj('convential-slpp',0.001).form('year')
var windkotadapithay = dataobj('wind-kotadapitha',0.006).form('year')
var windrojmaly = dataobj('wind-rojmal',0.001).form('year')
var windnakhtranay = dataobj('wind-nakhtrana',0.001).form('year')
var windkuchhdiy = dataobj('wind-kuchhdi',0.001).form('year')
var windcharankay = dataobj('wind-charanka',0.001).form('year')
var solarrooftopy = dataobj('solar-rooftop',0.001).form('year')

}

task();
//setInterval(finction(){task();},5000)