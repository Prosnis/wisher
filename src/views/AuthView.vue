<template>
  <div class="wrapper">
      <h1>log in</h1>
        <form class="auth-form" @submit.prevent="register">
          <input class="email-input" type="text" placeholder="Email" v-model="email" />
          <input class="password-input" type="password" placeholder="Password" v-model="password" />
          <p v-if="errMsg">{{ errMsg }}</p>
          <button class="btn-register" type="submit">Войти</button>
          <button class="btn-register" @click="signInWithGoogle">Login with Google</button>
      </form>
      <p class="toRegPage" @click="toAuthPage">новый пользователь?</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errMsg = ref('')
const router = useRouter()


const toAuthPage = () => {
  router.push('/wisher/register/');  
};


const register = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      const user = data.user
      console.log('Successfully logged in:', user)


       router.push(`/wisher/user/${user.uid}`);
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Неправильный адрес электронной почты'
          break
        case 'auth/user-not-found':
          errMsg.value = 'Аккаунт с таким адресом электронной почты не найден'
          break
        case 'auth/wrong-password':
          errMsg.value = 'Неправильный пароль'
          break
        default:
          errMsg.value = 'Адрес электронной почты или пароль введены неверно'
      }
    })
}

// Вход через Google
const signInWithGoogle = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user
      console.log('Google sign-in success:', user)

      router.push(`/user/${user.uid}`)
    })
    .catch((error) => {
      console.error('Error during Google sign-in:', error)
      errMsg.value = 'Не удалось войти через Google. Попробуйте еще раз.'
    })
}
</script>



<style scoped>

.toRegPage {
  cursor: pointer;
  transition: transform 0.2s ease-in; 
}

.toRegPage:hover {
  transform: scale(1.2); 
}

.wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    font-family: "Good dog", sans-serif;
    font-size: 50px;
    color: #464241;
}

.auth-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

}

.wrapper h1 {
    margin: 0 0 20px 0;
    letter-spacing: 10px;
}

.wrapper p {
    margin: 0;
}


.password-input,
.email-input {
    width: 200px;
    color: #464241;
    margin-bottom: 10px;
    border: 2px solid #464241;
    padding: 8px;
    border-radius: 4px;
    outline: none;
}

.password-input,
.email-input::placeholder {
    color: #464241;
    font-style: italic;
}

.btn-register {
    font-size: 20px;
    color: white;
    background-color: #464241;
    padding: 5px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 220px;
    margin-bottom: 10px;
}
</style>