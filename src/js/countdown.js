var current = "Happy New Year Astronauts!";
var montharray = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

function countdown(yr,m,d){
    theyear = yr;
    themonth = m;
    theday = d;
    var today = new Date();

    var todayyear = today.getYear();
    if (todayyear < 1000){
        todayyear += 1900;
    }

    var todaym = today.getMonth(); //increase accuracy by using Universal () time
    var todayd = today.getDate();
    var todayh = today.getHours();
    var todaymin = today.getMinutes();
    var todaysec = today.getSeconds();
    var todaystring = montharray[todaym]+" "+todayd+", "+todayyear+" "+todayh+":"+todaymin+":"+todaysec;
    futurestring = montharray[m-1]+" "+d+", "+yr;
    dd = Date.parse(futurestring)-Date.parse(todaystring);
    dday = Math.floor(dd/(60*60*1000*24)*1); //put times into the correct format
    dhour = Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1);
    dmin = Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
    dsec = Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

    if(todayd == 1 && todaym == 0){
        document.getElementById("time").innerHTML = current;
        return;
    } else {
        document.getElementById("time").innerHTML = dhour+":"+ dmin + ":" + dsec;
        setTimeout("countdown(theyear,themonth,theday)",1000);
    }

}
var next = new Date();
var theday = next.getDate();
var themonth = next.getMonth();
nexty = next.getFullYear();
nexty++;
if(document.getElementById("time")) {
    countdown(nexty,1,1);
}