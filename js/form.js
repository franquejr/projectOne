
document.addEventListener("DOMContentLoaded",function () {
console.log('Dom loaded');

  function submitClicked() {
    var name = document.getElementById('fullname').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var results = document.getElementById('results');
    var form = document.getElementById('sign-up');
    var pic = document.createElement('img');
    var video = document.getElementById('clooney');
    var stats = document.getElementById('stats');
    var heading = document.getElementById('h1');

      if (name ==='' || email ==='' || phone === ''){
        alert('fields cannot be empty');
      }//end of name email if statement
      else if (isNaN(Number(phone))){
        alert('phone number entry is not a number');
      }//end of email if statement
      else{
        pic.src = 'images/Good-luck.gif';
        pic.setAttribute('alt', 'goofey gif');
        results.innerHTML = '<p>Entry submitted</p><p>Thank you</p>';
        results.appendChild(pic);
        video.style.display = 'none';  
        form.innerHTML = " ";
        stats.innerHTML = " "; 
        heading.innerHTML = " ";     
      }//end of else 
    };//end of submitClicked funtion

  document.getElementById('submit').addEventListener('click',submitClicked,false);

},false);
