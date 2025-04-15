<script lang="ts">
  // Importing the DataTable component and its subcomponents (Head, Body, Row, Cell) from the '@smui/data-table' library.
  import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

  // Importing the Product type definition for TypeScript type checking.
  import type { Product } from 'types';

  // Importing a reactive store or state variable `hiddenCategories` from the 'utils/state' module.
  // This is likely used to determine which product categories should be hidden.
  import { hiddenCategories } from 'utils/state';

  // Importing a utility function `humanize` from the 'utils/string' module.
  // This function is probably used to format or prettify strings (e.g., converting "some_text" to "Some Text").
  import { humanize } from 'utils/string';

  // Declaring a `products` prop that will be passed into this Svelte component.
  // The `products` prop is an array of `Product` objects.
  export let products: Product[];
</script>

<!-- Rendering a DataTable component with 100% width -->
<DataTable style="width: 100%;">
  <!-- Table Header -->
  <Head>
    <Row>
      <!-- Defining column headers for the table -->
      <Cell style="width: 100%;">Title</Cell>
      <Cell>Category</Cell>
      <Cell>Description</Cell>
      <Cell>Price</Cell>
      <Cell>Stock</Cell>
    </Row>
  </Head>

  <!-- Table Body -->
  <Body>
    <!-- Iterating over the `products` array, filtering out products whose category is in `hiddenCategories` -->
    {#each products.filter((product) => !$hiddenCategories.includes(product.category)) as item (item.id)}
      <Row>
        <!-- Rendering the product's title -->
        <Cell>{item.title}</Cell>
        <!-- Rendering the product's category, formatted using the `humanize` function -->
        <Cell>{humanize(item.category)}</Cell>
        <!-- Rendering the product's description -->
        <Cell>{item.description}</Cell>
        <!-- Rendering the product's price, marked as numeric for proper alignment -->
        <Cell numeric>{item.price}</Cell>
        <!-- Rendering the product's stock, also marked as numeric -->
        <Cell numeric>{item.stock}</Cell>
      </Row>
    {/each}
  </Body>
</DataTable>