import { Search } from "lucide-react";
import DishCard from "../components/DishCard";
import { useEffect } from "react";
import { useState } from "react";
import SkeletonCard from "../components/SkeletonCard";
import getRandomColor from "../lib/utils.js";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const HomePage = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDishes = async (query) => {
    setLoading(true);
    setDishes([]);
    try {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}&type=public`);
      const data = await res.json();
      setDishes(data.hits);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchDishes("Moroccan Couscous");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    fetchDishes(query);
  };

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearch}>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={24} />
            <input type="text" className="text-sm md:text-md grow" placeholder="What do you want to cook today ?" />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">Recommended Dishes</h1>

        <p className="text-slate-450 font-semibold ml-1 my-2 text-sm tracking-tight">Popular Choices</p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading && [...Array(9)].map((_, index) => <SkeletonCard key={index} />)}

          {dishes.map(({ recipe }, index) => (
            <DishCard key={index} dish={recipe} {...getRandomColor()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
