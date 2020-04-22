function dashtab(a,d){
var o = document.getElementsByClassName('g-container');
for (n=0;n<(o.length);n++){
		//console.log(o[n])
		o[n].style.display='none';
		}
document.getElementById(d).style.display='block';
var ao = document.getElementsByClassName('active tabs');
for (n=0;n<(ao.length);n++){
		ao[n].className = 'tabs'
		}
a.className = 'active tabs';
}
setTimeout(function(){
l=document.getElementById('loader');m=document.getElementById('main');l.style.display='none';m.style.filter='blur(0px)';

},2000)



var SLPP = ['13','14','15','18']
var SLPP1 = ['13','14']
var SLPP2 = ['15','18']
var GIPCL1 = ['42','43','44','45']
var GIPCL2 = ['48','49']
var SLPP1OBJ,SLPP1VAL,SLPP2OBJ,SLPP2VAL,GIPCL1OBJ,GIPCL1VAL,GIPCL2OBJ,GIPCL2VAL = [];
var conventialGen = {}
var kotadapithaGen = {}
var rojmalGen = {} 
var kuchhdiGen = {}
function arrsum(a,b){
      var c = [];
      for (var i = 0; i < Math.max(a.length, b.length); i++) {
        c.push(parseFloat(((a[i] || 0) + (b[i] || 0)).toFixed(2)));
      }
      return c;
}

function btwnlst(t,m){
var c = new Date();
var d = new Date(t['object'][t['object'].length-1]);
console.log(t)
console.log(d)
var r = new Date(c.getTime() - 1000 * (60*m));
var rt;
if(d>r){rt =t['value'][(t['value'].length)-1];}else{rt = 0;}
return (rt)
}

 
////////////////////////today//////////////////////////////////////
var conventialgipcl = JSON.parse(sessionStorage.getItem('convential-gipcl-today'))['convential-gipcl-today'] 
var conventialslpp = JSON.parse(sessionStorage.getItem('convential-slpp-today'))['convential-slpp-today']
var windkotadapitha = JSON.parse(sessionStorage.getItem('wind-kotadapitha-today'))['wind-kotadapitha-today']
var windrojmal = JSON.parse(sessionStorage.getItem('wind-rojmal-today'))['wind-rojmal-today']
var windnakhtrana = JSON.parse(sessionStorage.getItem('wind-nakhtrana-today'))['wind-nakhtrana-today']
var windkuchhdi = JSON.parse(sessionStorage.getItem('wind-kuchhdi-today'))['wind-kuchhdi-today']
var windcharanka = JSON.parse(sessionStorage.getItem('wind-charanka-today'))['wind-charanka-today']
var solarrooftop = JSON.parse(sessionStorage.getItem('solar-rooftop-today'))['solar-rooftop-today']

var convential = arrsum(conventialgipcl['value'],conventialslpp['value']);
var wind = arrsum(windkotadapitha['value'],windrojmal['value'])
console.log(conventialgipcl['value'])
var wind = arrsum(wind,windnakhtrana['value'])
var wind = arrsum(wind,windkuchhdi['value'])
var wind = arrsum(wind,windcharanka['value'])

var conventialTC =  btwnlst(conventialgipcl,70)+btwnlst(conventialslpp,70);
console.log(conventialgipcl);
var windTC = btwnlst(windkotadapitha,70)+btwnlst(windnakhtrana,70)+btwnlst(windkuchhdi,70)+btwnlst(windcharanka,70)+btwnlst(windrojmal,70)
var solar = 0
var solarRTC = btwnlst(solarrooftop,70)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////week//////////////////////////////////////////////////////////////

var conventialgipclw = JSON.parse(sessionStorage.getItem('convential-gipcl-week'))['convential-gipcl-week'] 
var conventialslppw = JSON.parse(sessionStorage.getItem('convential-slpp-week'))['convential-slpp-week']
var windkotadapithaw = JSON.parse(sessionStorage.getItem('wind-kotadapitha-week'))['wind-kotadapitha-week']
var windrojmalw = JSON.parse(sessionStorage.getItem('wind-rojmal-week'))['wind-rojmal-week']
var windnakhtranaw = JSON.parse(sessionStorage.getItem('wind-nakhtrana-week'))['wind-nakhtrana-week']
var windkuchhdiw = JSON.parse(sessionStorage.getItem('wind-kuchhdi-week'))['wind-kuchhdi-week']
var windcharankaw = JSON.parse(sessionStorage.getItem('wind-charanka-week'))['wind-charanka-week']
var solarrooftopw = JSON.parse(sessionStorage.getItem('solar-rooftop-week'))['solar-rooftop-week']

