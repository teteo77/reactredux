import React from 'react';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';
import { createStore } from 'redux';

// 2 선언한 리듀서를 store에 넣어서 랜더링 해준다.
const store = createStore(tasksReducer);

function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);

// 5 renderApp에서 실행되는 render라는 메서드가 있다. 
//  ㄴ 얘는 리액트 꺼다
//  ㄴ 작성된 리액트 코드를 브라우저 랜더링 해준다.

// renderApp에서 store파라미터를 받고있다.
// 이건 리덕스의 저장소 이다.
//  ㄴ 리덕스는 프로젝트에 하나의 저장소만 가진다.

// store.subscribe는 스토어를 항상 지켜보고 있다가.
// store에 변경사항이 발생하면 내부에 콜백 함수를 다시 실행 해준다.
//  ㄴ 콜백함수는 내부에 renderApp을 변경 사항이 적용된 스토어를 넘기면서 실행해준다.

// 그다음에 renderApp(store)를 호출.