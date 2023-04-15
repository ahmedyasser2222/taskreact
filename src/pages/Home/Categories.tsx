import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import Button from "../../components/Button";
import axios from "axios";
import { ProductsContext } from "../../context/Products";

interface CategoriesProps {
  filterByCategory?: (e: string) => void;
  // setCategory : Dispatch<SetStateAction<string>>
}

const Categories: React.FC<CategoriesProps> = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonActive, setButtonActive] = useState<number>(1);
  const { setProducts } = useContext(ProductsContext);

  useEffect(() => {
    async function getData() {
      try {
        const data = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(data.data);
        setLoading(true);
      } catch (error) {
        alert("error");
      }
    }
    getData();
  }, []);

  const getProductByCategory = async (index = 1, category = "") => {
    setButtonActive(index + 2);
    if (category === "") {
      const data = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(data.data);
    } else {
      const data = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setProducts(data.data);
    }
  };

  return (
    <div className="filter">
      {loading ? (
        <>
          <Button
            text="All"
            outline={buttonActive === 1 ? false : true}
            onClick={() => getProductByCategory(-1)}
          />
          {categories.length >= 1 &&
            categories.map((cat, index) => (
              <Button
                key={index}
                text={cat}
                outline={buttonActive === index + 2 ? false : true}
                onClick={() => getProductByCategory(index, cat)}
              />
            ))}
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Categories;
