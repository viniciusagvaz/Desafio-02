export const productList = (productCategory, productClass) =>
  productCategory.map(
    (product) =>
      new productClass(
        product.id,
        product.picture,
        product.stars,
        product.title,
        product.inSale,
        product.price,
        product.discount
      )
  );
