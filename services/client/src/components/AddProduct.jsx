import React from 'react';
const AddProduct= (props) => {
    return (
    <form onSubmit={(event) => props.addProduct(event)}>
        <div className="field">
        <div className="control">
        <input
        name="nombre"
        className="input is-large"
        type="text"
        placeholder="Ingresa el nombre del producto"
        required
        value={props.nombre}
        onChange={props.handleChange}
        />
        </div>
        </div>
        <div className="field">
        <input
        name="cantidad"
        className="input is-large"
        type="text"
        placeholder="Ingresa la cantidad"
        required
        value={props.cantidad}
        onChange={props.handleChange}
        />
        </div>
        <div className="field">
        <input
        name="precio"
        className="input is-large"
        type="text"
        placeholder="Ingresa el precio"
        required
        value={props.precio}
        onChange={props.handleChange}
        />
        </div>
        <div className="field">
        <input
        name="descripcion"
        className="input is-large"
        type="text"
        placeholder="Ingresa la desdripcion"
        required
        value={props.descripcion}
        onChange={props.handleChange}
        />
        </div>
        <div className="field">
        <input
        name="categoria"

        className="input is-large"
        type="text"
        placeholder="Ingresa la categoria"
        required
        value={props.categoria}
        onChange={props.handleChange}
        />
        </div>
        <div className="field">
        <input
        type="submit"
        className="button is-primary is-large is-rounded is-fullwidth"
        value="Registrar"
        />
        </div>
        </form>
        )
    };

export default AddProduct;