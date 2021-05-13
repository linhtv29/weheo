import React, { useState } from "react";
import { ChildrenCard } from "./ChildrenCard";
import "./ManageSection.module.css";
import Classes from "./ManageSection.module.css";
import { Typography, Button } from "antd";
import {UserAddOutlined  } from "@ant-design/icons";
import MockData from "../../mockData/MockData.js"

const Title = Typography.Title;

export const ManageSection = () => {
    const [childrentList, setchildrentList] = useState(MockData);
  return (
    <div className={Classes.MainManage}>
      <Title level={4} type={"secondary"}>
        Heo Tracker
      </Title>
      <div className="cards">
        {childrentList.map(child => (
            <ChildrenCard childData={child} />
        ))}
      </div>
      <div className="addChild">
        <Button shape="round" size="large"  icon={<UserAddOutlined />}>Add Child</Button>
      </div>
    </div>
  );
};
