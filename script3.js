const products = [
  { name: "Headphones", price: 99, rating: 4.5, category: "electronics" },
  { name: "T-Shirt", price: 25, rating: 4.2, category: "fashion" },
  { name: "Smartphone", price: 299, rating: 4.8, category: "electronics" },
  { name: "Sneakers", price: 70, rating: 4.3, category: "fashion" },
];

function displayProducts(items) {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${p.name}</h3><p>$${p.price}</p><p>Rating: ${p.rating}</p>`;
    list.appendChild(card);
  });
}

document.getElementById("categoryFilter").addEventListener("change", filterAndSort);
document.getElementById("sort").addEventListener("change", filterAndSort);

function filterAndSort() {
  let items = [...products];
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sort").value;

  if (category !== "all") {
    items = items.filter(p => p.category === category);
  }

  if (sort === "priceLow") {
    items.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    items.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    items.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(items);
}

displayProducts(products);
