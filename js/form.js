
document.addEventListener("DOMContentLoaded",function () {
console.log('Dom loaded');
 
 //alert(name);
    function submitClicked() {
     var name = document.getElementById('fullname').value.trim();
     var phone = document.getElementById('phone').value.trim();
     var email = document.getElementById('email').value.trim();
      if (name!==''){
        results.innerHTML = name;
        //console.log(name);
        //alert(name);
      }//end of if statement
      else{
        alert('Fields cannot be empty');
        console.log('field is empty');  
      }//end of else 
    };//end of submitClicked funtion

  document.getElementById('enter').addEventListener('click',submitClicked,false);

},false);
