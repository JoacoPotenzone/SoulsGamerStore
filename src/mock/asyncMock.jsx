export const  products = [{
        id: 1,
        name: 'Dark Souls',
        price: 20.00,
        category: 'videogame',
        categoryId: 1,
        img:'https://www.cdmarket.com.ar/Image/0/600_750-dark-souls-remastered-ps4-1.jpg',
        stock: 15,
        description:'El primer Dark Souls, donde más famoso se hizo la creación de Hidetaka Miyazaki y donde se empezó a utilizar el termino SoulsLike para juegos parecidos a este. Un clásico.'
    },
    {
        id: 2,
        name: 'Dark Souls 2',
        price: 15.99,
        category: 'videogame',
        categoryId: 1,
        img:'https://www.portalgames.com.ar/wp-content/uploads/2020/05/dark_souls_2.jpg',
        stock: 10,
        description:'Seguramente el más díficil de la saga, los verdaderos valientes podrán completar este juego al %100, el único que no esta comandado por Miyazaki.'
    },
    {
        id: 3,
        name: 'Dark Souls 3',
        price: 24.99,
        category: 'videogame',
        categoryId: 1,
        img:'https://www.portalgames.com.ar/wp-content/uploads/2019/11/dark-souls-3.jpg',
        stock: 30,
        description:'El mejor juego de la Saga para muchos críticos, ya que combina el mapeado del primero con una parte de la dificultad del segundo, y por lejos, es el que mejores Bosses tiene.'
    },
    {id: 4, name: 'PlayStation 5', price:499.99, category :'console', categoryId: 2, img: '', stock: 20, description: 'Consola de la marca Sony, última generación.'},
    {id: 5, name:'Auriculares Razer', price: 50, category: 'accesories', categoryId: 3, img: '', stock: 30, description: 'Los auriculares Razer son de lo mejor del mercado.' }
]
console.log(products)

export const getProducts =() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
export const getProductById = (productId) =>{
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.categoryId === categoryId))
        },500)
    })
}