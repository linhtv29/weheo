import React, { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import classes from "./MenuRightDraw.module.css";
import "./MenuRightDraw.module.css";


export const MenuRightDraw = (props) => {
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <div className={classes.menuRight}>
      <MenuOutlined style={{color: "#1890ff"}}  onClick={onOpen} />
      <Drawer {...props}
        placement= 'right'
        closable={false}
        onClose={onClose}
        visible={isOpen}
      >
        {props.children}
      </Drawer>
    </div>
  );
};
