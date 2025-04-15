// Imports the atom function from nanostores, used to create reactive state
import { atom } from 'nanostores';

// Creates a reactive boolean store for controlling framework visibility
export const isFrameworkVisible = atom(false);

// Creates a reactive string array store for tracking hidden categories
export const hiddenCategories = atom<string[]>([]);
