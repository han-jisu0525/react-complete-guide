import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return ( // props로 받는 이름은 App.js <ExpenseItem /> 안에 정의한 이름
    <li>  {/*item을 목록으로 렌더링(그냥 의미적 수정)*/}
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        {/* 여기서 porps.date로 전달해줘야 ExpenseDate에서 props.date로 가능 */}
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
