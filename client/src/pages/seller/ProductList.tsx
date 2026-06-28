import React from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ProductList: React.FC = () => {
  const { products, axios, fetchProducts } = useAppContext();

  const toogleStock = async (id: string, inStock: boolean) => {
    try {
      const { data } = await axios.post("/api/product/stock", { id, inStock });
      if (data.success) {
        fetchProducts();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      {" "}
      <div className="flex-1 py-10 flex flex-col justify-between pt-1">
        <div className="w-full md:p-10 p-4">
          <h2 className="pb-4 text-lg font-medium text-sb">All Products</h2>
          <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden  bg-white border border-primary">
            <table className="md:table-auto table-fixed w-full overflow-hidden">
              <thead className="text-sb text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold truncate">Product</th>
                  <th className="px-4 py-3 font-semibold truncate">Category</th>
                  <th className="px-4 py-3 font-semibold truncate hidden md:block">
                    Selling Price
                  </th>
                  <th className="px-4 py-3 font-semibold truncate">In Stock</th>
                </tr>
              </thead>
              <tbody className="text-sm text-sb/70">
                {products.map((product) => (
                  <tr key={product._id} className="border-t border-primary">
                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                      <div className="border border-b/50 rounded overflow-hidden">
                        <img
                          src={product.image[0]}
                          alt="Product"
                          className="w-26 h-18"
                        />
                      </div>
                      <span className="truncate max-sm:hidden w-full text-b">
                        {product.name}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-b">{product.category}</td>
                    <td className="px-4 py-3 max-sm:hidden text-b">
                      ${product.offerPrice}
                    </td>
                    <td className="px-4 py-3">
                      <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                        <input
                          onClick={() =>
                            toogleStock(product._id, !product.inStock)
                          }
                          checked={product.inStock}
                          type="checkbox"
                          className="sr-only peer"
                        />
                        <div className="w-12 h-7 bg-primary2 rounded-full peer peer-checked:bg-sb transition-colors duration-200"></div>
                        <span className="dot absolute left-1 top-1 w-5 h-5 bg-bgw rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
