<script lang="ts">
  // Importing the Chip component and its subcomponents (Set and Text) from the '@smui/chips' library.
  import Chip, { Set, Text } from '@smui/chips';

  // Importing a utility function to retrieve product categories.
  import { getCategories } from 'utils/product';

  // Importing the Product type for type-checking the products array.
  import type { Product } from 'types';

  // Importing a utility function to convert strings into a more human-readable format.
  import { humanize } from 'utils/string';

  // Importing a writable store to manage hidden categories' state.
  import { hiddenCategories } from 'utils/state';

  // Declaring a prop named `products` of type `Product[]` (array of Product objects).
  export let products: Product[];

  // Using the `getCategories` function to extract categories from the provided products.
  let categories = getCategories(products);

  // Initializing the `selected` array with all categories as selected by default.
  let selected: string[] = Array.from(categories);

  // Function to update the hidden categories based on the selected categories.
  function updateSelection() {
    hiddenCategories.set(
      categories.filter((category) => !selected.includes(category)), // Filters out selected categories to determine hidden ones.
    );
  }
</script>

<!-- Displaying a heading for the categories section. -->
<h1>Categories</h1>

<!-- 
  Rendering a Set of chips (interactive UI elements) for the categories.
  - `chips={categories}`: Passes the list of categories to the Set component.
  - `let:chip`: Binds each chip to the `chip` variable for use inside the block.
  - `filter`: Enables filtering behavior for the chips.
  - `bind:selected`: Two-way binds the selected chips to the `selected` array.
  - `on:click={updateSelection}`: Calls `updateSelection` whenever a chip is clicked.
-->
<Set
  chips={categories}
  let:chip
  filter
  bind:selected
  on:click={updateSelection}
>
  <!-- 
    Rendering each chip with its associated category.
    - `{chip}`: Passes the chip data to the Chip component.
    - `touch`: Enables touch interaction for the chip.
  -->
  <Chip {chip} touch>
    <!-- 
      Displaying the human-readable version of the chip's category name.
      - `humanize(chip)`: Converts the category name into a more readable format.
    -->
    <Text>{humanize(chip)}</Text>
  </Chip>
</Set>