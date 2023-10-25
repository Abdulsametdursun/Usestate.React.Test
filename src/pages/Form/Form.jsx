import { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import FormInput from "../../components/CustomButton/FormInput/FormInput";
import "./form.css";

const Form = () => {
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers] = useState([]);
  const [inputType, setInputType] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    let user = {
      userId: new Date().getTime(),
      userName: name,
      userLastname: lastname,
      userPassword: password,
    };
    if (!name || !lastname || !password) {
      alert("Fill out all");
    } else {
      setUsers([...users, user]);

      setName("");
      setLastName("");
      setPassword("");
    }
  };
  console.log(users);
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Form Side</h1>
        <FormInput
          value={name}
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          value={lastname}
          label="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <FormInput
          value={password}
          isIcon={true}
          type={inputType === true ? "password" : "text"}
          isShow={inputType}
          showPassword={() => setInputType(!inputType)}
          label={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />

        <CustomButton
          type="Submit"
          className={"formButton"}
          buttonTitle={"Sent"}
          buttonType={"info"}
        />
      </form>

      <table className="table table-dark bg-dark">
        <thead>
          <th>Name</th>
          <th>Last Name</th>
          <th>Password</th>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.userName}</td>
              <td>{user.userLastname}</td>
              <td>{user.userPassword}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form;
