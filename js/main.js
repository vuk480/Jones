window.onload = function(){
  let taster = document.querySelector("#btnPrijava");
  taster.addEventListener("click", obradaForme);}

var hamburger = document.querySelector(".hamburger");
var nav_menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  // Toggle the "active" class on hamburger and nav_menu
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  // Remove the "active" class when a nav-link is clicked
  hamburger.classList.remove("active");
  nav_menu.classList.remove("active");
}));
$(function() {
 
  $(".slider").slick({
    slidesToShow: 3.5,
    infinite: false,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
    ]
  });

  $(document).ready(function(){
    $(".slick-arrow").on({
        mouseenter: function(){
            $(this).css("color", "red");
        }
    });    
});
  
  $(".filter div").on('click', function(){
    var filter = $(this).data('filter');
    $(".slider").slick('slickUnfilter');
    
    if(filter == 'apparel'){
      $(".slider").slick('slickFilter','.apparel');
    }
    else if(filter == 'board'){
      $(".slider").slick('slickFilter','.board');
    }
    else if(filter == 'split'){
      $(".slider").slick('slickFilter','.split');
    }
   
    
  })
  
});

$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

var form = document.getElementById('form1');

form.innerHTML = ``
function validateForm() {
  var isNameValid = validateName();
  var isPasswordValid = validatePassword();
  var isEmailValid = validateEmail();
  var isCheckboxValid = validateCheckbox();
  var isGenderValid = validateGender();

  if (isNameValid && isPasswordValid && isEmailValid && isCheckboxValid) {
      showSuccessAlert();
      clearForm();
  }
}

function validateName() {
  var nameInput = document.getElementById('nameInput');
  var nameValidationMessage = document.getElementById('nameValidationMessage');
  var namePattern = /^[A-ZŠĐŽČĆ][a-zšđčćž]+\s[A-Z][a-zšđčćž]+$/;
  if (nameInput.value==='') {
    nameValidationMessage.textContent = 'Name must be filled out';
  }

  else if(!namePattern.test(nameInput.value)) {
    nameValidationMessage.textContent = 'Wrong Input. Example: John Doe';
    nameValidationMessage.style.color = 'red';
    return false;
  } else if(namePattern.test(nameInput.value)) {
    nameValidationMessage.textContent = '';
      nameValidationMessage.style.color = 'red';
      return true;
  }
}

function validatePassword() {
  var passwordInput = document.getElementById('passwordInput');
  var passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  var retypePasswordInput = document.getElementById('retypePasswordInput');
  var passwordValidationMessage = document.getElementById('passwordValidationMessage');
  
  if(passwordInput.value===''){
    passwordValidationMessage.textContent = 'Password must be filled out';
  }
  else  if(!passreg.test(passwordInput.value)){
    passwordValidationMessage.textContent = 'Must contain at least 1 uppercase, 1 number . Example: Password1';
  }
  

  if (passreg.test(passwordInput.value) && passwordInput.value != retypePasswordInput.value) {
      passwordValidationMessage.textContent = 'Passwords do not match.';
      passwordValidationMessage.style.color = 'red';
      return false;
  } 
}
function validateEmail() {
  var emailInput = document.getElementById('emailInput');
  var emailValidationMessage = document.getElementById('emailValidationMessage');
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if(emailInput.value===''){
    emailValidationMessage.textContent = 'Email must be filled out';
  }
  else if (!emailPattern.test(emailInput.value)) {
    emailValidationMessage.textContent = 'Wrong Input. Example: john.doe@example.com';
    emailValidationMessage.style.color = 'red';
    return false;
  }


  if (emailPattern.test(emailInput.value)) {
    emailValidationMessage.textContent = '';
      emailValidationMessage.style.color = 'green';
      return true;
  } }

function validateCheckbox() {
  var checkbox = document.getElementById('agreeCheckbox');
  var checkboxValidationMessage = document.getElementById('checkboxValidationMessage');

  if (checkbox.checked) {
      checkboxValidationMessage.textContent = '';
      checkboxValidationMessage.style.color = 'green';
      return true;
  } else {
      checkboxValidationMessage.textContent = 'Please agree to the terms and conditions.';
      checkboxValidationMessage.style.color = 'red';
      return false;
  }
}

function showSuccessAlert() {
  alert('Form submitted successfully!');
}

function clearForm() {
  var formInputs = document.querySelectorAll('input');
  var validationMessages = document.querySelectorAll('.validation-message');
  var successMessages = document.querySelectorAll('.success-message');

  formInputs.forEach(function(input) {
      input.value = '';
  });

  validationMessages.forEach(function(message) {
      message.textContent = '';
  });

  successMessages.forEach(function(message) {
      message.textContent = '';
  });
}
