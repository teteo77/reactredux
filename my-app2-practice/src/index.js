import React, { useState } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const initialState = {
  task: '',
  tasks: ["task1", "task2"]
};



// Action- Reducer- store- UI 순으로 순환한다.
// Action은 UI에서 클릭하면 발생
// Reducer는 store가 가지고 있는 상태를 변환 시키기 위한 함수.
// Store는 상태를 변환해서 UI로 전송
// UI 에서 클라이언트가 기능 클릭
// 개념으로 접근하고 함수로 코딩해라 명심해라.
  // ㄴ 그냥 바로 redux로 넘어가자. 그냥 redux바로 하는게 재밌을거 같음
    // ㄴ 다시 찾아보니까 프로젝트가 작으면 reducer가 권장되는거 같음 큰 프로젝트에 redux가 필요하다
    // ㄴ reducer도 이해 필요하니까 일단 redcuer로 하자.


//4-3 여기가 Reducer
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

//4-4 여기가 store
const store = createStore(tasksReducer);


//4 여기가 action
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






// 4-3 여기가 UI 
function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  const [isUpdate, setIsUpdate] = useState(false)
    // 3-2useState(false)가 초기값이고 isUpdate 가지는 값이다.
  // 상태값, 상태 업데이트 함수
  // 상태는 setIsUpdate소괄호 안에 넣어서 수정
  
  const [isUpdate2, setIsUpdate2]= useState(true)

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
                      {/* 3-1 update버튼 생성 */}
                      {isUpdate2 && <> 
                        <button value="update" onClick={() => {setIsUpdate(!isUpdate); setIsUpdate2(!isUpdate2)}}>update</button>
                        {/* <button value="update" onClick={setIsUpdate(!isUpdate)}>update</button> */}
                                              {/* ㄴ3-6 */}
                      </>}
                                            {/* 3-4 ㄴ 상태는 setIsUpdate(!isUpdate) 안에 넣어서 수정  */}
                                            {/* 3-5 함수를 두개 넣을때는 중괄호를 넣고 선언해주기, 콜백함수이다 공부하기 */}
                                            {/* 3-6 어떤 함수가 실행을 하고 나서 내부적으로 return문을 가지고 있거나 화살표 ㅎ함수처럼 중괄호가 생략되어서 실행딘 경우에는 반환 값을 가지게 되는데 리턴을문을 가지지않고 함수를 호출하게 되면
                                            무조건 언드파인드가 반환이 된다. */}
                                            

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