var conventialw = arrsum(conventialgipclw['value'],conventialslppw['value']);
var windw = arrsum(windkotadapithaw['value'],windrojmalw['value'])
var windw = arrsum(windw,windnakhtranaw['value'])
var windw = arrsum(windw,windkuchhdiw['value'])
var windw = arrsum(windw,windcharankaw['value'])

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////month//////////////////////////////////////////////////////////////

var conventialgipclm = JSON.parse(sessionStorage.getItem('convential-gipcl-month'))['convential-gipcl-month'] 
var conventialslppm = JSON.parse(sessionStorage.getItem('convential-slpp-month'))['convential-slpp-month']
var windkotadapitham = JSON.parse(sessionStorage.getItem('wind-kotadapitha-month'))['wind-kotadapitha-month']
var windrojmalm = JSON.parse(sessionStorage.getItem('wind-rojmal-month'))['wind-rojmal-month']
var windnakhtranam = JSON.parse(sessionStorage.getItem('wind-nakhtrana-month'))['wind-nakhtrana-month']
var windkuchhdim = JSON.parse(sessionStorage.getItem('wind-kuchhdi-month'))['wind-kuchhdi-month']
var windcharankam = JSON.parse(sessionStorage.getItem('wind-charanka-month'))['wind-charanka-month']
var solarrooftopm = JSON.parse(sessionStorage.getItem('solar-rooftop-month'))['solar-rooftop-month']

var conventialm = arrsum(conventialgipclm['value'],conventialslppm['value']);
var windm = arrsum(windkotadapitham['value'],windrojmalm['value'])
var windm = arrsum(windm,windnakhtranam['value'])
var windm = arrsum(windm,windkuchhdim['value'])
var windm = arrsum(windm,windcharankam['value'])

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////year//////////////////////////////////////////////////////////////

var conventialgipcly = JSON.parse(sessionStorage.getItem('convential-gipcl-year'))['convential-gipcl-year'] 
var conventialslppy = JSON.parse(sessionStorage.getItem('convential-slpp-year'))['convential-slpp-year']
var windkotadapithay = JSON.parse(sessionStorage.getItem('wind-kotadapitha-year'))['wind-kotadapitha-year']
var windrojmaly = JSON.parse(sessionStorage.getItem('wind-rojmal-year'))['wind-rojmal-year']
var windnakhtranay = JSON.parse(sessionStorage.getItem('wind-nakhtrana-year'))['wind-nakhtrana-year']
var windkuchhdiy = JSON.parse(sessionStorage.getItem('wind-kuchhdi-year'))['wind-kuchhdi-year']
var windcharankay = JSON.parse(sessionStorage.getItem('wind-charanka-year'))['wind-charanka-year']
var solarrooftopy = JSON.parse(sessionStorage.getItem('solar-rooftop-year'))['solar-rooftop-year']

var conventialy = arrsum(conventialgipcly['value'],conventialslppy['value']);
var windy = arrsum(windkotadapithay['value'],windrojmaly['value'])
var windy = arrsum(windy,windnakhtranay['value'])
var windy = arrsum(windy,windkuchhdiy['value'])
var windy = arrsum(windy,windcharankay['value'])

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*console.log('windkotadapitha:'+(btwnlst(conventialgipcl,70)+btwnlst(conventialslpp,70)))
console.log(convential);
console.log(conventialslpp);
console.log('windkotadapitha:'+btwnlst(windkotadapitha,70));
console.log('windrojmal:'+btwnlst(windrojmal,70));
console.log('windnakhtrana:'+btwnlst(windnakhtrana,70));
console.log('windkuchhdi:'+btwnlst(windkuchhdi,70));
console.log('windcharanka:'+btwnlst(windcharanka,70));
console.log('solarrooftop:'+btwnlst(solarrooftop,70));
*/


