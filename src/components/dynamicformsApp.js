import React, { useState } from "react";

export default function DynamicForms() {
  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" },
  ]);

  const handleInputChange = (index, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index][event.target.name] = event.target.value;
    setInputFields(newInputFields);
  };
  const removeInputField = (index) => {
    if(inputFields.length > 1){
      inputFields.splice(index, 1)
      setInputFields([...inputFields]);  
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
  };
  const addInputField = () => {
    setInputFields([...inputFields, { firstName: "", lastName: "" }]);
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h3> Dynamic Forms </h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index} className="flex gap-2 flex-col">
            {" "}
            {/* Add a unique key for each field */}
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="First name"
              name="firstName" // Consistent name for all first name inputs
              value={inputField.firstName}
              onChange={(event) => handleInputChange(index, event)}
            />
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="last Name"
              name="lastName" // Consistent name for all last name inputs
              value={inputField.lastName}
              onChange={(event) => handleInputChange(index, event)}
            />
            <div className="flex gap-2 ">
              <button
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={addInputField}
              >
                +
              </button>
              <button
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => removeInputField(index)}
              >
                -
              </button>
            </div>
          </div>
        ))}
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Send
        </button>
      </form>
      <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{JSON.stringify(inputFields)}</div>
    </div>
  );
}
