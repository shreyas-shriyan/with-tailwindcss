export const getLocalDate = (date) => {
  const temp = new Date(date);
  return temp.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
