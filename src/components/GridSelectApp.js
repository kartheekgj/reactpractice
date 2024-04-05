import React, { useReducer } from "react";

// function GridComponent(props) {
//   const [selectedCells, setSelectedCells] = useState({});
//   const handleSelectionChange = (e) => {
//     e.preventDefault();
//     const selectedCol = e.target.dataset.selectedCol;
//     if (Object.keys(selectedCells).length >= 4) {
//       const currentSelectedCell = Object.keys(selectedCells);
//       currentSelectedCell.reverse().map((currentKey, index) => {
//         setTimeout(() => {
//           resetAnimation(currentKey);
//         }, 500 * index + 1);
//         return true;
//       });
//     } else {
//       setSelectedCells({
//         ...selectedCells,
//         [selectedCol]: !selectedCells[selectedCol],
//       });
//     }
//   };
//   const resetGrid = () => {
//     if (Object.keys(selectedCells).length > 0) {
//       const currentSelectedCell = Object.keys(selectedCells);
//       currentSelectedCell.map((currentKey) => {
//         setTimeout(() => {
//           resetAnimation(currentKey);
//         }, 100);
//         return true;
//       });
//     }
//     return true;
//   };
//   const resetAnimation = (selectedCol) => {
//     console.log("selectedCol: ", selectedCol);
//     if (Object.keys(selectedCells).length > 0) {
//       delete selectedCells[selectedCol];
//       setSelectedCells({
//         ...selectedCells,
//         [selectedCol]: false,
//       });
//     }
//   };
const initialState = {};
    
function GridComponentUsingReducer(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SELECT_CELL":
        const { cellKey } = action;
        const newState = { ...state };
        newState[cellKey] = !state[cellKey];
        return newState;
      case "RESET_GRID":
        console.log(state);
        break;
      default:
        return state;
    }
  };
    const [selectedCells, dispatchEvent] = useReducer(reducer, initialState);
    const handleSelectionChange = (e) =>{
      e.preventDefault();
      const selectedCol = e.target.dataset.selectedCol;
      dispatchEvent({type: "SELECT_CELL", cellKey: selectedCol});
    }
    const resetGrid = () => {
      dispatchEvent({type: "RESET_GRID"})
    }

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
                ></button>
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
      <GridComponentUsingReducer gridCount={3} />
    </div>
  );
}
