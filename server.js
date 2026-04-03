const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Food to Go</title>
      <style>
        body { font-family: Arial; background: #f5f5f5; margin: 0; }
        .header { background: #e23744; color: white; padding: 20px 40px; }
        .hero { text-align: center; padding: 60px 20px; }
        .hero h1 { font-size: 48px; color: #333; }
        .hero p { font-size: 20px; color: #666; }
        .btn { background: #e23744; color: white; padding: 15px 40px;
               border: none; border-radius: 8px; font-size: 18px; cursor: pointer; }
        .cards { display: flex; justify-content: center; gap: 20px; padding: 40px; }
        .card { background: white; border-radius: 12px; padding: 20px;
                width: 200px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .card h3 { color: #e23744; }
        .footer { text-align: center; padding: 20px; color: #999; font-size: 13px; }
      </style>
    </head>
    <body>
      <div class="header"><h2>Food to Go</h2></div>
      <div class="hero">
        <h1>Order Food You Love</h1>
        <p>Fast delivery from the best restaurants near you</p>
        <button class="btn">Order Now</button>
      </div>
      <div class="cards">
        <div class="card"><h3>Pizza</h3><p>Hot and fresh</p></div>
        <div class="card"><h3>Burgers</h3><p>Juicy and tasty</p></div>
        <div class="card"><h3>Biryani</h3><p>Authentic flavour</p></div>
        <div class="card"><h3>Desserts</h3><p>Sweet treats</p></div>
      </div>
      <div class="footer">Deployed via Jenkins + Docker + Kubernetes on AWS EKS</div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log('Food to Go running on port ' + PORT);
});
