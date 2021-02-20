import { Icon } from '@fluentui/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import logo from '../../resources/dccs.png'

export const Header: React.FC<any> = () => {
  const [user, setUser] = useState<Employee | null>();
  const Custom = () => <Icon iconName="SignOut" />;


  const history = useHistory()

  const handleClick = () => {
    history.push("/");
    localStorage.clear();
    setUser(null)
  }
  const imgClick = () => {
    setUser(JSON.parse(localStorage.getItem("user")!));
    if (user) {
      history.push(`/${user._role}/${user._id}`);
    }
  }

  return <div className="logo-wraper ms-Grid" dir="ltr">
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12" style={{ textAlign: "center" }} >
        <div className="ms-Grid-col ms-xl12 ms-lg12 ms-md12 ms-sm12" style={{ textAlign: "center" }}>
          <img src={logo} alt="" onClick={imgClick} style={{ display: "inline-block" }} />
          <p onClick={handleClick} className="p-tag">Sign out
            <Custom />
          </p>
        </div>
      </div>
    </div>
  </div>

}