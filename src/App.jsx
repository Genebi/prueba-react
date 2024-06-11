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
  ];

  return (
    <>
      <Layout />

      <div className="container mt-5">
        {products.map((product) => (
          <div className="row">
            <div className="col-md-3 mb-3" key={product.id}>
              <Card
                name={product.name}
                description={product.description}
                image={product.image}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
