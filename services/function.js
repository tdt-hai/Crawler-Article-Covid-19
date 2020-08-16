function getFullDayNow(){
   var today = new Date();
   var dd = String(today.getDate()).padStart(2, '0');
   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
   var yyyy = today.getFullYear();
   var date = yyyy+'-'+mm+'-'+dd;
   var time = String(today.getHours()).padStart(2, '0') + ":" + String(today.getMinutes()).padStart(2, '0');;
   var dateTime = date+'T'+time;
   return dateTime;
}
module.export= { getFullDayNow };