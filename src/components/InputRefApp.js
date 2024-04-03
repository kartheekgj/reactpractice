import React, { useRef, useEffect, useState } from "react";

function InputRefComponent() {
  const inputRef = useRef(null);
  const idRef = useRef(0);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [names, setNames] = useState([]);

  const onAddNames = () => {

    setNames([...names, {
      id: idRef.current++,
      name: inputRef.current.value,
    }]);
    inputRef.current.value = "";
  };
  return (
    <div className="container">
      <h3>Input Ref test</h3>
      <div>
        {names.map((name) => (
          <div key={name.name}>
            {name.id} - {name.name}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Enter a value"
        ref={inputRef}
        className="py-1.5 pl-2 pr-20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
      />
      <button className="pl-2 text-gray-400 text-sm" onClick={onAddNames}>
        Add Name
      </button>
      <hr />
    </div>
  );
}

export default InputRefComponent;
