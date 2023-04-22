<template >
    <div class="main">
        <div class="top">
            <h5>Shapes</h5>
            <h5 class="log" @click="logOut()">Log Out</h5>
        </div>
        <div class="container">
            <div class="tab_info">
                <h5>Filters</h5>
                <h4>Shapes {{ filterByColors }}</h4>

                <div class="shape_style">
                    <button v-for="btn in data" :key="btn.type" @click="setFilter(btn.type)">{{ btn.type }}</button>
                </div>

                <div class="color_tab">
                    <button :style="'background-color:' + color" v-for="color in colors" :key="color"
                        @click="setFilterColor(color)"></button>

                </div>

                <div class="shape_tab">
                    <h5>All {{ shapeTitle }}{{ shape_colors }} Shapes In The Database {{ shape_colors.length }}</h5>
                    <div class="shapes">
                        <div v-for="color in shape_colors" :key="color">
                            <!--   {{ shape.type }} -->

                            <div class="circle" :style="'background-color:' + color">

                            </div>

                        </div>

                    </div>

                </div>



            </div>

        </div>

    </div>
</template>

<script setup   >

import { ref, reactive, computed } from "vue";
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
    },

})


const selectedColors = reactive([])
const selectedShape = reactive([])
let shapeTitle = reactive('All Items')
const colors = reactive(["red", "blue", "green", "yellow"]);

const store = shapesDetails();
const data = computed(() => {
    return store.data;
});

const shape_colors = computed(() => {
    //return store.data.filter(color => color.type);
    for (let i = 0; i < store.data.length; i++) {
        selectedColors.push(...store.data[i].colors)
    }

    return selectedColors
});


/* const filterByColors = computed((color = "") => {
    //alert(color)
    if (selectedColors.length === 0) {
        return filteredTasks;
    } else {
        //return state.selectedShape = filteredTasks.value.filter(item => item.color_name == color)

        return filteredTasks.value.filter(item => {
            if (item.color_name == color) {
                return selectedShape.includes(item.color_name);
            }
        });
    }
})
 */
// Define a computed property to filter the tasks
const filteredTasks = computed(() => {

    /*  if (selectedColors.length === 0) {
         return store.data
     } else {
     } */
    /*  switch (state.filter) {
         case 'Oval':
             return store.data.filter((item) => item.shapes == 'Oval');
         case 'Round':
             return store.data.filter((item) => item.shapes == 'Round');
         case 'Triangle':
             return store.data.filter((item) => item.shapes == 'Triangle');
         case 'Square':
             return store.data.filter((item) => item.shapes == 'Square');
         case 'Rectangle':
             return store.data.filter((item) => item.shapes == 'Rectangle');
         case 'All':
             return store.data;
         default:
             return store.data;
     } */
})


const setFilter = (shapes) => {
    //check if the shape exist
    const index = selectedShape.indexOf(shapes);

    if (index !== -1) {
        selectedShape.splice(index, 1);

        for (let i = 0; i < store.data.length; i++) {

            if (store.data[i].type == shapes) {
                const res = store.data[i].colors
                res.forEach((item) => {
                    const index = selectedColors.indexOf(item);
                    if (index !== -1) {
                        selectedColors.splice(index, 1);
                    }
                });
            }
        }

        selectedColors.forEach((item) => {
            const index = selectedColors.indexOf(item);
            if (index !== -1) {
                selectedColors.splice(index, 1);
            }
        });
    } else {
        selectedShape.push(shapes)

        if (selectedShape.length == 1) {
            for (let i = 0; i < store.data.length; i++) {

                if (store.data[i].type == shapes) {
                    selectedColors.splice(0, selectedColors.length, ...store.data[i].colors);
                    //selectedColors.push(...store.data[i].colors)
                    //console.log(store.data[i].colors)
                }
            }

            shapeTitle = shapes
        }
        if (selectedShape.length > 1) {
            for (let i = 0; i < store.data.length; i++) {

                if (store.data[i].type == shapes) {
                    //selectedColors.splice(0, selectedColors.length, ...store.data[i].colors);
                    selectedColors.push(...store.data[i].colors)
                    //console.log(store.data[i].colors)
                }
            }

            shapeTitle = 'Multiple Items'

        }

    }

    if (selectedColors.length < 1) {

        for (let i = 0; i < store.data.length; i++) {
            selectedColors.push(...store.data[i].colors)
        }
        shapeTitle = 'All Items'
    }

    console.log(selectedColors)

    console.log(selectedShape)
}


const setFilterColor = (check_color) => {
    data.value.forEach(shape => {
        if (shape.colors.includes('red')) {
            //selectedColors.splice(0, selectedColors.length, ...shape);
            
            selectedColors.push(shape.colors[0])
        }
    })
    //selectedColors.push(...store.data[i].colors)

    // }




    /* 
        console.log(selectedColors)
    
        console.log(selectedShape) */
}
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