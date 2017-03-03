
document.addEventListener("DOMContentLoaded",function () {
console.log('Dom loaded');
 
 //alert(name);
  function submitClicked() {
    var name = document.getElementById('fullname').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var results = document.getElementById('results');
    var form = document.getElementById('sign-up');
    var pic = document.createElement('img');

      if (name ==='' || email ===''){
        alert('name or email fields cannot be empty');
      }//end of name if statement
      else if (isNaN(Number(phone))){
        alert('phone number entry is not a number');
      }//end of email if statement
      else{
        pic.src = 'images/Good-luck.gif';
        pic.setAttribute('alt', 'thumbs up picture');
        results.innerHTML = '<p>Entry submitted</p><p>Thank you</p>';
        results.appendChild(pic);
          
         form.innerHTML = " ";      
      }//end of else 
    };//end of submitClicked funtion

  document.getElementById('enter').addEventListener('click',submitClicked,false);

},false);
