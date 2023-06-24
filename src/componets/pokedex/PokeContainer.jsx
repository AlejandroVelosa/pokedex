import PokeCard from "./PokeCard"
import './styles/Pokecard.css'
import Pagination from "./Pagination";
import { useState } from "react";


const PokeContainer = ({ pokemons }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Calcular el índice del último y primer elemento en la página actual
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;

    // Cortar el array de pokemons según la página actual y los elementos por página
    const currentPokemons = pokemons?.slice(firstIndex, lastIndex);

    // Función para manejar los cambios de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="pokeContainer">
            <div className="pokeGrid">
                {currentPokemons?.map((pokemon) => (
                    <PokeCard key={pokemon.url} url={pokemon.url} />
                ))}
            </div>

            {/* Componente Pagination */}
            <div className="pagination-container">
                <Pagination
                    totalItems={pokemons?.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};



export default PokeContainer