import { Soup, Heart, HeartPulse } from "lucide-react";

const DishCard = () => {
  return (
    <div className="flex flex-col rounded-md bg-[#ecfdc7] overflow-hidden p-3 relative">
      <a href="#" className="relative h-32 ">
        <img src="/1.jpg" alt="dish image" className="rounded-md w-full h-full object-cover cursor-pointer" />
        <div className="absolute left-2 bottom-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} /> 4 Servings
        </div>

        <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
          <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">Italian Pizza</p>
      </div>
      <p className="my-2">Italian Kitchen</p>

      <div className="flex gap-2 mt-auto">
        <div className={`flex gap-1 items-center p-1 rounded-md bg-[#d6f497]`}>
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">Heart-healthy</span>
        </div>

        <div className={`flex gap-1 items-center p-1 rounded-md bg-[#d6f497]`}>
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">Gluten-free</span>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
