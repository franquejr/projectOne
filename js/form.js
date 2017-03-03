
document.addEventListener("DOMContentLoaded",function () {
console.log('Dom loaded');
 
 //alert(name);
    function submitClicked() {
     var name = document.getElementById('fullname').value.trim();
     var phone = document.getElementById('phone').value.trim();
     var email = document.getElementById('email').value.trim();
     var results = document.getElementById('results');
      if (name ==='' || email ===''){
        alert('name or email fields cannot be empty');
      }//end of name if statement
      else if (isNaN(Number(phone))){
        alert('phone number entry is not a number');
      }//end of email if statement
      else{
         results.innerHTML = name;       
      }//end of else 
    };//end of submitClicked funtion

  document.getElementById('enter').addEventListener('click',submitClicked,false);

},false);
