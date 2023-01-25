import './Card.css'

const Card = (props) => {
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
  // children은 예약어. props.children에 어떤 설정도 하지않음. 래퍼 컴포넌트를 생성하게 함.
  // 언제나 이 사용자 지정 컴포넌트에 있는 열고 닫는 태그 사이에 있는 컨텐츠
  // Card 사이에 있는 컨텐츠는 Card 안에 있는 props.children에서 사용가능
}

export default Card;