import React, { useState, type FormEvent } from "react";
import { categories } from "../../assets/assets";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddProduct: React.FC = () => {
  const [files, setFiles] = React.useState<(File | null)[]>(
    Array(4).fill(null),
  );
  const [name, setName] = useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = React.useState("");
  const { axios } = useAppContext();
  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const productData = {
        name,
        description: description.split("\n"),
        category,
        price,
        offerPrice,
      };
      const formData = new FormData();
      formData.append("productData", JSON.stringify(productData));
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i] as File);
      }
      const { data } = await axios.post("/api/product/add", formData);
      if (data.success) {
        toast.success(data.message);
        setName("");
        (setDescription(""),
          setCategory(""),
          setPrice(""),
          setOfferPrice(""),
          setFiles([]));
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
    <div>
      {" "}
      <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
        <form
          onSubmit={onSubmitHandler}
          className="md:p-10 p-4 space-y-5 max-w-lg text-sb "
        >
          <div>
            <p className="text-base font-medium">Product Image</p>
            <div className="flex flex-wrap items-center gap-3 mt-2  ">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <label
                    key={index}
                    htmlFor={`image${index}`}
                    className="border border-dashed border-primary3 w-24 h-18 flex items-center justify-center cursor-pointer bg-primary/20"
                  >
                    <input
                      onChange={(e) => {
                        const updatedFiles = [...files];
                        const file = e.target.files?.[0] || null;
                        updatedFiles[index] = file;
                        setFiles(updatedFiles);
                      }}
                      accept="image/*"
                      type="file"
                      id={`image${index}`}
                      hidden
                    />
                    {files[index] ? (
                      <img
                        className="max-w-24 cursor-pointer"
                        src={URL.createObjectURL(files[index])}
                        alt="uploadArea"
                        width={100}
                        height={100}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-sm text-sb/80">
                        <FaCloudUploadAlt className="text-[#b23335ff]/40 text-[24px]" />
                        <p>Upload</p>
                      </div>
                    )}
                  </label>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 max-w-md text-bs">
            <label className="text-base font-medium" htmlFor="product-name">
              Product Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="product-name"
              type="text"
              placeholder="Type here"
              className="focus:outline focus:outline-3 focus:outline-primary md:py-2.5 py-2 px-3 rounded border border-primary"
              required
            />
          </div>
          <div className="flex flex-col gap-1 max-w-md">
            <label
              className="text-base font-medium"
              htmlFor="product-description"
            >
              Product Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="product-description"
              rows={4}
              className="focus:outline focus:outline-3 focus:outline-primary md:py-2.5 py-2 px-3 rounded border border-primary resize-none"
              placeholder="Type here"
            ></textarea>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="category">
              Category
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              id="category"
              className="focus:outline focus:outline-3 focus:outline-primary md:py-2.5 py-2 px-3 rounded border border-primary"
            >
              <option value="">Select Category</option>
              {categories.map((item, index) => (
                <option key={index} value={item.path}>
                  {item.path}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex-1 flex flex-col gap-1 w-32">
              <label className="text-base font-medium" htmlFor="product-price">
                Product Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                id="product-price"
                type="number"
                placeholder="0"
                className="focus:outline focus:outline-3 focus:outline-primary md:py-2.5 py-2 px-3 rounded border border-primary"
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1 w-32">
              <label className="text-base font-medium" htmlFor="offer-price">
                Offer Price
              </label>
              <input
                onChange={(e) => setOfferPrice(e.target.value)}
                value={offerPrice}
                id="offer-price"
                type="number"
                placeholder="0"
                className="focus:outline focus:outline-3 focus:outline-primary md:py-2.5 py-2 px-3 rounded border border-primary"
                required
              />
            </div>
          </div>
          <button className="px-8 py-2.5 bg-sb text-bgw font-medium rounded cursor-pointer">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
