import { Categoria } from "../interfaces/categorias";

export const CATEGORIAS: Categoria[]=[
    
    {
        nombre:'Hamburguesas', 
        id:1, 
        imgUrl:'https://s2.ppllstatics.com/diariovasco/www/multimedia/202205/18/media/cortadas/burger-RtwN88WBAR2yhwDHASHLf2L-1248x770@Diario%20Vasco.jpg',
        productos:[{
            nombre:"hamburguesa 1",
            precio:3000,
            ingredientes:["chedar","queso"],
            imagen:"https://cnnespanol.cnn.com/wp-content/uploads/2023/04/image-101.png",
            id:1

            },
            {
                nombre:"hamburguesa 2",
            precio:3500,
            ingredientes:["lechuga","tomate"],
            imagen:"https://i.ytimg.com/vi/F6cM7Bbv920/maxresdefault.jpg",
            id:2

            },
            {
            nombre:"hamburguesa 3",
            precio:3200,
            ingredientes:["cebolla","queso","doble carne"],
            imagen:"https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2023/05/Burger-Palusa-Planeta-Urbano-2023-apertura.jpg?resize=1250%2C781&ssl=1",
            id:3
        }
        
        ]
    },
    {
        nombre:'Pizzas',
        id:2, 
        imgUrl:'https://hips.hearstapps.com/hmg-prod/images/close-up-of-pizza-on-table-royalty-free-image-995467932-1559051477.jpg?resize=2048:*',
        productos:[{
            nombre:"pizza napolitana",
            precio: 1500,
            ingredientes:["tomate", "queso", "aceituna"],
            imagen:"https://assets.elgourmet.com/wp-content/uploads/2023/03/8metlvp345_portada-pizza-1024x686.jpg.webp",
            id: 4,
        },
        {
            nombre:"pizza de peperoni",
            precio: 1500,
            ingredientes:["peperoni", "oregano", "queso"],
            imagen:"https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale",
            id: 5
        },
        {
            nombre:"pizza de fugazetta",
            precio: 1500,
            ingredientes:["queso", "cebolla"],
            imagen:"https://queapetito.com/wp-content/uploads/2019/07/pizza-2.jpg",
            id: 6
        }
    ]
    },
    {
        nombre:'Postres', 
        id:3, 
        imgUrl:'https://okdiario.com/img/2021/03/05/recetas-chocolate-655x368.jpg',
        productos:[
            {
                nombre: "cheescake",
                precio: 1000,
                ingredientes:[],
                imagen: "https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_w57l6qc9hj_iv-29-dic-54-1024x683.jpg.webp",
                id:7
            },
            {
                nombre:"flan con dulce de leche",
                precio: 950, 
                ingredientes:[],
                imagen:"https://www.recetasderechupete.com/wp-content/uploads/2015/07/flan_de_huevo.jpg",
                id:8
            },
            {
                nombre:"tarta de manzana",
                precio: 900, 
                ingredientes:[],
                imagen:"https://www.recetasderechupete.com/wp-content/uploads/2017/03/Tarta-de-manzana-cl%C3%A1sica.jpg",
                id:9
            }
         
        ]
    },
    {
        nombre:'Bebidas', 
        id:4, 
        imgUrl:'https://img.cruisecritic.net/cms-sb/f/1005231/1b61993d30/royal-caribbean-international_beverage-package_drinks_beer_128836.jpg?auto=compress%2Cformat&fp-z=1&h=533&w=800&ar=3%3A2&dpr=2.625&q=15&ixlib=react-9.0.2',
        productos:[
            {
            nombre: "coca cola",
            precio: 1000,
            ingredientes:[],
            imagen:"https://media.istockphoto.com/id/1282528032/es/v%C3%ADdeo/primer-plano-de-verter-cola-fr%C3%ADa-con-cubitos-de-hielo-y-burbujas.jpg?s=640x640&k=20&c=0b9HuORlQ-DgxubTFLqTo6fzCHpI3KNoRuraC96U3I4=",
            id:10,
            },
            {
            nombre: "seven up",
            precio: 900,
            ingredientes:[],
            imagen:"https://www.7up.com/images/recipes/hero/ultra-uncola_hero_m.jpg",
            id:11,
            },
            {
            nombre: "fanta",
            precio: 800,
            ingredientes:[],
            imagen:"https://www.diariodesevilla.es/2020/08/20/vital/refrescante-vaso-Fanta_1493861173_124885446_1200x675.jpg",
            id:12,
            },
        ]
    },

]
      

