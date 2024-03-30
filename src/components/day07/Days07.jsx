import React, { useState } from "react";
import "./day07css.css";
import {
  IconBell,
  IconLayoutDashboard,
  IconMessage,
  IconSearch,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";

const Days07 = () => {
  const [searchInput, setSearchInput] = useState(false);
  const [secondMenu, setSecondMenu] = useState(false);

  return (
    <div className="container07">
      <div className={`note07 ${secondMenu ? "active" : ""}`}>
        <div className="header07">
          <div
            className="menuIcon07"
            onClick={() => setSecondMenu(!secondMenu)}
          >
            <div className="dashTop07"></div>
            <div className="dashBut07"></div>
            <div className="dashCircle07"></div>
          </div>

          <div className="tittle07">Notifications</div>

          <input
            type="text"
            className={`text07 ${searchInput ? "input" : ""}`}
            placeholder="Search..."
          />
          <IconSearch
            className="search07"
            width={"35"}
            height={"35"}
            onClick={() => setSearchInput(!searchInput)}
          />
        </div>

        <div className="notifications07">
          <div className="line07"></div>

          <div className="notification07">
            <div className="circles07"></div>
            <span className="time07">9:24 AM</span>
            <p>
              <b>Jhon Walker</b> posted a photo on your wall.
            </p>
          </div>

          <div className="notification07">
            <div className="circles07"></div>
            <span className="time07">8:19 AM</span>
            <p>
              <b>Alice Parker</b> commented a photo on your post.
            </p>
          </div>

          <div className="notification07">
            <div className="circles07"></div>
            <span className="time07">Yesterday</span>
            <p>
              <b>Luke Waynce</b> added you as friend.
            </p>
          </div>
        </div>
      </div>

      <div className={`lista07 ${secondMenu ? "listActive": ""}`}>
        <ul className="list07">
          <li>
            <IconLayoutDashboard /> Dashboard
          </li>
          <li>
            <IconUser /> Profile
          </li>
          <li>
            <IconBell /> Notification
          </li>
          <li>
            <IconMessage /> Messages
          </li>
          <li>
            <IconSettings /> Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Days07;
