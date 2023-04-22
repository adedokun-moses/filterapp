<template>
    <div class="container">
        <form>
            <h5>Log In </h5>
            <div class="formgroup">
                <input type="text" placeholder="username">
            </div>
        </form>
    </div>
</template>


<style scoped>
form {
    width: 50%;
    margin: 4rem auto 0px auto;
    height: 450px;
    background: gold;
    border-radius: 40px;
}

form h5{
    text-align: center;
}

.formgroup {
    padding-top: 10px;
    font-size: 25px;
}

.formgroup input {
    display: block;
    width: 80%;
    margin: 10px auto 0px auto;
    padding: 20px;
    border-radius: 10px;
    border: none;
}
</style>