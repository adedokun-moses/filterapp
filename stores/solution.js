import { defineStore } from 'pinia';


export const shapesDetails = defineStore('shapeDet', {

    state: () => ({
        /*    data: [
               {
                   "shapes": "Oval",
                   "color": "#ff0000",
                   "title": "Oval",
                   "color_name": "Red"
               },
               {
                   "shapes": "Round",
                   "color": "#0000ff",
                   "title": "Round" ,
                   "color_name": "Blue"
               },
               {
                   "shapes": "Triangle",
                   "color": "#00ff00",
                   "title": "Triangle"
               },
               {
                   "shapes": "Square",
                   "color": "#ffff00",
                   "title": "Square"
               },
               {
                   "shapes": "Rectangle",
                   "color": "#d3d3d3",
                   "title": "Rectangle"
               },
               {
                   "shapes": "Rectangle",
                   "color": "#add8e6",
                   "title": "Rectangle"
               },
   
               {
                   "shapes": "Oval",
                   "color": "#ff0000",
                   "title": "Oval",
                   "color_name": "Red"
   
               },
               {
                   "shapes": "Round",
                   "color": "#0000ff",
                   "title": "Round"
               },
               {
                   "shapes": "Triangle",
                   "color": "#00ff00",
                   "title": "Triangle"
               },
               {
                   "shapes": "Square",
                   "color": "#ffff00",
                   "title": "Square"
               },
               {
                   "shapes": "Rectangle",
                   "color": "#d3d3d3",
                   "title": "Rectangle"
               },
               {
                   "shapes": "Rectangle",
                   "color": "#add8e6",
                   "title": "Rectangle"
               },
   
               {
                   "shapes": "Oval",
                   "color": "#ff0000",
                   "title": "Oval",
                   "color_name": "Red"
               },
               {
                   "shapes": "Round",
                   "color": "#0000ff",
                   "title": "Round"
               },
               {
                   "shapes": "Triangle",
                   "color": "#00ff00",
                   "title": "Triangle"
               },
               {
                   "shapes": "Square",
                   "color": "#ffff00",
                   "title": "Square"
               },
               {
                   "shapes": "Rectangle",
                   "color": "#d3d3d3",
                   "title": "Rectangle"
               },
               {
                   "shapes": "Rectangle",
                   "color": "#add8e6",
                   "title": "Rectangle"
               },
               {
                   "shapes": "Rectangle",
                   "color": "#add8e6",
                   "title": "Rectangle"
               },
   
   
   
           ] */

        data: [
            {
                "type": "circle",
                "radius": 10,
                "colors": [
                    "red",
                    "blue",
                    "green"
                ]
            },
            {
                "type": "square",
                "sideLength": 20,
                "colors": [
                    "red",
                    "blue",
                    "green"
                ]
            },
            {
                "type": "triangle",
                "base": 15,
                "height": 10,
                "colors": [
                    "red",
                    "blue",
                    "blue",
                    "green"

                ]
            },
            {
                "type": "oval",
                "base": 15,
                "height": 10,
                "colors": [
                    "blue",
                    "green",
                    "red",
                    "blue",
                    "green"
                ]
            }
        ],



    }),
    getters: {
        getShape(state) {
            return state.data
        }
    },

    actions: {
        LOGOUT() {
            const router = useRouter()
            router.push('/')


        }

    },



})