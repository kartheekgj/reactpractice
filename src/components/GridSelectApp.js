import React, { useState } from "react";

function GridComponent(props) {
  const [selectedCells, setSelectedCells] = useState({});
  const handleSelectionChange = (e) => {
    e.preventDefault();
    const selectedCol = e.target.dataset.selectedCol;
    if (Object.keys(selectedCells).length > 3) {
      const currentSelectedCell = Object.keys(selectedCells);
      currentSelectedCell.map((currentKey, index) => {
        setTimeout(() => {
          resetAnimation(currentKey);
        }, 500 * index + 1);
        return true;
      });
    } else {
      setSelectedCells({
        ...selectedCells,
        [selectedCol]: !selectedCells[selectedCol],
      });
    }
  };
  const resetGrid = () => {
    if (Object.keys(selectedCells).length > 0) {
      const currentSelectedCell = Object.keys(selectedCells);
      currentSelectedCell.map((currentKey) => {
        setTimeout(() => {
          resetAnimation(currentKey);
        }, 100 );
        return true;
      });
    }
    return true;
  };
  const resetAnimation = (selectedCol) => {
    console.log('selectedCol: ', selectedCol);
    if (Object.keys(selectedCells).length > 0) {
      delete selectedCells[selectedCol];
      setSelectedCells({
        ...selectedCells,
        [selectedCol]: false,
      });
    }
  };

  return (
    <div>
      <div className="grid-container">
        {/* Nested loops to generate the grid */}
        {Array.from({ length: props.gridCount }).map((_, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {Array.from({ length: props.gridCount }).map((_, colIndex) => {
              const cellKey = `${rowIndex}_${colIndex}`;
              const isSelected = selectedCells[cellKey] || false;
              return (
                <button
                  key={colIndex}
                  data-selected-col={cellKey}
                  className={`grid-cell ${isSelected ? "selected" : ""}`}
                  onClick={handleSelectionChange}
                >
                  {colIndex + 1}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <button onClick={resetGrid}>Reset</button>
    </div>
  );
}

export default function GridApp() {
  return (
    <div>
      <GridComponent gridCount={3} />
    </div>
  );
}
