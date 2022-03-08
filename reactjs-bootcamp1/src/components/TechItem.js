import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech = '', onDelete }) {
  return (
    <li>
      <span>{tech}</span>
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

// Caso passe o TechItem sem nada
TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;
