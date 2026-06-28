import { useState } from "react";
type Props = {
  onFilterChange: (filters: any) => void;
};

export default function FilterSection({ onFilterChange }: Props) {
  const [categoryOpen] = useState(true);
  const [brandOpen] = useState(true);
  const [priceOpen] = useState(true);
  const [ratingOpen] = useState(true);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [price, setPrice] = useState(1500);
  const [rating, setRating] = useState<number | null>(null);
  const categories = ["Oil", "Honey", "Masala", "Grain", "Dryfruit", "Seed"];
  const brands = ["Aroriyam", "Achii", "Dabur", "Belight", "Tata"];

  const handleCheckbox = (
    value: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    if (list.includes(value)) {
      setList(list.filter((i) => i !== value));
    } else {
      setList([...list, value]);
    }
  };
  const applyFilters = () => {
    onFilterChange({
      categories: selectedCategories,
      brands: selectedBrands,
      price,
      rating,
    });
  };
  return (
    <div>
      <div className="w-54 md:w-54 bg-white shadow-md shadow-primary rounded p-5 border border-bgw space-y-6 mr-4 h-221 ">
        <div>
          <button className="w-full flex justify-between items-center">
            <div className="bg-primary w-full py-2 rounded">
              <span className="text-sb font-medium">Category</span>
            </div>
          </button>

          {categoryOpen && (
            <div className="mt-3 space-y-2 text-sb">
              {categories.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-sm text-bg "
                >
                  <input
                    type="checkbox"
                    onChange={() =>
                      handleCheckbox(
                        item,
                        selectedCategories,
                        setSelectedCategories,
                      )
                    }
                    className="w-4 h-4 text-sb accent-sb"
                  />
                  {item}
                </label>
              ))}
            </div>
          )}
        </div>

        <div>
          <button className="w-full flex justify-between items-center">
            <div className="bg-primary w-full py-2 rounded">
              <span className="text-sb font-medium">Brand</span>
            </div>
          </button>

          {brandOpen && (
            <div className="mt-3 space-y-2 text-sb">
              {brands.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm ">
                  <input
                    type="checkbox"
                    onChange={() =>
                      handleCheckbox(item, selectedBrands, setSelectedBrands)
                    }
                    className="w-4 h-4 accent-sb"
                  />
                  {item}
                </label>
              ))}
            </div>
          )}
        </div>

        <div>
          <button className="w-full flex justify-between items-center">
            <div className="bg-primary w-full py-2 rounded">
              <span className="font-medium text-sb">Price Range</span>
            </div>
          </button>

          {priceOpen && (
            <div className="mt-4  ">
              <input
                type="range"
                min={0}
                max={1500}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full "
              />
              <div className="flex justify-between text-xs text-sb mt-1">
                <span>₹0</span>
                <span>₹1500</span>
              </div>
              <p className="text-sb text-sm mt-2 ">
                Selected Price :{" "}
                <span className="text-primary4 font-medium">${price}</span>
              </p>
            </div>
          )}
        </div>

        {/* Rating */}
        <div>
          <button className="w-full flex justify-between items-center">
            <div className="bg-primary w-full py-2 rounded">
              <span className="text-sb font-medium">Rating</span>
            </div>
          </button>

          {ratingOpen && (
            <div className="mt-3 space-y-2 text-sb">
              {[5, 4, 3, 2, 1].map((r) => (
                <label key={r} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    onChange={() => setRating}
                    name="rating"
                    className="w-4 h-4 accent-sb"
                  />
                  {r} ★ & up
                </label>
              ))}
            </div>
          )}
        </div>

        <button
          className="w-full py-2 bg-sb text-bgw rounded hover:bg-b transition cursor-pointer"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
