<template>
    <div class="wrapper">
            <img class="auth-logo" src="../assets/auth-logo.png" alt="logo">
            <h1>зарегистрироваться</h1>
        <form @submit.prevent="register" >
            <input type="text" placeholder="Email" v-model="email" />
            <input type="password" placeholder="password" v-model="password" />
            <button >зарегистрироваться</button>
        </form>
        <button @submit="signInWithGoogle">login with google</button>

    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
    import { useRouter } from 'vue-router';

    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const register = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) =>{
            console.log( data,'successfully registered')
            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error.message)
        })
    }

    const signInWithGoogle = ()=> {

    }

</script>



<style scoped>
.auth-logo {
    max-height: 550px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lazy Dog', sans-serif;
}



form input {
    width: 200px;
    color: #3598db;
    margin-bottom: 10px;
    border: 2px solid #3598db;
    padding: 8px;
    border-radius: 4px;
    outline: none;
}

form input::placeholder {
    color: #3598db;
    font-style: italic;
}

button {
    font-size: 20px;
    color: white;
    background-color: #3598db;
    padding: 5px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 220px;
    margin-bottom: 10px;
}

img{
    margin-bottom: 30px;
}
</style>