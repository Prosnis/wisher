<script setup>
import { PATHS } from '@/constants/paths'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

function toAuthPage() {
  router.push(PATHS.AUTH.REGISTER).catch((err) => {
    console.error('Failed to navigate:', err)
  })
}
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
    })
}
</script>

<template>
  <div class="auth">
    <form
      class="auth__form"
    >
      <h1>Log in</h1>
      <button
        class="auth__btn auth__button--withGoogle"
        @click="signInWithGoogle"
      >
        Google
      </button>
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
  color: var(--color-accent);
  background-color: var(--color-background);
}

.auth__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  background-color: var(--color-background-light);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.auth h1 {
  margin-right: auto;
  font-size: 20px;
}

.auth p {
  margin: 0;
  margin-left: auto;
}

.auth p:hover {
  text-decoration: underline;
}

.auth__input {
  width: 300px;
  height: 20px;
  color: var(--color-accent);
  margin-bottom: 10px;
  border: 2px solid var(--color-accent);
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
  color: #0d121b;
  background-color: var(--color-accent);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 320px;
  height: 40px;
  margin-bottom: 10px;
  color: white;
}

.auth__btn:hover {
  border: 3px solid #ffd859;
  box-shadow: 0px 0px 15px #ffd859;
}

.auth__button--withGoogle {
  background-color: rgb(189, 7, 7);
}
</style>
