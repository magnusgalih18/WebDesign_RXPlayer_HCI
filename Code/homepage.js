//navbar
const navSlide = () => {
  const buttonnav = document.querySelector('.buttonnav');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //buttonnav click
  buttonnav.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    //animation settings for buttonnav
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
          link.style.animation = '';
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.8}s`;
        // console.log(index / 5);
      }
    });
    //--
    //buttonnav animation
    buttonnav.classList.toggle('toggle');
  });
}

navSlide();


// image slider
$(document).ready(function(){
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });
});

function validateform(){
  var name = document.RegistForm.FullNameForm.value;
  var email = document.RegistForm.emailform.value;
  var confpassword = document.RegistForm.password.value;
  var password = document.RegistForm.confirmpassword.value;
  var phone = document.RegistForm.phonenumber.value;
  if (name == "")                                  
  { 
      window.alert("Name cannot be blank! Please Enter Your Name");  
      return false; 
  }
  if(phone.length <12){
    alert("phone must >0 character and phonenumber<12");  
    return false; 
  }
  var atposition=email.indexOf("@");  
  var dotposition=email.lastIndexOf(".");  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
  {  
      window.alert("Please Enter Valid Email."); 
      return false;  
    }  

  if(password.length <5){
    alert("password must >5 character");  
    return false; 
  }
  if(confpassword != password){ 
    alert("password must be same!");  
    return false;  
  }

 return true;
}