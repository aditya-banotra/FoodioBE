const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  console.log("heyyyy");
  const data = [
    {
      id: "",
      name: "",
      image: "",
      category: "MAINS",
      label: "",
      price: "",
      description: "",
      children: [
        {
          id: 0,
          name: "Uthappizza",
          image: "https://i.imgur.com/tDnjTXf.jpg",
          category: "mains",
          label: "Hot",
          price: "4.99",
          description:
            "A unique combination of Indian Uthappam (pancake) and Italian pizza",
        },
      ],
    },
    {
      id: "",
      name: "",
      image: "",
      category: "APPETIZER",
      label: "",
      price: "",
      description: "",
      children: [
        {
          id: 1,
          name: "Zucchipakoda",
          image: "https://i.imgur.com/xkUElXq.jpg",
          category: "appetizer",
          label: "",
          price: "1.99",
          description:
            "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
        },
        {
          id: 2,
          name: "Vadonut",
          image: "https://i.imgur.com/anUAlqF.jpg",
          category: "appetizer",
          label: "New",
          price: "1.99",
          description:
            "A quintessential ConFusion experience, is it a vada or is it a donut?",
        },
        {
          id: 4,
          name: "Guntur chillies",
          image: "https://i.imgur.com/Vc9JIXP.jpg",
          category: "appetizer",
          label: "Spicy",
          price: "0.99",
          description: "Assorted chillies from Guntur",
        },
        {
          id: 5,
          name: "Buffalo Paneer",
          image: "https://i.imgur.com/pH2tkgk.jpg",
          category: "appetizer",
          label: "",
          price: "5.99",
          description: "A special type of Paneer made from Buffalo milk",
        },
        {
          id: 8,
          name: "Rose breasted Grosbeak chicken",
          image: "https://i.imgur.com/RYsqgoo.jpg",
          category: "appetizer",
          label: "New",
          price: "7.99",
          description: "Roasted rare bird",
        },
      ],
    },
    {
      id: "",
      name: "",
      image: "",
      category: "DESSERT",
      label: "",
      price: "",
      description: "",
      children: [
        {
          id: 3,
          name: "ElaiCheese Cake",
          image: "https://i.imgur.com/c5hBTEW.jpg",
          category: "dessert",
          label: "",
          price: "2.99",
          description:
            "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
        },
      ],
    },
    {
      id: "",
      name: "",
      image: "",
      category: "WIERD",
      label: "",
      price: "",
      description: "",
      children: [
        {
          id: 7,
          name: "Goat Milk",
          image: "https://i.imgur.com/zFGPhrI.jpg",
          category: "weird",
          label: "weird",
          price: "1.99",
          description: "Medicinal Goat Milk",
        },
      ],
    },
    {
      id: "",
      name: "",
      image: "",
      category: "CLONE",
      label: "",
      price: "",
      description: "",
      children: [
        {
          id: 6,
          name: "Cherry Tomatoes",
          image: "https://i.imgur.com/fRy8hjE.jpg",
          category: "clone",
          label: "clone",
          price: "9.99",
          description: "clone of cherry and tomato",
        },
      ],
    },
  ];
  res.send(data);
});

app.listen(3001, () => {
  console.log("server started");
});
