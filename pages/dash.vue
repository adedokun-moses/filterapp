<template >
    <div class="main">
        <div class="top">
            <h5>Shapes</h5>
            <h5 class="log" @click="logOut()">Log Out</h5>
        </div>
        <div class="container">
            <div class="tab_info">
                <h5>Filters</h5>
                <h4>Shapes</h4>

                <div class="shape_style">
                    <button @click="setFilter('Oval')">Oval</button>
                    <button @click="setFilter('Round')">Round</button>
                    <button @click="setFilter('Triangle')">Triangle</button>
                    <button @click="setFilter('Square')">Square</button>
                    <button @click="setFilter('Rectangle')">Rectangle</button>
                </div>

                <div class="color_tab">
                    <h5>Colors</h5>
                    <button style="background: red;"></button>
                    <button style="background: blue;"></button>
                    <button style="background: green;" @click="setFilter('green')"></button>
                    <button style="background: yellow;"></button>
                    <button style="background: goldenrod;"></button>

                </div>

                <div class="shape_tab">
                    <h5>All {{ filteredTasks[0].title }} Shapes In The Database {{ filteredTasks.length }}</h5>
                    <div class="shapes">
                        <div v-for="shape in filteredTasks" :key="shape.type">
                            {{ shape.type }} {{ shape.colors }}

                            <div class="circle" :style="{ background: shape.color }">

                            </div>

                        </div>

                    </div>

                </div>



            </div>
            <!-- 
            <h2>Shapes Filter</h2>
            {{ shapes }}
            <div class="filters">
                <h3>Shapes</h3>
                <div v-for="shape in shapes" :key="shape.type">
                    <button :class="{ 'selected': isSelectedShape(shape.type) }" @click="toggleShape(shape.type)">
                        {{ shape.type }}
                    </button>
                </div>
                <h3>Colors</h3>
                <div v-for="color in colors" :key="color">
                    <button :class="{ 'selected': isSelectedColor(color) }" @click="toggleColor(color)">
                        {{ color }}
                    </button>
                </div>
            </div>
            <div class="results">
                <h3>Results</h3>
                <div v-for="shape in filteredShapes" :key="shape.type">{{ shape.type }} - {{ shape.colors.join(',') }}
                </div>
            </div> -->
        </div>

    </div>
</template>

<script setup   >

import { reactive, computed } from "vue";
import { shapesDetails } from "../stores/solution";
const state = reactive({
    filter: {
        Oval: false,
        Triangle: false,
        Round: false,
        Square: false,
        Rectangle: false,
        Green: false,
        All: false
    }
})


const store = shapesDetails();
const data = computed(() => {
    return store.data;
});



// Define a computed property to filter the tasks
const filteredTasks = computed(() => {

    switch (state.filter) {
        case 'Oval':
            return store.data.filter((item) => item.shapes == 'Oval');
        case 'Round':
            return store.data.filter((item) => item.shapes == 'Round' || item.type == 'Oval');
        case 'Triangle':
            return store.data.filter((item) => item.shapes == 'Triangle');
        case 'Square':
            return store.data.filter((item) => item.shapes == 'Square');
        case 'Rectangle':
            return store.data.filter((item) => item.shapes == 'Rectangle');
        case 'Green':
            return store.data.filter((item) => item.colors == 'Green');
        case 'All':
            return store.data;
        default:
            return store.data;
    }
});


const setFilter = (filter) => {
    state.filter = filter;
};
const logOut = () => {
   return store.LOGOUT()
}

</script>


<style scoped>
* {
    padding: 0px;
    margin: 0px;
}

.main {
    margin: 0px;
    padding: 0px;
}

.container {
    width: 100%;
    background: grey;
    min-height: 500px;
    margin: 0px;

}

.top {
    width: 70%;
    margin: 0px auto;
    padding: 30px 0px 0px 0px;
}

.top h5 {
    display: inline-block;
}

.log {
    float: right;
    color: red;
    cursor: pointer;
}

.tab_info {
    width: 70%;
    margin: auto;
}

.tab_info h5 {
    padding: 15px 0px;
}

.shape_style button {
    width: 10%;
    margin: 20px 3px;
    padding: 10px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    outline: none;
    outline: 1px solid black;
}

.shape_style button:hover {
    background: grey;
}

.color_tab button {
    width: 5%;
    margin: 3px 3px;
    padding: 30px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    outline: none;
}

.color_tab h5 {
    margin: 0px;
    padding: 0px;
}

.shapes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.shapes>div {
    width: 31%;
    background: white;
    align-content: center;
    height: 120px;
    margin: 10px;


}

.circle {
    padding: 40px 20px;
    width: 15%;
    margin: 15px auto;
    border-radius: 180px;

}


@media only screen and (max-width: 600px) {
    .top {
        width: 90%;
    }

    .shape_style button {
        width: 15%;
        margin: 20px 3px;

    }

    .tab_info {
        width: 90%;
        margin: auto;
    }

    .shapes>div {
        width: 100%;
        flex-direction: column;
    }
}
</style>