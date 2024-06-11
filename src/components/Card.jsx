import { useState } from "react"

export function Card({name, description, image}) {

    const [quantity, setQuantity] = useState(0)

    const addProduct = () => {
        setQuantity(quantity + 1)
    }

    const removeProduct = () => {
        
        let newQuantity = quantity < 1 ? 0 : quantity - 1
        setQuantity(newQuantity)
    }

    return (
        <div className="card">
            <div className="card-body text-center">
                <img className="img-fluid" src={image} style={{width: '320px', height: '350px'}} />
                <h5 className="card-title mt-1">{name}</h5>
                <p className="card-text">{description}</p>
                <div className="mt-2">
                    <button type="button" className="btn btn-danger" onClick={removeProduct}>-</button>
                    <input type="text" className="form-control d-inline text-center m-1" readOnly value={quantity} style={{width: '50px'}} />
                    <button type="button" className="btn btn-success" onClick={addProduct}>+</button>
                </div>
                <a className="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
    )
}