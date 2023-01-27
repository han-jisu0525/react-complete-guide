import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // 새로운 expense가 생길때마다 작동.
  const addExpenseHandler = expense => {
    // 동일한 상태의 이전 스냅샷을 기반으로 하는 경우에 우리의 상태를 업데이트할 수 있는 깔끔한 방법.
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses] 
    });  
  }
  // // JSX를 쓰지 않는 대안법. 과거의 방법. JSX에서 전체태그가 하나여야하는 이유(createElement 2개를 동시 반환은 안되니까?) 
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
