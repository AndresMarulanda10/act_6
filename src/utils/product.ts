// groups an array of products by category, returning an object with category keys
export const groupByCategory = (
  products: Product[],
): Record<string, Product[]> => {
  return products.reduce((acc, curr) => {
    const existingCategory = acc[curr.category];
    acc[curr.category] = existingCategory ? existingCategory.concat(curr) : [curr];
    return acc;
  }, {} as Record<string, Product[]>);
};

// returns an array of unique category names from the products
export const getCategories = (products: Product[]): string[] => {
  const categoriesMap = products.reduce((acc, curr) => {
    acc[curr.category] = true;
    return acc;
  }, {} as Record<string, boolean>);
  return Object.keys(categoriesMap);
};

// calculates total stock by summing all product stocks
export const getTotalStock = (products: Product[]) => {
  return products.reduce((acc, curr) => acc + curr.stock, 0);
};

// computes the average rating of the products, rounded to two decimals
export const getRating = (products: Product[]) => {
  const avg = products.reduce((acc, curr) => acc + curr.rating, 0) / products.length;
  return Math.round(avg * 100) / 100;
};

// returns an array of unique brand names from the products
export const getBrands = (products: Product[]) => {
  const brandsMap = products.reduce((acc, curr) => {
    acc[curr.brand] = true;
    return acc;
  }, {} as Record<string, boolean>);
  return Object.keys(brandsMap);
};
