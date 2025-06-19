// src/context/FeaturedItemsContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

type FeaturedItemsContextType = {
  hasFeaturedItems: boolean;
  checkFeaturedItems: () => Promise<void>;
};

const FeaturedItemsContext = createContext<FeaturedItemsContextType>({
  hasFeaturedItems: false,
  checkFeaturedItems: async () => {},
});

export const useFeaturedItems = () => useContext(FeaturedItemsContext);

export const FeaturedItemsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [hasFeaturedItems, setHasFeaturedItems] = useState(false);

  const checkFeaturedItems = async () => {
    try {
      const response = await axios.get("https://abeer.onrender.com/api/livestream-gallery");
      const hasFeatured = response.data.some((item: any) => item.isFeatured);
      setHasFeaturedItems(hasFeatured);
    } catch (error) {
      console.error("Error checking featured items:", error);
      setHasFeaturedItems(false);
    }
  };

  useEffect(() => {
    checkFeaturedItems();
  }, []);

  return (
    <FeaturedItemsContext.Provider value={{ hasFeaturedItems, checkFeaturedItems }}>
      {children}
    </FeaturedItemsContext.Provider>
  );
};