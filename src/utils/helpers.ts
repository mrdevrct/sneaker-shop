export const fmtPrice = (n: number): string => {
  return n.toLocaleString("fa-IR") + " تومان";
};

export const getBrandName = (brand: string): string => {
  const names: { [key: string]: string } = {
    nike: "نایک",
    adidas: "آدیداس",
    jordan: "جردن",
    puma: "پوما",
  };
  return names[brand] || brand;
};

export const getColorClass = (color: string): string => {
  const classes: { [key: string]: string } = {
    black: "bg-black",
    white: "bg-white",
    blue: "bg-blue-600",
    red: "bg-red-600",
    green: "bg-green-600",
    gray: "bg-gray-600",
  };
  return classes[color] || "bg-neutral-400";
};