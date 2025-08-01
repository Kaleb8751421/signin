// script.js
import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.signIn = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("登入成功！");
    window.location.href = "home.html";
  } catch (error) {
    alert("登入失敗：" + error.message);
  }
};

window.signUp = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("註冊成功，已登入！");
    window.location.href = "home.html";
  } catch (error) {
    alert("註冊失敗：" + error.message);
  }
};
