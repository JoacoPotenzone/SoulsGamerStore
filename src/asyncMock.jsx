const products = [
    {
        id: '1',
        name: 'Dark Souls',
        price: 20.00,
        category: 'videogame',
        img:'https://static.wikia.nocookie.net/dark-souls/images/b/b9/Dark_Souls_Portada.jpg/revision/latest?cb=20160801012652&path-prefix=es',
        stock: 15,
        description:'El primer Dark Souls, donde más famoso se hizo la creación de Hidetaka Miyazaki y donde se empezó a utilizar el termino SoulsLike para juegos parecidos a este. Un clásico.'
    },
    {
        id: '2',
        name: 'Dark Souls 2',
        price: 15.99,
        category: 'videogame',
        img:'https://static.wikia.nocookie.net/dark-souls/images/9/93/Dark_Souls_II_Portada.jpg/revision/latest?cb=20160801013021&path-prefix=es',
        stock: 10,
        description:'Seguramente el más díficil de la saga, los verdaderos valientes podrán completar este juego al %100, el único que no esta comandado por Miyazaki.'
    },
    {
        id: '3',
        name: 'Dark Souls 3',
        price: 24.99,
        category: 'videogame',
        img:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/07/dark-souls-3-caratula.jpg',
        stock: 30,
        description:'El mejor juego de la Saga para muchos críticos, ya que combina el mapeado del primero con una parte de la dificultad del segundo, y por lejos, es el que mejores Bosses tiene.'
    }
]

export const getProducts =() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}