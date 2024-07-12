const COLORS = {
  green: {
    bg: "bg-[#ECF7D4]",
    badge: "bg-[#D6F497]",
  },
  orange: {
    bg: "bg-[#F9EFE1]",
    badge: "bg-[#F7E0B8]",
  },
  red: {
    bg: "bg-[#FBE5E7]",
    badge: "bg-[#FDC6C7]",
  },
  blue: {
    bg: "bg-[#D6EAF8]",
    badge: "bg-[#C7D5F2]",
  },
  purple: {
    bg: "bg-[#F0F0F0]",
    badge: "bg-[#D6D6D6]",
  },
  yellow: {
    bg: "bg-[#FFF9D7]",
    badge: "bg-[#FFF0B8]",
  },
  pink: {
    bg: "bg-[#FBE5E7]",
    badge: "bg-[#FDC6C7]",
  },
  gray: {
    bg: "bg-[#F0F0F0]",
    badge: "bg-[#D6D6D6]",
  },
};
const getRandomColor = () => {
  const colorNames = Object.keys(COLORS);
  const randomIndex = Math.floor(Math.random() * colorNames.length);
  const randomColorName = colorNames[randomIndex];
  return COLORS[randomColorName];
};

export default getRandomColor;
