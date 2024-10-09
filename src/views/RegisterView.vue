<template>
    <div class="wrapper">
        <h1>sign in</h1>
        <form class="register-form" @submit.prevent="register">
            <input class="email-input" type="text" placeholder="Email" v-model="email" />
            <input class="password-input" type="password" placeholder="Password" v-model="password" />
            <button class="btn-register" type="submit">Зарегистрироваться</button>
            <button class="btn-register" @click="signInWithGoogle">Login with Google</button>
        </form>
        <p class="toAuthPage" @click="toAuthPage">есть аккаунт?</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const email = ref('');
const password = ref('');
const router = useRouter();
const db = getFirestore(); 


const toAuthPage = () => {
  router.push('/wisher/auth/');  
};

const register = async () => {
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
            wishes: [{}]

        };

        await setDoc(doc(db, 'users', user.uid), userData);


        await router.push(`/wisher/user/${user.uid}`);
    } catch (error) {
        console.error('Error during registration:', error.code, error.message);
    }
}

const signInWithGoogle = async () => {
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

        await router.push(`/wisher/user/${user.uid}`);
    } catch (error) {
        console.error('Error during Google sign-in:', error.message);
    }
};
</script>



<style scoped>

.toAuthPage{
    cursor: pointer;
    transition: transform 0.2s ease-in; 
}

.toAuthPage:hover{
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

.register-form {
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