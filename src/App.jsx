import { Layout } from './layouts/Layout'
import { Card } from './components/Card'

function App() {

  const products = [
    {
      id: 1,
      name: 'Rex Edicion 1',
      description: 'Directo de las guerras clon'
    },
    {
      id: 2,
      name: 'Rex Edicion 2',
      description: 'Directo de las guerras clon'
    },
    {
      id: 3,
      name: 'Rex Edicion 3',
      description: 'Directo de las guerras clon'
    }
  ]

  return (
    <>
      <Layout />
      
      <div className='container mt-5'>
        <div className="row">
          {
            products.map(product =>
              <div className='col-md-4' key={product.id}>
                <Card name={product.name} description={product.description} />
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
