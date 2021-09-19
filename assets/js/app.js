SignIn = () => {
  var Email = document.getElementById("SIgnInEmail").value;
  var Password = document.getElementById("SignInPassword").value;
  // alert(`${Email} ${Password}`)

  firebase.auth().signInWithEmailAndPassword(Email, Password)
    .then(function (result) {
      window.location.href = './Screens/Home.Html'
    })
    .catch(function (err) {
      var errorMessage = err.message;
      alert(errorMessage)
    })
}
SignUp = () => {
  var SignUpData = {
    Email: document.getElementById("SignUpEmail").value,
    Password: document.getElementById("SignUpPassword").value,
    UserName: document.getElementById("UserName").value,
    Country: document.getElementById("Country").value,
    City: document.getElementById("City").value,
  }
  // alert(`${UserName} ${Email} ${Password} ${Country} ${City}`)

  firebase.auth().createUserWithEmailAndPassword(SignUpData.Email, SignUpData.Password)
    .then(function (result) {
      // console.log(result)
      setData(result.user.uid, SignUpData)
    })
    .catch(function (err) {
      var errorMessage = err.message;
      alert(errorMessage)
    })
}

// is function s Database  me data set ho raha h
async function setData(Uid, SignUpData) {
  await firebase.database().ref('users/' + Uid).set({ SignUpData });
  window.location.href = './Screens/Home.Html';
}
