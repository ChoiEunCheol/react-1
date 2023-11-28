import React from "react";
import HelloWorld from "../components/HelloWorld";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement  } from "../redux/actions";

const Home = () => {
    // Redux 상태 가져오기
    const count = useSelector(state => state.count);

    // useDispatch 훅을 사용하여 디스패치 함수 가져오기
    const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <Counter />
      </header>
    </div>
  );
};

export default Home;
 