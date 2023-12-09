// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

var firebaseConfig = {
    apiKey: "AIzaSyBTVZ1Hsop9Jt8k0mHEXegYSRWoZS3cQnE",
    authDomain: "igishka2-tssixm.firebaseapp.com",
    databaseURL: "https://newagent-fhepbr.firebaseio.com",
    projectId: "igishka2-tssixm",
    storageBucket: "igishka2-tssixm.appspot.com",
    messagingSenderId: "14896371054",
    appId: "1:14896371054:web:fc4e1d55b42d5a7f41dd7f"
  };
  // Inicializa Firebase
firebase.initializeApp(firebaseConfig);
  


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



