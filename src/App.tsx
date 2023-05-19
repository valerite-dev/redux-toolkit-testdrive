import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented } from './store/counterStore';
import { RootState } from './store/store';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <span>{count}</span>
      <button type="button" onClick={() => dispatch(incremented())}>+</button>
      <button type="button" onClick={() => dispatch(decremented())}>-</button>
    </>
  );
}

export default App;
