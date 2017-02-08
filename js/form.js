

document.addEventListener("DOMContentLoaded",function(){
   console.log('Dom loaded');

function submitClicked(){
  var name = document.forms[0].elements[0].name;
  var address = document.forms[0].elements[1].name;  
  var city = document.forms[0].elements[2].name;
  var state = document.forms[0].elements[3].name;
  var zip = document.forms[0].elements[4].name;
  var email = document.forms[0].elements[6].name;

  if (name!==''){
    document.getElementById('info').innerHTML = name;
  }
  else{
    alert('Fields cannot be empty');  
  }

  document.getElementById('submit').addEventListener('click',submitClicked,false);
}
},false);
