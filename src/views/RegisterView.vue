<template>
    <div class="register">
        <form class="register__form" @submit.prevent="register">
            <h1>Sign in</h1>
            <input class="register__input register__input--email" type="text" placeholder="Email" v-model="email" />
            <input class="register__input register__input--password" type="password" placeholder="Password"
            v-model="password" />
            <button class="register__button register__button--login" type="submit">Зарегистрироваться</button>
            <!-- <button class="register__button register__button--withGoogle" @click="signInWithGoogle">Login with
                Google</button> -->
                <p class="register__question" @click="toAuthPage"> есть аккаунт?</p>
        </form>
    </div>
</template>

<script setup>
import path from '@/services/pathes';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();
const db = getFirestore();


function toAuthPage() {
    router.push(path.auth).catch((err) => {
        console.error('Failed to navigate:', err);
    });;
}

async function register() {
    try {
        const userCredential = await createUserWithEmailAndPassword(getAuth(), email.value, password.value);
        const user = userCredential.user;
        console.log(user, 'successfully registered');


        const userData = {
            uid: user.uid,
            email: user.email,
            createdAt: new Date(),
            wallpaperUrl: "https://t4.ftcdn.net/jpg/08/11/25/41/360_F_811254149_AV6WMNTKdLZgMmyTDizY43EIMb8RgOul.jpg",
            displayName: user.email,
            about: '',
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&s",
            badges: [
                { name: 'Аниме', BgColor: 'rgba(204, 34, 238, 0.45)', color: 'rgba(204, 34, 238, 1)' },
            ],
            wishes: []



        };

        await setDoc(doc(db, 'users', user.uid), userData);


        await router.push(`${path.user}/${user.uid}`).catch((err) => {
            console.error('Failed to navigate:', err);
        });
    } catch (error) {
        console.error('Error during registration:', error.code, error.message);
    }
}

async function signInWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user, 'successfully logged in with Google');


        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            createdAt: new Date(),

        };


        await setDoc(doc(db, 'users', user.uid), userData, { merge: true });

        await router.push(`${path.user}/${user.uid}`).catch((err) => {
            console.error('Failed to navigate:', err);
        });
    } catch (error) {
        console.error('Error during Google sign-in:', error.message);
    }
}
</script>



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
    color: #1f56ce;
}

.register__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: #1f56ce 1px solid;
    border-radius: 20px;
    box-shadow: 0px 10px 40px rgba(126, 155, 189, 0.35);

}

.register h1 {
    margin-right: auto;
    font-size: 20px;
}

.register p {
    margin: 0;
    margin-left: auto ;
}

.register p:hover{
    text-decoration: underline;
}

.register__input {
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

.register__input::placeholder {
    color: #1f56ce;
    font-style: italic;
}

.register__button {
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