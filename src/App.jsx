import { Layout } from "./layouts/Layout";
import { Card } from "./components/Card";

function App() {
  const products = [
    {
      id: 1,
      name: "Captain Rex",
      description: "Directo de las guerras clon",
      image: "https://m.media-amazon.com/images/I/41yOgAgy41L._AC_.jpg",
    },
    {
      id: 2,
      name: "Comannder Cody",
      description: "Directo de las guerras clon",
      image: "https://v.etsystatic.com/video/upload/q_auto/Comp13_yuhbdx.jpg",
    },
    {
      id: 3,
      name: "Darth Vader",
      description: "Directo de las guerras clon",
      image:
        "https://images.stockx.com/images/Hasbro-Star-Wars-The-Black-Series-Darth-Vader-Premium-Electronic-Helmet.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1652496759",
    },
    {
      id: 4,
      name: "Captain Rex Clone",
      description: "Directo de las guerras clon",
      image: "https://m.media-amazon.com/images/I/41yOgAgy41L._AC_.jpg",
    },
    {
      id: 5,
      name: "Comannder Cody Clone",
      description: "Directo de las guerras clon",
      image: "https://v.etsystatic.com/video/upload/q_auto/Comp13_yuhbdx.jpg",
    },
    {
      id: 6,
      name: "Captain Rex",
      description: "Directo de las guerras clon",
      image: "https://m.media-amazon.com/images/I/41yOgAgy41L._AC_.jpg",
    },
    {
      id: 7,
      name: "Comannder Cody",
      description: "Directo de las guerras clon",
      image: "https://v.etsystatic.com/video/upload/q_auto/Comp13_yuhbdx.jpg",
    },
    {
      id: 8,
      name: "Darth Vader",
      description: "Directo de las guerras clon",
      image:
        "https://images.stockx.com/images/Hasbro-Star-Wars-The-Black-Series-Darth-Vader-Premium-Electronic-Helmet.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1652496759",
    },
    {
      id: 9,
      name: "Captain Rex Clone",
      description: "Directo de las guerras clon",
      image: "https://m.media-amazon.com/images/I/41yOgAgy41L._AC_.jpg",
    },
    {
      id: 10,
      name: "Comannder Cody Clone",
      description: "Directo de las guerras clon",
      image: "https://v.etsystatic.com/video/upload/q_auto/Comp13_yuhbdx.jpg",
    },
  ];

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const chunkedProducts = chunkArray(products, 6);

  return (
    <>
      <Layout />

      <div className="container mt-5">
        {chunkedProducts.map((chunk, index) => (
          <div className="row" key={index}>
            {chunk.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
