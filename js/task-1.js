const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) =>
  console.log(
    `Category: ${category.querySelector(".categories-title").textContent}
Elements: ${category.querySelectorAll(".categories-item").length}`,
  ),
);
