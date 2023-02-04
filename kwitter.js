function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html";


}
const firebaseConfig = {
    apiKey: "AIzaSyAojGXp-LDsp5K4pxlaLNLF5pTuk-fPpac",
    authDomain: "kwitter-2-d55be.firebaseapp.com",
    projectId: "kwitter-2-d55be",
    storageBucket: "kwitter-2-d55be.appspot.com",
    messagingSenderId: "529966572860",
    appId: "1:529966572860:web:56dc53d45cf7b986296a39"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
