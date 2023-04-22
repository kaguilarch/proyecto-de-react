import { useEffect, useState } from "react"

const BDD = [   
    {
    "id":1,
    "idCategoria":"Aleron",
    "nombre":"Alerones",
    "marca":"deayer",
    "modelo":"Estandar",
    "precio":1200,
    "stock":4,
    "img":"img/aleron_2.jpg"
    },

    {
    "id":2,
    "idCategoria":"Aleron",
    "nombre":"Alerones",
    "marca":"",
    "modelo":"",
    "precio":1200,
    "stock":7,
    "img":"img/aleron_2.jpg"
    },

    {
    "Id":3,
    "idCategoria":"Aleron",
    "nombre":"Alerones",
    "marca":"",
    "modelo":"",
    "precio":1500,
    "stock":1,
    "img":"img/aleron_3.jpg"

    },

    {
    "id":4,
    "idCategoria":"Aleron",
    "nombre":"Alerones",
    "marca":"",
    "modelo":"",
    "precio":1500,
    "stock":5,
    "img":"img/aleron4.jpg"
    },

    {
    "id":5,
    "idCategoria":"Aleron",
    "nombre":"Alerones",
    "marca":"",
    "modelo":"",
    "precio":1700,
    "stock":3,
    "img":"img/aleron_5.jpg"
    },

    {
    "id":6,
    "idCategoria":2,
    "nombre":"Difusor",
    "marca":"",
    "modelo":"",
    "precio":800,
    "stock":3,
    "img":"img/difusor_1.jpg"  
    },

    {
    "id":7,
    "idCategoria":2,
    "nombre":"Difusor",
    "marca":"",
    "modelo":"",
    "precio":800,
    "stock":5,
    "img":"img/difusor_2.jpg" 
    },

    {
    "id":8,
    "idCategoria":2,
    "nombre":"Difusor",
    "marca":"",
    "modelo":"",
    "precio":500,
    "stock":5,
    "img":"img/difusor_3.jpg" 
    },

    {
    "Id":9,
    "IdCategoria":3,
    "nombre":"Radios y Pantallas",
    "marca":"",
    "modelo":"",
    "precio":500,
    "stock":6,
    "img":"img/radio_1.jpg"
    },

    {
    "Id":10,
    "IdCategoria":"Radios y Pantallas",
    "nombre":"Radios y Pantallas",
    "marca":"",
    "modelo":"",
    "precio":250,
    "stock":2,
    "img":"img/radio_2.jpg"
    },

    {
    "id":11,
    "idCategoria":"Radios y Pantallas",
    "nombre":"Radios y Pantallas",
    "marca":"",
    "modelo":"",
    "precio":250,
    "stock":2,
    "img":"img/radio_3.jpg"
    },

    {
    "id":12,
    "idCategoria":"Radios y Pantallas",
    "nombre":"Radios y Pantallas",
    "marca":"",
    "modelo":"",
    "precio":300,
    "stock":6,
    "img":"img/radio_4.jpg"
    },

    {
    "id":13,
    "idCategoria":"Radios y Pantallas",
    "nombre":"Radios y Pantallas",
    "marca":"",
    "modelo":"",
    "precio":700,
    "stock":1,
    "img":"img/radio_5.jpg"
    },

    {
    "id":"14",
    "idCategoria":"Rines",
    "nombre":"Rin",
    "marca":"",
    "modelo":"",
    "precio":1440,
    "stock":4,
    "img":"img/rines_1.jpg"
    },

    {
    "id":"15",
    "idCategoria":"Rines",
    "nombre":"Rin",
    "marca":"",
    "modelo":"",
    "precio":1200,
    "stock":4,
    "img":"img/rines_2.jpg"
    },

    {
    "id":"16",
    "idCategoria":"Rines",
    "nombre":"Rin",
    "marca":"",
    "modelo":"",
    "precio":1500,
    "stock":4,
    "img":"img/rines_3.jpg"
    },

    {
    "id":"17",
    "idCategoria":"Rines",
    "nombre":"Rin",
    "marca":"",
    "modelo":"",
    "precio":2000,
    "stock":4,
    "img":"img/rines_4.jpg"
    },

    {
    "id":"18",
    "idCategoria":"Rines",
    "nombre":"Rin",
    "marca":"",
    "modelo":"",
    "precio":2000,
    "stock":4,
    "img":"img/rines_5.jpg"
    },

    {
    "id":"19",
    "idCategoria":"4",
    "nombre":"Rines",
    "marca":"",
    "modelo":"",
    "precio":1700,
    "stock":4,
    "img":"img/rines_6.jpg"
    },

    {
    "id":20,
    "idCategoria": "Aceite",
    "nombre": "Aceites",
    "marca": "",
    "modelo": "",
    "precio": 80,
    "stock": 8,
    "img": "img/aceite-1.jpg"
    },

    {
    "id":21,
    "idCategoria":"Aceite",
    "nombre": "Aceites",
    "marca": "",
    "modelo": "",
    "precio": 80,
    "stock": 8,
    "img": "img/aceite_2.jpg"
    },

    {
    "id":22,
    "idCategoria":"Aceite",
    "nombre":"Aceites",
    "marca":"",
    "modelo":"",
    "precio":85,
    "stock":3,
    "img":"img/aceite_3.jpg"
    },
    
    {
    "id":23,
    "idCategoria":"Aceite",
    "nombre":"Aceites",
    "marca":"",
    "modelo":"",
    "precio":85,
    "stock":3,
    "img":"img/aceite_4.jpg"
    },

    {
    "id":24,
    "idCategoria":"Refrigerantes",
    "nombre":"Refrigerante",
    "marca":"",
    "modelo":"",
    "precio":50,
    "stock":4,
    "img":"img/refri_1.jpg"
    },

    {
    "id":25,
    "idCategoria":"Refrigerantes",
    "nombre":"Refrigerante",
    "marca":"",
    "modelo":"",
    "precio":50,
    "stock":1,
    "img":"img/refri_3.jpg"
    },

    {
    "id":26,
    "idCategoria":"Refrigerantes",
    "nombre":"Refrigerante",
    "marca":"",
    "modelo":"",
    "precio":50,
    "stock":2,
    "img":"img/refri_2.jpg"
    },
    
    {
    "id":27,
    "idCategoria":7,
    "nombre":"Herramientas",
    "marca":"",
    "modelo":"",
    "precio":50,
    "stock":2,
    "img":"img/h3.jpg"
    },

    {
    "id":28,
    "idCategoria":7,
    "nombre":"Herramientas",
    "marca":"",
    "modelo":"",
    "precio":100,
    "stock":2,
    "img":"img/h2.jpg"
    },

    {
    "id":29,
    "idCategoria":7,
    "nombre":"Herramientas",
    "marca":"",
    "modelo":"",
    "precio":120,
    "stock":2,
    "img":"img/h1.jpg"
    },

    {
    "id":30,
    "idCategoria":"Asientos",
    "nombre":"Asientos",
    "marca":"",
    "modelo":"",
    "precio":600,
    "stock":6,
    "img":"img/asientos_1.jpg"
    },

    {
    "id":31,
    "idCategoria":"Asientos",
    "nombre":"Asientos",
    "marca":"",
    "modelo":"",
    "precio":550,
    "stock":6,
    "img":"img/asientos_2.jpg"
    },

    {
    "id":32,
    "idCategoria":"Asientos",
    "nombre":"Asientos",
    "marca":"",
    "modelo":"",
    "precio":1100,
    "stock":4,
    "img":"img/asientos_4.jpg"
    },

    {
    "id":33,
    "idCategoria":9,
    "nombre":"Faros delanteros",
    "marca":"",
    "modelo":"",
    "precio":350,
    "stock":4,
    "img":"img/faros_3.jpg"
    },

    {
    "id":34,
    "idCategoria":9,
    "nombre":"Faros delanteros",
    "marca":"",
    "modelo":"",
    "precio":200,
    "stock":10,
    "img":"img/faros_2.jpg"
    },

    {
    "id":35,
    "idCategoria":9,
    "nombre":"Faros delanteros",
    "marca":"",
    "modelo":"",
    "precio":170,
    "stock":8,
    "img":"img/faros_1.jpg"
    }

]
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        const promesa =() => new Promise((resolve,reject)=>{
            if(true){
                resolve(BDD)
            }
            reject("No tiene los permisos necesarios")
        })
        promesa()
        .then(productos => console.log(productos))
        .catch(error => console.log(error))
    })
}

export default ItemListContainer