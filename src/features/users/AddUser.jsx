import { useState } from "react";
import TextField from "../../components/TextField";
import Button from "./../../components/Button";
import { useDispatch } from "react-redux";
import { addUser, saveToLocaleStorage } from "./userSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuid(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: "Enter a name" }}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        value={values.name}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        inputProps={{ type: "email", placeholder: "Enter an email" }}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
