import { Icon } from "@fluentui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { GetTheme } from "../../config/theme";

export const Admin: React.FC<any> = (props) => {
  const history = useHistory();
  const Add = () => <Icon iconName="Add" />;
  const Assign = () => <Icon iconName="AddFriend" />;
  const Filter = () => <Icon iconName="Filter" />;

  return (
    <div className="ms-Grid wraper" dir="ltr" style={{ padding: "0px" }}>
      <div className="ms-Grid-row">
        <div
          className="ms-Grid-col ms-xl6 ms-lg8 ms-md10 ms-sm12 ms-xlPush3 ms-lgPush2 ms-mdPush1 container"
          style={{ boxShadow: GetTheme.effects.elevation64 }}
        >
          <div className="ms-Grid-col ms-xl8 ms-lg12 ms-md12 ms-sm12 ms-xlPush2">
            <div
              className="ms-Grid-col ms-lg12"
              style={{ textAlign: "center", marginBottom: "30px" }}
            >
              <h1>DCCS Equipment</h1>
              <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12 button-container">
                <button
                  className="customButton"
                  onClick={() => {
                    history.push("/add");
                  }}
                >
                  <Add />
                  Add new item
                </button>
              </div>
              <div className="ms-Grid-col  ms-lg12 ms-md12 ms-sm12 button-container">
                <button
                  className="customButton"
                  onClick={() => {
                    history.push("/assign-remove");
                  }}
                >
                  <Assign />
                  Add / Remove Item
                </button>
              </div>
              <div className="ms-Grid-col  ms-lg12 ms-md12 ms-sm12 button-container">
                <button
                  className="customButton"
                  onClick={() => {
                    history.push("/filter-type");
                  }}
                >
                  <Filter />
                  Items by Type
                </button>
              </div>
              <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12 button-container">
                <button
                  className="customButton"
                  onClick={() => {
                    history.push("/filter-employee");
                  }}
                >
                  <Filter />
                  Items by Employee
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
