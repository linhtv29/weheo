import React from "react";
import { MenuRightDraw } from "../MenuRightDraw";
import { Typography, Avatar } from "antd";
import Classes from "./Header.module.css";
// import { Avatar } from "../Avatar";

const TextAnt = Typography.Text;

const DrawerStyle = {
  // backgroundColor: "#1890ff"
}

export const Header = () => {
  return (
    <div className={Classes.Header}>
      <div>
        <Avatar src="https://picsum.photos/200">
        </Avatar>
          <span>
            <TextAnt type="success">
              Hello Parents
            </TextAnt>
          </span>
      </div>
      <div>
        <MenuRightDraw style={DrawerStyle} title="Menu">
          <p>some content...</p>
          <p>some content...</p>
          <p>some content...</p>
          <p>some content...</p>
        </MenuRightDraw>
      </div>
    </div>
  );
};
