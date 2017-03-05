function convertirCelsius(){
  var fahrenheit= document.getElementById('fahrenheit').value;
  if(fahrenheit!= "" && fahrenheit!=null){
    document.getElementById('celsius').value = (fahrenheit-32)*5/9;
  }else{
    document.getElementById('celsius').value = "";
  }
}
//de fahrenheit a celsius
function convertirFahrenheit(){
  var celsius= document.getElementById('celsius').value;
  if(celsius!="" && celsius!=null){
    document.getElementById('fahrenheit').value = (celsius*1.8)+32;
  }else{
    document.getElementById('fahrenheit').value = "";
  }
}
