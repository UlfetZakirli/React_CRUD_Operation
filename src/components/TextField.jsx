import React from "react";

const TextField = ({label,value, onChange,inputProps}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-base text-gray-800">{label}</label>
      <input className="bg-gray-200 py-2 px-2 border-2 outline-none"
      value={value}
      onChange={onChange}
      {...inputProps}
      />
    </div>
  );
};

export default TextField;
