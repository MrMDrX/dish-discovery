import { Soup, Heart, HeartPulse } from "lucide-react";

const DishCard = ({ dish, bg, badge }) => {
  const healthLabels = [dish.healthLabels[0], dish.healthLabels[1]];
  return (
    <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
      <a href={`https://www.youtube.com/results?search_query=${dish.label} recipe`} className="relative h-32" target="_blank">
        <img src={dish.image} alt="dish image" className="rounded-md w-full h-full object-cover cursor-pointer" />
        <div className="absolute left-2 bottom-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} /> {dish.yield} Servings
        </div>

        <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
          <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
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
    </div>
  );
};

export default DishCard;
