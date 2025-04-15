// Importing the `useStore` hook from the `@nanostores/react` library to manage state.
// Importing `ReactNode` type for typing children props.
// Importing a utility function `isFrameworkVisible` to manage the visibility state of frameworks.
// Importing a utility function `humanize` to format framework names.
// Importing the `Fab` component from Material-UI for a floating action button.
import { useStore } from '@nanostores/react';
import type { ReactNode } from 'react';
import { isFrameworkVisible } from '../utils/state';
import { humanize } from '../utils/string';
import Fab from '@mui/material/Fab';

// A mapping of framework names to their respective Tailwind CSS background color classes.
const FRAMEWORK_COLOR_MAP = {
  react: 'tw-bg-blue-400', // React is blue.
  svelte: 'tw-bg-orange-400', // Svelte is orange.
  vue: 'tw-bg-green-400', // Vue is green.
};

// A React component that toggles the visibility of framework-specific highlights.
export const HighlighterToggle = () => {
  // Using the `useStore` hook to subscribe to the `isFrameworkVisible` state.
  const visible = useStore(isFrameworkVisible);

  return (
    // A floating action button (FAB) positioned at the bottom-right corner of the screen.
    <Fab
      style={{ position: 'fixed', bottom: 40, right: 40 }} // Inline styles for positioning.
      color="primary" // Material-UI prop for primary color.
      aria-label="Show framework" // Accessibility label for the button.
      onClick={() => isFrameworkVisible.set(!visible)} // Toggles the visibility state on click.
    >
      {/* Conditionally rendering an SVG icon based on the visibility state. */}
      {visible ? (
        // SVG icon for "visible" state (an eye with a slash).
        <svg
          className="tw-w-6 tw-h-6" // Tailwind CSS classes for size.
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      ) : (
        // SVG icon for "hidden" state (an eye).
        <svg
          className="tw-w-6 tw-h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      )}
    </Fab>
  );
};

// Type definition for the `HighlighterWrapper` component props.
type Props = {
  framework: 'react' | 'svelte' | 'vue'; // Framework name (limited to these three).
  children: ReactNode; // Children elements to be wrapped.
  className?: string; // Optional additional CSS classes.
};

// A React component that wraps children with a framework-specific highlight.
export const HighlighterWrapper = ({
  children,
  framework,
  className,
}: Props) => {
  // Using the `useStore` hook to subscribe to the `isFrameworkVisible` state.
  const visible = useStore(isFrameworkVisible);

  // Determine the background color based on the framework and visibility state.
  const color = visible ? FRAMEWORK_COLOR_MAP[framework] : 'tw-bg-inherit';

  // Determine the visibility class for the framework label.
  const display = visible ? 'tw-visible' : 'tw-invisible';

  return (
    children && (
      // A container div with relative positioning and optional custom classes.
      <div className={`tw-relative ${className}`}>
        {/* A wrapper div with padding and the framework-specific background color. */}
        <div className={`tw-p-1 ${color}`}>
          {/* A white background for the children content, with rounded corners and margin. */}
          <div className="tw-bg-white tw-rounded m-1">{children}</div>
        </div>

        {/* A label displaying the humanized framework name, positioned absolutely. */}
        <span
          className={`tw-w-fit tw-p-1 tw-absolute tw-right-0 tw-bottom-30 tw-z-10 ${color} ${display}`}
        >
          {humanize(framework)} {/* Converts the framework name to a human-readable format. */}
        </span>
      </div>
    )
  );
};
