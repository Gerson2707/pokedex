import React from 'react';

const Pagination = ({ pokemosPerPage, totalPokemons, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPokemons / pokemosPerPage); //devuelve el entero más pequeño mayor o igual que un número dado. En otras palabras, redondea un número hacia arriba al entero más cercano.

  let startPage = Math.max(1, currentPage - 3);
  let endPage = Math.min(totalPages, startPage + 6);

  if (currentPage <= 3) {
    startPage = 1;
    endPage = Math.min(7, totalPages);
  } else if (currentPage >= totalPages - 3) {
    endPage = totalPages;
    startPage = Math.max(totalPages - 6, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button className={`btn__Change ${currentPage === 1 ? 'inactive' : 'active'}`} onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? 'page-item active' : 'page-item'}>
            <button className='btn__Page' onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
        <li>
          <button className={`btn__Change ${currentPage === totalPages ? 'inactive' : 'active'}`} onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
