let myForm = document.querySelector("#myForm");
let userID = myForm.userID;
let username = myForm.username;
let email = myForm.email;
let statusDiv = document.querySelector("#statusDiv");

// Your web app's Firebase configuration
const config = {
  // put your own here
};

firebase.initializeApp(config);
const db = firebase.database();

// expanded example
function addUserCredentials(e) {
  e.preventDefault();
  
  db.ref('users/' + userID.value).set(
    {
      username: username.value,
      email: email.value
    });

  statusDiv.innerHTML = "<b><h2 style=\"color: #1c8a23\">Successful submission!</h2></b>";
}

function resetValues() {
  userID.value = ""
  username.value = ""
  email.value = ""
}

myForm.addEventListener('submit', addUserCredentials);