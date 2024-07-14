import { Soup, Heart, HeartPulse } from "lucide-react";
import { useState } from "react";

const getTowHealthLabels = (healthLabels) => {
  if (healthLabels.length > 2) {
    return [healthLabels[0], healthLabels[1]];
  } else {
    return healthLabels;
  }
};
const DishCard = ({ dish, bg, badge }) => {
  const healthLabels = getTowHealthLabels(dish.healthLabels);

  const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorites")?.includes(dish.label));

  const handleFavoritesBtn = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isDishInFavorites = favorites.some((fav) => fav.label === dish.label);

    if (isDishInFavorites) {
      favorites = favorites.filter((fav) => fav.label !== dish.label);
      setIsFavorite(false);
    } else {
      favorites.push(dish);
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  return (
    <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
      <a href={`https://www.youtube.com/results?search_query=${dish.label} recipe`} className="relative h-32" target="_blank">
        <div className="skeleton absolute inset-0" />
        <img
          src={dish.image}
          alt="dish image"
          className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
        />

        <div className="absolute left-2 bottom-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} /> {dish.yield} Servings
        </div>

        <div
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            handleFavoritesBtn();
          }}
        >
          {!isFavorite && <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />}

          {isFavorite && <Heart size={20} className="fill-red-500 text-red-500" />}
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{dish.label}</p>
      </div>
      <p className="my-2">{dish.cuisineType[0].charAt(0).toUpperCase() + dish.cuisineType[0].slice(1)}</p>

      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, idx) => (
          <div key={idx} className={`flex gap-1 items-center p-1 rounded-md ${badge}`}>
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">{label}</span>
          </div>
        ))}
      </div>

      <a href={dish.url} target="_blank" className="mt-2 inline-block bg-indigo-400 rounded-md p-2 text-center hover:bg-indigo-500 transition-colors">
        More details (source)
      </a>
    </div>
  );
};

export default DishCard;
