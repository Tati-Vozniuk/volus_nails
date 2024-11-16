function renderFavorites() {
    const favoritesContainer = document.getElementById('favorites-container');
    favoritesContainer.innerHTML = '';

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const productsData = [
        { id: 1, name: "Komilfo Massage Candle – Frozen Apple, 30 g", price: 15, type: "candle", image: "img/catalog/apple.jpg" },   
        { id: 2, name: "Komilfo Massage Candle - Chocolate Orange, 30 g", price: 15, type: "candle", image: "img/catalog/chocolate.jpg" },
        { id: 3, name: "Komilfo Massage Candle – Lemon Lime, 30 g", price: 15, type: "candle", image: "img/catalog/lime.jpg" },
        { id: 4, name: "Komilfo Massage Candle – Juicy Melon, 30 g", price: 15, type: "candle", image: "img/catalog/melon.jpg" },
        { id: 5, name: "Komilfo Massage Candle – Vanilla Frangipani, 30 g", price: 15, type: "candle", image: "img/catalog/vanila.jpg" },
        { id: 6, name: "Komilfo Massage Candle – Flower Garden, 30 g", price: 15, type: "candle", image: "img/catalog/flower_garden.jpg" },
        { id: 7, name: "YO!Nails Massage Candle – cocos jungle, 30 g", price: 15, type: "candle", image: "img/catalog/cocos.webp" },
        { id: 8, name: "YO!Nails Massage Candle – cherry dessert, 30 g", price: 15, type: "candle", image: "img/catalog/cherry.webp" },
        { id: 9, name: "YO!Nails Massage Candle – coffee alchemy, 30 g", price: 15, type: "candle", image: "img/catalog/kofee.webp" },
        { id: 10, name: "YO!Nails Massage Candle – orange heaven, 30 g", price: 15, type: "candle", image: "img/catalog/orange.webp" },
        { id: 11, name: "YO!Nails Massage Candle – strawberry meadow, 30 g", price: 15, type: "candle", image: "img/catalog/strawberry.webp" },
        { id: 12, name: "Joko Blend Nourishing Glove Mask for Hands", price: 15, type: "hands", image: "img/catalog/gloves.png" },
        { id: 13, name: "Nourishing mask-socks for feet Joko Blend", price: 15, type: "foots", image: "img/catalog/socks.webp" },
        { id: 14, name: "Joko Blend Oil for nails and cuticles  10 ml", price: 25, type: "hands", image: "img/catalog/oil.webp" },
        { id: 15, name: "Komilfo Citrus Cuticle Oil for the cuticle, 32 ml", price: 10, type: "hands", image: "img/catalog/oil_komilfo.jpg" },
    ];

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = `
        <div class="favorites_no_chosen_container">
            <p class="favorites_no_chosen">Obecnie nie ma wybranych produktów.</p>
            <a href="catalog.html" class="favorites_to_catalog" target="_blank">Przejdź do katalogu</a>
        </div>
        `;
        return;
    }

    favorites.forEach(id => {
        const product = productsData.find(p => p.id === id);
        if (product) {
            const productElement = document.createElement('div');
            productElement.className = 'product';

            productElement.innerHTML = `
            <a href="products_pages/product-${product.id}.html" target="_blank" class="product-link">
                <img src="${product.image}" alt="${product.name}">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price} zł</p>
            </a>
            <button class="favorite-btn active" onclick="toggleFavorite(${product.id}, this)">♡</button>
        `;

            favoritesContainer.appendChild(productElement);
        }
    });
}


function removeFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== productId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
}

document.addEventListener("DOMContentLoaded", renderFavorites);

function toggleFavorite(productId, button) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.indexOf(productId);

    if (index === -1) {
        // Додати до списку вибраних
        favorites.push(productId);
        button.classList.add('active');
    } else {
        // Видалити з вибраного
        favorites.splice(index, 1);
        button.classList.remove('active');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites(); // Повторний рендеринг для оновлення сторінки
}

