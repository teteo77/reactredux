import React from 'react';
// 5-5 render호출
import { render } from 'react-dom';
// 3-1 createStore호출
import { createStore } from 'redux';

// 스토어의 초기 상태
  // 5 P107
  // 요소에서 입력값을 관리할 수 있게 스토어에 task라는 속성을 추가합니다
const initialState = {
  task: '',
  tasks: []
};

// 1 P98
// 리듀서 첫번쨰 매게 변수에는 현재 상태를 나타내는 state를 전달
// 초기 상태로 이전에 정의한 initialState를 지정 했습니다.
// 두번쨰 매개변수에는 어떤 조작을 할지 나태는 액션 객체를 전달합니다.
// task를 추가하기 위한 액션 객체 입니다.
function tasksReducer(state = initialState, action) {
  switch (action.type) {
      // 5-2 P107
      // type이 INPUT_TASK인 액션이 디스패치될 때 task 입력 값을 저장됩니다.

    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
// 2 P98
// ADD_TASK라는 type을 가진 액션이 발행되면 현재 task 목록을 나타내는 task를 추가하면 될 것입니다.
// 새로운 배열을 생성하는 concat
    case 'ADD_TASK':
      return {
        ...state,
        // ㄴ spread 연산자
        // 출처: https://velog.io/@tnstjd120/%EC%8A%A4%ED%94%84%EB%A0%88%EB%93%9C-%EC%97%B0%EC%82%B0%EC%9E%90spread-operator
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

// 3 P100
// 리덕스는 createStore로 스토어를 생성합니다.
// 이렇게 만들어진 스토어는 유일성을 갖게 됩니다.
// 애플리케이션 전체의 상태를 집약해서 관리하는 것입니다.
// 이렇게 만들어진 createStore함수에 tasksReducer를 지정하면 스토어를 생성할수 있습니다.
//  ㄴ 이렇게 만든 스토어에는 다음과 같이 4개의 메서드가 들어 있습니다.
//  ㄴ dispatch, subscribe, getStatus, replacerReducer
//  ㄴ dispatch를 이용하여 액션을 발행 합니다.
const store = createStore(tasksReducer);

// 4 P107
// 리액트를 사용해 브라우저에서 task를 입력하게 만들 것이므로 
// 스토어에서 해당 입력을 관리하게 해야 합니다.
// 일단 태스크 입력 전용 액션크리에이터를 다음과 같이 추가합니다.
const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  return (
    <div>
    {/* 5-3 P108 */}
    {/* 텍스트 박스가 변경될 때마다 해당 내용이 스토어의 task로 관리되며, 버튼이 눌리면 스토어의 tasks에 태스크가 추가됩니다. */}
    {/* 그리고 태스크 배열을 목록으로 출력합니다. */}
    {/* 이어서 이러한 컴포넌트를 렌더링 하기 위한 함수를 만듭니다. */}

      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
                                                        {/* ㄴ store에inputTask가 사용된다. */}
      <input type="button" value="add" onClick={() => store.dispatch(addTask(task))} />
                                                                  {/* ㄴ store에 addTask가 사용된다. */}
      <ul>
        {
          tasks.map(function(item, i) {
            return (
              <li key={i}>{item}</li>
            );
          })
        }
      </ul>
    </div>
  );
}
// 5-4 P108
// 이렇게 하면 root라는 id를 가진 요소 내부에 TodoApp컴포넌트가 렌더링 됩니다.
// 이어서 스토어의 상태 변화에 따라 뷰를 변화시키는 처리를 작성합니다.
// 스토어의 subscribe 메서드를 사용해 상태 변환 시점에 뷰를 렌더링하는 함수를 호출합니다.
function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);

// 삭제나 수정 기능이 없는데 만들어 보면 좋을거 같다.