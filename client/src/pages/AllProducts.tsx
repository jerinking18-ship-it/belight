import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import FilterSection from "../components/FilterSection";

const AllProducts: React.FC = () => {
  const { searchQuery, products } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name
            .toLocaleLowerCase()
            .includes(searchQuery.toLocaleLowerCase()),
        ),
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  const handleFilterChange = (filters: any) => {
    let updated = [...products];

    if (filters.categories.length > 0) {
      updated = updated.filter((p) =>
        filters.categories.some(
          (c: string) => c.toLowerCase() === (p.category || "").toLowerCase(),
        ),
      );
    }

    if (filters.brands.length > 0) {
      updated = updated.filter((p) =>
        filters.brands.some(
          (n: string) => n.toLowerCase() === (p.name || "").toLowerCase(),
        ),
      );
    }

    if (filters.price) {
      updated = updated.filter((p) => p.price <= filters.price);
    }

    if (filters.rating) {
      updated = updated.filter((p) => p.ratings >= filters.rating);
    }

    setFilteredProducts(updated);
  };
  return (
    <div className="flex">
      <FilterSection onFilterChange={handleFilterChange} />
      <div className="mt-8 flex flex-col pl-4">
        <div className="flex flex-col items-end w-max">
          <p className="text-2xl font-medium text-sb">
            All Products
            <div className="w-16 h-0.5 bg-primary1 rounded-full "></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-3 lg:grid-cols-5 mt-6">
              {filteredProducts
                .filter((product) => product.inStock)
                .map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
