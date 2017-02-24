
document.addEventListener("DOMContentLoaded",function () {
console.log('Dom loaded');
  var name = document.getElementById('name').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var email = document.getElementById('email').value.trim();

    function submitClicked() {
      if (name!==''){
        document.getElementById('info').innerHTML = name;
        console.log(name);
      }//end of if statement
      else{
        alert('Fields cannot be empty');
        console.log('field is empty');  
      }//end of else 
    }//end of submitClicked funtion

  document.getElementById('submit').addEventListener('submit',submitClicked,false);

},false);
