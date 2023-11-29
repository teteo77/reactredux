import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';

const initialState = {
  task:'',
  tasks: []
};

function tasksReducer(state= initialState, action){
  switch(action.type){
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };

    case 'ADD_TASK':
      return{
        ...state,
        tasks: state.tasks.concat([action.payload.task])
        // action.payload가 뭔지 알아야 할거 같다..
      };
      default:
        return state;
    }
}
//createStore()어로 스토어 생성 tasksReducer로 상태 변경
const store = createStore(tasksReducer);

const inputTask=(task) =>({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

// 아마 액션 생성 부분인거 같다
const addTask=(task) =>({
  type: 'ADD_TASK',
  paylaod: {
    task
  }
});

function TodoApp({ store }){
  const { task, tasks } = store.getState();
  return(
    <div>
      <input type="text" onChange={(e)=> store.dispatch(inputTask(e.target.value))} />
      <input type="button" value="add" onClick={() => store.dispatch(addTask(task))} />
      
    <ul>
      {
        tasks.map(function(item, i){
          return(
            <li key={i}>{item}</li>
          );
        })
      }
    </ul>
    </div>
  );
}

// 렌더링 부분
// render는 라이브러리 호출이 필요하다
function renderApp(store){
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);