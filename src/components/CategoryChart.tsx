// Importing necessary hooks, components, and utilities
import { useStore } from '@nanostores/react'; // Hook to access reactive state from nanostores
import React from 'react'; // React library for building UI components
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts'; // Recharts library for creating charts
import type { Product } from 'types'; // TypeScript type for Product
import {
  getCategories,
  getTotalStock,
  groupByCategory,
  getRating,
} from 'utils/product'; // Utility functions for product-related operations
import { hiddenCategories } from 'utils/state'; // Reactive state for hidden categories
import randomColor from 'randomcolor'; // Library to generate random colors
import { humanize } from 'utils/string'; // Utility function to format strings
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'; // Material-UI component for grouped toggle buttons
import ToggleButton from '@mui/material/ToggleButton'; // Material-UI component for individual toggle buttons

// Inline style for the legend positioning
const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '30px',
};

// Props type definition for the component
type Props = {
  products: Product[]; // Array of products passed as a prop
};

// Type definition for the view state
type View = 'stock' | 'rating'; // View can either be 'stock' or 'rating'

// Main functional component
const CategoryChart = (props: Props) => {
  // State to manage the current view ('stock' or 'rating')
  const [view, setView] = React.useState<View>('stock');

  // Accessing the reactive state for hidden categories
  const disabledCategories = useStore(hiddenCategories);

  // Extracting all categories from the products
  const categories = getCategories(props.products);

  // Grouping products by their categories
  const groupedByCategory = groupByCategory(props.products);

  // Preparing data for the chart
  const data = categories
    .filter((category) => !disabledCategories.includes(category)) // Exclude hidden categories
    .map((category) => ({
      name: humanize(category), // Human-readable category name
      stock: getTotalStock(groupedByCategory[category]!), // Total stock for the category
      rating: getRating(groupedByCategory[category]!), // Average rating for the category
      fill: randomColor({ seed: category, luminosity: 'dark' }), // Generate a consistent random color for the category
    }));

  // Rendering the component
  return (
    <>
      {/* Container for the chart */}
      <div style={{ width: '100%', height: 400, position: 'relative' }}>
        {/* Responsive container to ensure the chart scales with the parent */}
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%" // Center X position
            cy="50%" // Center Y position
            innerRadius="20%" // Inner radius of the chart
            outerRadius="80%" // Outer radius of the chart
            barSize={15} // Thickness of the bars
            data={data} // Data to be visualized
          >
            {/* Radial bar configuration */}
            <RadialBar
              minAngle={15} // Minimum angle for each bar
              label={{ position: 'insideStart', fill: '#fff' }} // Label inside the bar
              background // Enable background for bars
              dataKey={view} // Key to determine which data ('stock' or 'rating') to display
            />

            {/* Legend configuration */}
            <Legend
              iconSize={20} // Size of the legend icons
              layout="vertical" // Vertical layout for the legend
              verticalAlign="middle" // Align legend in the middle
              wrapperStyle={style} // Custom style for the legend
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* Toggle button group to switch between 'stock' and 'rating' views */}
        <ToggleButtonGroup
          style={{ position: 'absolute', top: 0 }} // Positioning the toggle buttons
          color="primary" // Primary color for the buttons
          value={view} // Current selected view
          exclusive // Ensure only one button can be selected at a time
          onChange={(_, val) => val && setView(val)} // Update the view state when a button is clicked
        >
          <ToggleButton value="stock">Stock</ToggleButton> {/* Button for 'stock' view */}
          <ToggleButton value="rating">Rating</ToggleButton> {/* Button for 'rating' view */}
        </ToggleButtonGroup>
      </div>
    </>
  );
};

// Exporting the component as the default export
export default CategoryChart;
