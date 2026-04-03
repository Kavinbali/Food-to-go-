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
      }

      .navbar {
        background: #e23744;
        color: white;
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .navbar h2 {
        margin: 0;
      }

      .cart {
        background: white;
        color: #e23744;
        padding: 8px 15px;
        border-radius: 20px;
        font-weight: bold;
      }

      .hero {
        text-align: center;
        padding: 50px 20px;
      }

      .hero h1 {
        font-size: 40px;
        color: #333;
      }

      .hero p {
        color: #777;
      }

      .search {
        margin-top: 20px;
      }

      input {
        padding: 10px;
        width: 250px;
        border-radius: 8px;
        border: 1px solid #ccc;
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

      .btn {
        background: #e23744;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
      }

      .btn:hover {
        background: #c72c3a;
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
      <div class="cart">Cart: <span id="cartCount">0</span></div>
    </div>

    <div class="hero">
      <h1>Order Food You Love</h1>
      <p>Fast delivery from top restaurants</p>

      <div class="search">
        <input type="text" placeholder="Search food...">
      </div>
    </div>

    <div class="food-container">

      <div class="card">
        <img src="https://images.unsplash.com/photo-1601924582975-7e60c4f9c0f6" alt="Pizza">
        <h3>Pizza</h3>
        <p>₹199</p>
        <button class="btn" onclick="addToCart()">Add to Cart</button>
      </div>

      <div class="card">
        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349" alt="Burger">
        <h3>Burger</h3>
        <p>₹149</p>
        <button class="btn" onclick="addToCart()">Add to Cart</button>
      </div>

      <div class="card">
        <img src="https://images.unsplash.com/photo-1604908176997-4312e6c49a83" alt="Biryani">
        <h3>Biryani</h3>
        <p>₹249</p>
        <button class="btn" onclick="addToCart()">Add to Cart</button>
      </div>

      <div class="card">
        <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b" alt="Dessert">
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
    </script>

  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log("Food to Go running on port " + PORT);
});

