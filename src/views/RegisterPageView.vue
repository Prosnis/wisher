<script setup lang="ts">
import type { User } from '@/types/interfaces/user'
import type { User as FirebaseUser } from 'firebase/auth'

import defaultWallpaper from '@/components/icons/wall.png'
import { PATHS } from '@/constants/paths'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { Button } from 'primevue'
import { useRouter } from 'vue-router'

const router = useRouter()
const db = getFirestore()
const auth = getAuth()

async function signIn(): Promise<void> {
  try {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({
      prompt: 'select_account'
    })
    const result = await signInWithPopup(auth, provider)
    const user = result.user as FirebaseUser

    const userRef = doc(db, 'users', user.uid)
    const userSnap = await getDoc(userRef)
    const existingData = userSnap.exists() ? userSnap.data() : {}

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
      <h1>Войти с помощью</h1>
      <Button @click.prevent="signIn" class="register__button">
        Google
      </Button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.register {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-size: 18px;

  &__button {
    width: 100%;
  }
}
</style>
