// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
// }

// function filterProducts<T extends keyof Product>(
//   products: Product[],
//   criterion: T,
//   value: Product[T]
// ): Product[] {
//   return products.filter((product) => product[criterion] === value);
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 10,
//     category: "Category 1",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 20,
//     category: "Category 2",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     price: 30,
//     category: "Category 3",
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     price: 40,
//     category: "Category 4",
//   }
// ];

// const filteredProducts = filterProducts(products, "category", "Category 2");
// console.log(filteredProducts);
