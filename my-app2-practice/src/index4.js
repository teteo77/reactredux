import React, { useState } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const initialState = {
  task: '',
  tasks: ["task1", "task2"]
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    // case 'DELETE_TASK':
    //   return{
    //     ...state,
    //     tasks: state.tasks.concat([action.payload.task])
    //   }

    case 'DELETE_TASK':
      // 2-3 index의 값을 가져와서 for으로 i보다 state.tasks.length에 값이 크면 if문 실행
      // i에 값과 action.payload.index의 값이 같지 않으면 arr.push에 넣어준다
      let arr2=[];
      for(let i=0; i<state.tasks.length; i++){
        // if(i == action.payload.index){
        if(i !== action.payload.index){
          arr2.push(state.tasks[i])
        }
        
      }
      return{
        ...state,
        tasks: arr2
      }
    default:
      return state;
  }
}

const store = createStore(tasksReducer);

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

// 스토어에서 해당 입력을 관리하게 해야 한다.
// 일단 태스크 입력 전용 액션크리에이터를 다음과 같이 추가합니다.
const delete2 = (index) => ({
  type: 'DELETE_TASK',
  payload: {
    index
  }
  // 테스트 값
});
// 2-2 DELETE_TASK액션으로 이동





function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  const [isUpdate, setIsUpdate] = useState(false)
  // 3-2useState(false)가 초기값이고 isUpdate 가지는 값이다.
  // 상태값, 상태 업데이트 함수
  // 상태는 setIsUpdate소괄호 안에 넣어서 수정
  return (
    <div>
      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
      <input type="button" value="add" onClick={() => store.dispatch(addTask(task))} />
      {/* <input type="button" value="delete" onClick={() => store.dispatch(delete2())} /> */}
      {/* ㄴ 테스크 값 */}
      
      <ul>
        {
          tasks.map(function(item, i) {
            return (<>
                      <li key={i}>{item}</li>
                      <input type="button" value="delete" onClick={()=>store.dispatch(delete2(i))}></input>
                      {/* 3-1 */}
                      <button value="update" onClick={() => setIsUpdate(!isUpdate)}>update</button>
                                                                  {/* 3-4 ㄴ 상태는 setIsUpdate(!isUpdate) 안에 넣어서 수정  */}
                      {isUpdate && <> 
                      {/* 3-3isUpdate는 현제 false이고 &&연산자에 의해 두가지 값이 트루여야 표시됨 */}
                         <input type="text"></input>
                         <button value="update_check">확인</button>
                         <button value="update_cancle">취소</button>
                      </>}
                    </>
              // <li key={i}>{item}</li></><input type="button"></input></>
            );
          })
        }
      </ul>
    </div>
  );
}

function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);