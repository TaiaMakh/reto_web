import React, { useEffect, useState } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import phoneService from "./services/phone.service";
import PhoneList from "./components/PhonesList/PhoneList";
import PhoneDetails from "./components/PhoneDetails/PhoneDetails";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    phoneService
      .get()
      .then((response) => {
        console.log(response.data);
        setPhones(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div >
    <Navbar />
      <div className="container">
        <div className="d-flex">
          <div className="col-6">
            <PhoneList className="phone-list" phones={phones} />
          </div>
          <Switch>
            <Route
              exact
              path="/:name"
              render={(props) => <PhoneDetails {...props} phones={phones} />}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
