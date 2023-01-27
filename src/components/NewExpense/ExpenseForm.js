import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 변경 이벤트가 발생했을 때 이벤트 객체를 얻을 수 있게 해줌.
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    // setUserInput((preState) => return { ...preState, enteredTitle: event.target.value });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();  // 페이지 리로드 X

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    // onSaveExpenseData의 속성에 접근해서 실행. 얻은 값이 함수여서 실행 가능.
    // 왜냐하면 속성 onSaveExpenseData를 통해 포인터를 전달하기 때문(자식->부모 소통방법)
    props.onSaveExpenseData(expenseData) // NewExpense에서 매개변수로 받는 값
    // 초기화
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
