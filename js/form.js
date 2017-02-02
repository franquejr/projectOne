function submitClicked(){
  var name = document.getElementById('name').value.trim();
  var address = document.getElementById('address').value.trim();  
  var city = document.getElementById('city').value.trim();
  var state = document.getElementById('state').value.trim();
  var zip = document.getElementById('zip-code').value.trim();
  var email = document.getElementById('email').value.trim();

  if (name!==''){
    document.getElementById('info').innerHTML = name;
  }
  else{
    alert('Fields cannot be empty');  
  }

  document.getELementById('submit').addEventListener('click,submitClicked,false');
}
