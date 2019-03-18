//listen for form submit

var config = {
    apiKey: "AIzaSyAIMTH8lYP6jgUv50YDdO4hJ-ONYYbM05I",
    authDomain: "test-database-cc5a0.firebaseapp.com",
    databaseURL: "https://test-database-cc5a0.firebaseio.com",
    projectId: "test-database-cc5a0",
    storageBucket: "test-database-cc5a0.appspot.com",
    messagingSenderId: "630490375454"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('ORDER Requests');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  // var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var option= getInputVal('option');

  // Save message
  saveMessage(name,  email, phone, message, option);

  // Show alert
//   document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,  email, phone, message, option){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    
    email:email,
    phone:phone,
    option: option,
    
    message:message
  });
}

//alert message 

function alertFunction() {
  alert('Thank you your Form has been submitted. We will contact you soon!')
};