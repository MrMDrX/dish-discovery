const SkeletonCard = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="skeleton h-32 w-full"></div>
      <div className="flex justify-between">
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-24"></div>
      </div>
      <div className="skeleton h-4 w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
