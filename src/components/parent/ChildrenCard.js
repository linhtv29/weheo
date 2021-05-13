import React from "react";
import { Typography, Avatar, Card } from "antd";
import Classes from "./ChildrenCard.module.css";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

const TextAnt = Typography.Text;
const CardStyle = {
  width: 350,
  borderRadius: 10,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 10,
};

const valueButtonStyle = {
    fontSize: 24,
    color: '#5ab7b1',
    display: "block"
}
export const ChildrenCard = () => {
  return (
    <Card style={CardStyle}>
      <div className={Classes.childrentCard}>
        <Avatar src="https://picsum.photos/200"></Avatar>
        <div className="cardContent">
          <TextAnt>Bống</TextAnt>
          <div className="balance">
            <TextAnt>Số tiền:</TextAnt>
            <TextAnt>1000</TextAnt>
          </div>
        </div>
        <div className="handleValueArea">
          <PlusCircleOutlined style={valueButtonStyle} />
          <MinusCircleOutlined style={valueButtonStyle} />
        </div>
      </div>
    </Card>
  );
};
