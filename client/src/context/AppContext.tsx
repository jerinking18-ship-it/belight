import React, { createContext, useContext, useEffect, useState } from "react";
import { type dummyTypes } from "../assets/assets";
import { type OrderType } from "../assets/assets";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios, { type AxiosStatic } from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

interface MyContextProvidersProps {
  children: React.ReactNode;
}
interface UserType {
  name: string;
  email: string;
  password: string;
}

interface AppContextType {
  navigate: NavigateFunction;
  orders: OrderType[];
  setOrders: React.Dispatch<React.SetStateAction<OrderType[]>>;
  products: dummyTypes[];
  setProducts: React.Dispatch<React.SetStateAction<dummyTypes[]>>;
  searchQuery: any | null[];
  setSearchQuery: React.Dispatch<React.SetStateAction<any[]>>;
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  showUserLoggedIn: boolean | null;
  setShowUserLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
  showAddress: boolean | null;
  setShowAddress: React.Dispatch<React.SetStateAction<boolean | null>>;
  isSeller: boolean | null;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean | null>>;
  cartItems: Record<string | number, number>;
  setCartItems: React.Dispatch<
    React.SetStateAction<Record<string | number, number>>
  >;
  wishlistItems: Record<string, number>;
  setWishlistItems: React.Dispatch<
    React.SetStateAction<Record<string, number>>
  >;
  addToCart: (item: string | number) => void;
  removeFromCart: (item: string | number) => void;
  addToWishlist: (item: string | number) => void;
  removeFromWishlist: (item: string | number) => void;
  updateCartItems: (item: string | number, quantity: number) => void;
  getCartAmount: () => number;
  getCartCount: () => number;
  getWishListCount: () => number;
  axios: AxiosStatic;
  fetchProducts: () => Promise<void>;
}
export const AppContext = createContext<AppContextType | null>(null);
export const AppContextProvider: React.FC<MyContextProvidersProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState<dummyTypes[]>([]);
  const [orders, setOrders] = useState<OrderType[]>([]);
  const fetchProducts = async (): Promise<void> => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data?.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  const FetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/is-auth");
      if (data.success) {
        setUser(data.user);
        setCartItems(data.user.cartItems);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setUser(null);
      }
    }
  };
  const [searchQuery, setSearchQuery] = useState<any>([]);
  const [user, setUser] = useState<any | null>();
  const [showUserLoggedIn, setShowUserLoggedIn] = useState<boolean | null>(
    false,
  );
  const [showAddress, setShowAddress] = useState<boolean | null>(false);
  const [isSeller, setIsSeller] = useState<boolean | null>(false);

  const [cartItems, setCartItems] = useState<any | null>({});
  const [wishlistItems, setWishlistItems] = useState<Record<string, number>>(
    {},
  );

  const getCartAmount = (): number => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let ItemInfo = products.find((product) => product._id === items);
      if (ItemInfo) {
        let price = ItemInfo.offerPrice ?? ItemInfo.price;
        totalAmount += price * cartItems[items];
      }
    }
    return totalAmount;
  };

  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      if (data.success) {
        setIsSeller(true);
      } else {
        setIsSeller(false);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setIsSeller(false);
      }
    }
  };
  useEffect(() => {
    FetchUser();
    fetchSeller();
    fetchProducts();
  }, []);
  useEffect(() => {
    const updateCart = async () => {
      try {
        const { data } = await axios.post(
          "/api/cart/update",
          { cartItems },
          { withCredentials: true },
        );
        if (!data.success) {
          toast.error(data.message);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
        }
      }
    };
    if (user) {
      updateCart();
    }
  }, [cartItems]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const { data } = await axios.get("/api/wishlist/get", {
          withCredentials: true,
        });

        if (data.success) {
          const converted: Record<string, number> = {};

          for (const key in data.wishlistItems) {
            converted[key] = Number(data.wishlistItems[key]);
          }

          setWishlistItems(converted);
          setIsLoaded(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchWishlist();
    }
  }, [user]);
  useEffect(() => {
    const updateWishlist = async () => {
      try {
        console.log("Sending:", wishlistItems);

        const { data } = await axios.post(
          "/api/wishlist/update",
          { wishlistItems },
          { withCredentials: true },
        );

        if (!data.success) {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (user && isLoaded) {
      updateWishlist();
    }
  }, [wishlistItems]);

  const addToCart = (itemId: string | number) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to Cart", {
      style: {
        color: "#460703ff",
      },
    });
  };

  const addToWishlist = (itemId: string | number) => {
    const id = itemId.toString();

    setWishlistItems((prev) => ({
      ...prev,
      [id]: 1,
    }));
    toast.success("Added to Wishlist", {
      style: {
        color: "#460703ff",
      },
    });
  };

  const removeFromWishlist = (itemId: string | number) => {
    const id = itemId.toString();

    setWishlistItems((prev) => {
      const updated = { ...prev };
      delete updated[id];
      toast.success("Removed from Wishlist", {
        style: {
          color: "#460703ff",
        },
      });
      return updated;
    });
  };
  const updateCartItems = (itemId: string | number, quantity: number) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated", {
      style: {
        color: "#460703ff",
      },
    });
  };

  const removeFromCart = (itemId: string | number) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    toast.success("Item removed from Cart", {
      style: {
        color: "#460703ff",
      },
    });
    setCartItems(cartData);
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };
  const getWishListCount = () => {
    return Object.keys(wishlistItems).length;
  };
  const value: AppContextType = {
    navigate,
    products,
    setProducts,
    searchQuery,
    setSearchQuery,
    user,
    setUser,
    showUserLoggedIn,
    setShowUserLoggedIn,
    isSeller,
    setIsSeller,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    updateCartItems,
    getCartCount,
    getCartAmount,
    addToWishlist,
    removeFromWishlist,
    wishlistItems,
    setWishlistItems,
    getWishListCount,
    axios,
    fetchProducts,
    orders,
    setOrders,
    showAddress,
    setShowAddress,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useContext");
  return context;
};
