<template>
    <div class="container">
        <form>
            <h5>Kredi Bank </h5>
            <p>Log In <br> <span style="font-size: 15px;">Ensure You Input Your Correct Details</span> </p>
            <div class="formgroup">
                <input type="text" placeholder="Username" v-model="username">
            </div>
            <div class="formgroup">
                <input type="password" placeholder="Password" v-model="password">
            </div>
            <div class="formgroup">
                <button @click.prevent="handleLogin()">{{ btn_message }}</button>
            </div>

        </form>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { shapesDetails } from "../stores/solution";

const btn_message = ref("Log In")
const store = shapesDetails();
const username = ref("")
const password = ref("")

const handleLogin = () => {

     if (username.value == "" || password.value == "") {
        alert("Input Username and Password")
        return false
    }
    if (username.value != "kredistaff") {
        alert("Username Not In Our Database")
        return false
    }
    if (password.value != "kredistaff123") {
        alert("Password Not Correct")
        return false
    }  
    
    return store.LOGIN()
 
}


</script>


<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

form {
    width: 50%;
    margin: 4rem auto 0px auto;
    height: 400px;
    background: gold;
    border-radius: 20px;
}

form h5 {
    text-align: center;
    font-size: 30px;
    padding: 10px;
    background: yellow;
}

form p {
    text-align: center;
    padding: 10px;
    font-size: 30px;
}

.formgroup {
    font-size: 25px;
}

.formgroup input {
    display: block;
    width: 78%;
    margin: 10px auto 0px auto;
    padding: 20px 10px;
    border-radius: 10px;
    border: none;
}

.formgroup input:focus {
    border: none;
    outline: none;
}

.formgroup button {
    display: block;
    width: 80%;
    margin: 10px auto 0px auto;
    padding: 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}
</style>