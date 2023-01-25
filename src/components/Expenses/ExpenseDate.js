import './ExpenseDate.css';

const ExpenseDate = (props) => {
  // 이렇게 복잡한 변수 설정은 JSX 부분에 하지말고 return 밖에서 JS로 설정
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
