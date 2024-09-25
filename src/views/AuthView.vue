<template>
    <div class="wrapper">
            <img class="auth-logo" src="../assets/auth-logo.png" alt="logo">
            <h1>войти</h1>
        <form @submit.prevent="register" >
            <input type="text" placeholder="Email" v-model="email" />
            <input type="password" placeholder="password" v-model="password" />
            <p v-if="errMsg"> {{ errMsg }}</p>
            <button >отправить</button>
        </form>
        <button @submit="signInWithGoogle">login with google</button>

    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'
    import { useRouter } from 'vue-router';

    const email = ref('')
    const password = ref('')
    const router = useRouter()
    const errMsg = ref('')

    const register = () => {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) =>{
            console.log( data,'successfully registered')
            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error.message)
            switch (error.code) {
                case 'auth/invalid-email':
                    errMsg.value = 'Неправильный адрес электронной почты'
                    break;
                case 'auth/user-not-found':
                    errMsg.value = 'Аккаунт с таким адресом электронной почты не найден'
                    break;
                case 'auth/wrong-password':
                    errMsg.value = 'Неправльный пароль'
                    break;
                default:
                    errMsg.value = 'Адрес электронной почты или пароль введены неверно'
            }
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
    font-family: 'Good dog', sans-serif;
    color: #3598db;;
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