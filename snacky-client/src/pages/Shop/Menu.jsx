import React, { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOptions, setSortOptions] = useState("default");

  //loading data
  useEffect(() => {
    // fetch data from back end
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        console.log(data);
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fatching from data", error);
      }
    };

    // call the function
    fetchData();
  }, []);

  // filtering on data based on category
  const filterItems = (category) => {
    const filtred =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtred);
    selectedCategory(category);
  };

  //Show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
  };

  // Filter section sorting section
  const handleSortChange = (option) => {
    setSortOptions(option);

    let sortedItems = [...filterItems];

    //Now build logic

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localCompare(a.name));
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // code block
        break;
    }

    setFilteredItems(sortedItems);
  };

  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-48 flex flex-col items-center justify-center gap-8">
          {/* texts */}
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Explore the Pleasures of Delicious{" "}
              <span className="text-orange">Cuisine.</span>
            </h2>
            <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
              Each plate tells a tale of culinary expertise and dedicated
              artistry.
            </p>
            <button className="bg-orange font-semibold btn text-white px-8 py-3 rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Listed items center */}
      <div className="section-container"></div>
    </div>
  );
};

export default Menu;
