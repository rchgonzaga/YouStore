import { types } from 'mobx-state-tree'
import { ProductModel } from '../models/Product'

export const ShoppingCartStore = types
    /**
     * Model
     */
    .model('ShoppinCartStore', {
        products: types.array(types.reference(ProductModel)),
    })

    /**
     * View
     */
    .views(self => ({
        get totalProducts() {
            return self.products.length
        },
        get totalAmount() {
          return self.products
            .reduce((acc, current) => acc + parseFloat(current.totalPrice), 0)
            .toFixed(2);
        },
        /**
         * Flatlist expect real arrays - Mobx works with a different one
         */
        get productsList() {
          return self.products.slice();
        },
    }))

    /**
     * Actions
     */
    .actions(self => ({
        addProduct(product) {
            const entry = self.products.find(el => el.id === product.id)

            if (!entry) {
                self.products.push(product)
            }
        },
        removeProduct(product) {
            self.products = self.products.filter(el => el.id !== product.id)
        },
    }))