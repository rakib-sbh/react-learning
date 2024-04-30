import { useEffect } from "react";
import { useState } from "react";

const Input = () => {
  const [value, setvalue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  useEffect(() => {
    if (value.length < 2) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: isValid ? "green" : "red" }}
      />
      <p>{value}</p>
    </div>
  );
};

export default Input;
