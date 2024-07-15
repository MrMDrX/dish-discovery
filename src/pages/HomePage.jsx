import DishCard from "../components/DishCard";
import { useEffect } from "react";
import { useState } from "react";
import SkeletonCard from "../components/SkeletonCard";
import getRandomColor from "../lib/utils.js";
import { Search, X } from "lucide-react";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const HomePage = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("Moroccan Couscous");

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDishes(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDishes(searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery("");
    fetchDishes("Moroccan Couscous");
  };

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearch} className="flex items-center">
          <label className="input shadow-md flex items-center gap-2 flex-grow relative">
            <input type="text" className="text-sm md:text-md grow pl-3 pr-10" placeholder="What do you want to cook today?" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="absolute right-2 text-blue-500 focus:outline-none">
              <Search size={24} />
            </button>
          </label>
          <button type="button" onClick={clearSearch} className="btn btn-circle ml-2 text-red-500">
            <X size={24} />
          </button>
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
