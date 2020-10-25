import React from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import "./UserPersonalData.css";

const UserPersonalData = ({ onDataEntered, nextPagePath }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    onDataEntered({ firstName, lastName, age, sex });
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={nextPagePath} />;
  }

  return (
    <div style={{ color: "white" }}>
      <label>
        {}
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          name="name"
        />
        Nazwisko:
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          name="surname"
        />
        Wiek:
        <input
          onChange={(e) => setAge(e.target.value)}
          type="number"
          name="age"
        />
        Płeć:
        <select onChange={(e) => setSex(e.target.value)}>
          <option value="Men">Mężczyzna</option>
          <option value="Woman">Kobieta</option>
          <option value="Other">Inny</option>
        </select>
      </label>
      <Button
        onClick={handleClick}
        variant="contained"
        color="secondary"
      >
        Send
      </Button>
    </div>
  );
};

export default UserPersonalData;
