import { useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";

const EditUser = () => {
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });
  const handleEditUser = (id) => {
    setValues({
      name: "",
      email: "",
    });
    dispatch(
      editUser({
        id: params.id,
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
        inputProps={{ type: "email", placeholder: "Enter an email" }}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
      />

      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
