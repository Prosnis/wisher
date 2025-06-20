<script setup lang="ts">
import type { User } from '@/types/interfaces/user'
import type { User as FirebaseUser } from 'firebase/auth'

import defaultWallpaper from '@/components/icons/wall.png'
import { PATHS } from '@/constants/paths'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'

const router = useRouter()
const db = getFirestore()
const auth = getAuth()

async function signIn(): Promise<void> {
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user = result.user as FirebaseUser
    console.log(user, 'successfully logged')

    const userRef = doc(db, 'users', user.uid)
    const userSnap = await getDoc(userRef)
    const existingData = userSnap.exists() ? userSnap.data() : {}

    console.log(userSnap.data(), 'snap')
    const userData: User = {
      uid: user.uid,
      email: user.email,
      createdAt: existingData.createdAt || new Date(),
      wallpaperUrl: existingData.wallpaperUrl || defaultWallpaper,
      displayName: existingData.displayName || user.displayName,
      about: existingData.about || '',
      interests: existingData.about || '',
      photoUrl: existingData.photoUrl || user.photoURL,
      badges: existingData.badges || [
      ],
      subscribe: existingData.subscribe || [],
      birthday: existingData.birthday || '** ****',
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
</style>
