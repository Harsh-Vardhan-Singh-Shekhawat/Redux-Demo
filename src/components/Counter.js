import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.value)
  const show = useSelector(state => state.showCounter)

  
  const incrementHandler = () =>{
    dispatch({type : 'increase'});
  }
  
  const decrementHandler = ()=>{
    dispatch({type:'decrease'})
  }

  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
        {/* <div className={classes.value}>{counter}</div> */}
      <div>
        <button className={classes.btn} onClick={incrementHandler}>+</button>
        <button className={classes.btn} onClick={decrementHandler}>-</button>
      </div>
      <button className={classes.btn} onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
