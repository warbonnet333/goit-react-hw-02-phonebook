const changeFinalList = (prevArray, filter) =>
  prevArray.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

export default changeFinalList;
