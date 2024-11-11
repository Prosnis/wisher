<script setup>
import path from '@/components/constants/pathes'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errMsg = ref('')
const router = useRouter()

function toAuthPage() {
  router.push(path.register).catch((err) => {
    console.error('Failed to navigate:', err)
  })
}

function register() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, '123@123.sd', 'adgadfgad')
    .then((data) => {
      const user = data.user
      console.log('Successfully logged in:', user)

      router.push(`${path.user}/${user.uid}`).catch((err) => {
        console.error('Failed to navigate:', err)
      })
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
function signInWithGoogle() {
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

<template>
  <div class="auth">
    <form
      class="auth__form"
      @submit.prevent="register"
    >
      <h1>Log in</h1>
      <!-- <input class="auth__input auth__input--email" type="text" placeholder="Email" v-model="email">
      <input class="auth__input auth__input--password " type="password" placeholder="Password" v-model="password"> -->
      <p v-if="errMsg">
        {{ errMsg }}
      </p>
      <button
        class="auth__btn auth__btn--login"
        type="submit"
      >
        Войти
      </button>
      <!-- <button class="auth__btn auth__btn--google" @click="signInWithGoogle">Login with Google</button> -->
      <p
        class="auth__question"
        @click="toAuthPage"
      >
        новый пользователь?
      </p>
    </form>
  </div>
</template>

<style scoped>
.auth__question {
  cursor: pointer;
}

.auth {
  display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    font-size: 18px;
    color: #1f56ce;
}

.auth__form {
  display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: #1f56ce 1px solid;
    border-radius: 20px;
    box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.35);

}

.auth h1 {
  margin-right: auto;
  font-size: 20px;
}

.auth p {
  margin: 0;
  margin-left: auto ;
}

.auth p:hover{
    text-decoration: underline;
}

.auth__input {
  width: 300px;
    height: 20px;
    color: #1f56ce;
    margin-bottom: 10px;
    border: 2px solid #1f56ce;
    padding: 8px;
    border-radius: 4px;
    outline: none;
    background-color: white
}

.auth__input:placeholder {
  color: #1f56ce;
  font-style: italic;
}

.auth__btn {
  font-size: 20px;
    color: white;
    background-color: #1f56ce;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 320px;
    height: 40px;
    margin-bottom: 10px;
}
</style>
