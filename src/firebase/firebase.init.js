import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBpoDSDj5uvp1HRhjTUAIZM3FtsxJkfeUM",
    authDomain: "sp-stdnt-management.firebaseapp.com",
    projectId: "sp-stdnt-management",
    storageBucket: "sp-stdnt-management.appspot.com",
    messagingSenderId: "887759071983",
    appId: "1:887759071983:web:4354508c61e322ca04891a"
  };

  const app = initializeApp(firebaseConfig);
  

  export default app;