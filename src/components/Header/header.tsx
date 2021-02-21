import { Icon } from "@fluentui/react";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { EmployeeContext } from "../../AppContext/employeeContext";
import logo from "../../resources/dccs.png";

export const Header: React.FC<any> = () => {
  const Custom = () => <Icon iconName="SignOut" />;
  const { currentUser, employees, setUser } = useContext(EmployeeContext);

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
    localStorage.clear();
    if (setUser) setUser(undefined);
  };
  const imgClick = () => {
    if (currentUser) {
      history.push(`/${currentUser._role}`);
    }
  };

  return (
    <div className="logo-wraper ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12">
          <div className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12 logo-left">
            <img
              src={logo}
              alt=""
              onClick={imgClick}
              style={{ display: "inline-block" }}
            />
            {currentUser && (
              <p onClick={handleClick} className="p-tag">
                <Custom />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
