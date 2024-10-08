import { useState } from "react";
import DishCard from "../components/DishCard";
import getRandomColor from "../lib/utils.js";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const removeFromFavorites = (label) => {
    const updatedFavorites = favorites.filter((fav) => fav.label !== label);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

        {favorites.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/404.svg" className="h-3/4" alt="404 svg" />
            <p className="text-center text-lg font-semibold">Opps! No favorites yet.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((recipe, index) => (
            <DishCard key={index} dish={recipe} {...getRandomColor()} onRemoveFromFavorites={removeFromFavorites} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
