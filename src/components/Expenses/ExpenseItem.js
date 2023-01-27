import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title) // [현재상태값, 그것을 업데이트하는 함수]
  console.log('ExpenseItem evaluated by React')  // 4번 호출 됨. expenses에서 expenseitem을 4번 호출하기 때문.

  const clickHandler = () => {
    setTitle('Updated!')  // 어떤 변수에 새로운 값을 할당하는게 아님
    console.log(title)
  }
  return (  // props로 받는 이름은 App.js <ExpenseItem /> 안에 정의한 이름
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/> {/* 여기서 porps.date로 전달해줘야 ExpenseDate에서 props.date로 가능 */}
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button> {/*clickHandler에 ()넣으면 JSX코드가 평가될 때 실행 --> click 이벤트가 아니게 된다.*/}
    </Card>
  );
}

export default ExpenseItem;
