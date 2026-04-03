const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Food to Go</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        background: #f8f8f8;
        transition: 0.3s;
      }

      body.dark {
        background: #121212;
        color: #fff;
      }

      .navbar {
        background: #e23744;
        color: white;
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .cart {
        background: white;
        color: #e23744;
        padding: 8px 15px;
        border-radius: 20px;
        font-weight: bold;
      }

      .btn {
        background: #e23744;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 8px;
        cursor: pointer;
        margin-left: 10px;
      }

      .btn:hover {
        background: #c72c3a;
      }

      .hero {
        text-align: center;
        padding: 50px 20px;
      }

      .food-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        padding: 40px;
      }

      .card {
        background: white;
        border-radius: 12px;
        padding: 15px;
        text-align: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        transition: 0.3s;
      }

      body.dark .card {
        background: #1e1e1e;
      }

      .card:hover {
        transform: scale(1.05);
      }

      .card img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 10px;
      }

      .card h3 {
        color: #e23744;
      }

      .footer {
        text-align: center;
        padding: 20px;
        font-size: 12px;
        color: #aaa;
      }
    </style>
  </head>

  <body>

    <div class="navbar">
      <h2>🍔 Food to Go</h2>
      <div>
        <span class="cart">Cart: <span id="cartCount">0</span></span>
        <button class="btn" onclick="resetCart()">Clear</button>
        <button class="btn" onclick="toggleDark()">🌙</button>
      </div>
    </div>

    <div class="hero">
      <h1>Order Food You Love</h1>
      <p>Fast delivery from top restaurants</p>
    </div>

    <div class="food-container">

      <div class="card">
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop">
        <h3>Pizza</h3>
        <p>₹199</p>
        <button class="btn" onclick="addToCart()">Add to Cart</button>
      </div>

      <div class="card">
        <img src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1415&auto=format&fit=crop">
        <h3>Burger</h3>
        <p>₹149</p>
        <button class="btn" onclick="addToCart()">Add to Cart</button>
      </div>

      <div class="card">
        <img src="https://images.unsplash.com/photo-1719239885399-f87d992e0f18?w=600&auto=format&fit=crop&q=60">
        <h3>Biryani</h3>
        <p>₹249</p>
        <button class="btn" onclick="addToCart()">Add to Cart</button>
      </div>

      <div class="card">
        <img src="https://images.unsplash.com/photo-1711043484522-ad01c2bd769b?w=600&auto=format&fit=crop&q=60">
        <h3>Dessert</h3>
        <p>₹99</p>
        <button class="btn" onclick="addToCart()">Add to Cart</button>
      </div>

    </div>

    <div class="footer">
      🚀 Deployed using Jenkins + Docker + Kubernetes (AWS EKS)
    </div>

    <script>
      let count = 0;

      function addToCart() {
        count++;
        document.getElementById("cartCount").innerText = count;
      }

      function resetCart() {
        count = 0;
        document.getElementById("cartCount").innerText = count;
      }

      function toggleDark() {
        document.body.classList.toggle("dark");
      }
    </script>

  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log("Food to Go running on port " + PORT);
});
