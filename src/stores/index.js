import { AuthStore } from './Auth'
import { ProductsStore } from './Products'
import { ShoppingCartStore } from './ShoppingCart'
import { ProductModel } from '../models/Product'

const authStore = AuthStore.create()
const shoppingCartStore = ShoppingCartStore.create({ products: [] })

const productsStore = ProductsStore.create({
  data: [
    ProductModel.create({
      id: '1',
      name: 'Red Apple',
      imageUrl: require('../../assets/img/products/apple.png'),
      kgPrice: 10.12,
      unityPrice: 1.9,
    }),
    ProductModel.create({
      id: '2',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '3',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '4',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '5',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '6',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '7',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '8',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '9',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '10',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '12',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '13',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '14',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '15',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '16',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    }),
    ProductModel.create({
      id: '17',
      name: 'Tomato',
      imageUrl: require('../../assets/img/products/tomato.png'),
      kgPrice: 9.51,
      unityPrice: 1.25,
    })
  ]
})

export const store = {
  authStore,
  shoppingCartStore,
  productsStore
}

window.MobxStore = store