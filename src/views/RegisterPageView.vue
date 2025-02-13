<script setup>
import defaultWallpaper from '@/components/icons/wall.png'
import { PATHS } from '@/constants/paths'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'

import { useRouter } from 'vue-router'

const router = useRouter()
const db = getFirestore()
const auth = getAuth()

async function signIn() {
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log(user, 'successfully logged')

    const userRef = doc(db, 'users', user.uid)
    const userSnap = await getDoc(userRef)
    const existingData = userSnap.exists() ? userSnap.data() : {}

    console.log(userSnap.data(), 'snap')
    const userData = {
      uid: user.uid,
      email: user.email,
      createdAt: existingData.createdAt || new Date(),
      wallpaperUrl: existingData.wallpaperUrl || defaultWallpaper,
      displayName: existingData.displayName || user.reloadUserInfo.screenName,
      about: existingData.about || '',
      photoUrl: existingData.photoURL || user.photoURL,
      badges: existingData.badges || [
      ],
      subscribe: existingData.subscribe || [],
    }

    await setDoc(doc(db, 'users', user.uid), userData, { merge: true })

    await router.push(`${PATHS.USER.PROFILE}/${user.uid}`).catch((err) => {
      console.error('Failed to navigate:', err)
    })
  }
  catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="register">
    <form class="register__form">
      <h1>Войти</h1>
      <button
        class="register__button register__button--withGoogle"
        @click.prevent="signIn"
      >
        Google
      </button>
    </form>
  </div>
</template>

<style scoped>
.register__question {
  cursor: pointer;
}

.register {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-size: 18px;
  color: var(--color-accent);
  background-color: var(--color-background);
}

.register__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  border-radius: 20px;
  background-color: var(--color-background-light);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.register h1 {
  margin-right: auto;
  font-size: 20px;
}

.register p {
  margin: 0;
  margin-left: auto;
}

.register p:hover {
  text-decoration: underline;
}

.register__input {
  width: 300px;
  height: 20px;
  margin-bottom: 10px;
  border: 2px solid var(--color-accent);
  padding: 8px;
  border-radius: 4px;
  outline: none;
}

.register__input::placeholder {
  font-style: italic;
}

.register__button {
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

.register__button:hover {
  box-shadow: 0px 0px 15px var(--color-accent);
}

.register__button--withGoogle {
  background-color: rgb(189, 7, 7);
}
</style>
