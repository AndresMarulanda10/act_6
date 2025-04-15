<script setup lang="ts">
import type { Product } from 'types'; 
// Importing the `Product` type definition from the 'types' module. 
// This ensures that the `products` prop adheres to the expected structure.

import { hiddenCategories } from 'utils/state'; 
// Importing a reactive store (`hiddenCategories`) that likely contains a list of categories to hide.

import { useStore } from '@nanostores/vue'; 
// Importing the `useStore` function from the `@nanostores/vue` package. 
// This is used to subscribe to and access reactive state from the `hiddenCategories` store.

import { getBrands, getTotalStock } from 'utils/product'; 
// Importing utility functions:
// - `getBrands`: Likely extracts unique brands from a list of products.
// - `getTotalStock`: Likely calculates the total stock of products.

type Props = {
  products: Product[];
};
// Defining the `Props` type for the component. 
// It expects a `products` prop, which is an array of `Product` objects.

const props = defineProps<Props>();
// Using `defineProps` to declare the `products` prop with the `Props` type. 
// This is a Vue 3 Composition API feature.

const $hiddenCategories = useStore(hiddenCategories);
// Subscribing to the `hiddenCategories` store using `useStore`. 
// `$hiddenCategories` will be reactive and update automatically when the store changes.
</script>