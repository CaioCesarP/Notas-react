import React, { Component } from "react";
import "../FormularioCadastro/estilo.css";
import "./index.css";

class ListaDeCategorias extends Component {

    _handleEventoInput(e){
        if(e.key === "Enter"){
            console.log("adicionar categoria");
        }
    }

    render() { 
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">
                    categoria</li>
                    <li className="lista-categorias_item">
                    categoria</li>
                    <li className="lista-categorias_item">
                    categoria</li>
                    <li className="lista-categorias_item">
                    categoria</li>
                </ul>
                <input
                type="text"
                className="lista-categorias_input"
                placeholder="Adicionar Categoria"
                onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
            
        );
    }
}
 
export default ListaDeCategorias;