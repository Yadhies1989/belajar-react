const favoriteRestaurant = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];

const uniqueAges = favoriteRestaurant.filter((x, i, a) => a.indexOf(x) == i)

console.log(uniqueAges);

