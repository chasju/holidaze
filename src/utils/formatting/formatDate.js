const formatDate = (date) => {
  const formatDate = new Date(date);
  const formattedDate = formatDate.toLocaleDateString("en-GB");

  return formattedDate;
};

export default formatDate;
