// P112
// 마지막으로 components디렉터리를 만들고, 리액트의 뷰 관련 처리를 해당 파일로 옮깁니다.
// components 디렉터리 내부의 파일에서 액션을 디스패치하려면 이전에 만든 액션크리에이터인
// action/stasks.js를 import해야 합니다.

import React, { useState } from 'react';
import { inputTask, addTask,} from '../actions/tasks';
import Todo from './Todo';
// tasks에 함수 선언 해주고 delete2처럼 불러와서 사용한다고 선언해줘야 한다.

// 4-3 여기가 UI 
export default function TodoApp({ store }) {
  const { task, tasks } = store.getState();

    // 3-2useState(false)가 초기값이고 isUpdate 가지는 값이다.
  // 상태값, 상태 업데이트 함수
  // 상태는 setIsUpdate소괄호 안에 넣어서 수정
  
  // const [isUpdate2, setIsUpdate2]= useState(true)
  // update 버튼
  // const []= useState(true);
  // 취소버튼 State
  
  return (
    <div>
      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
      <input type="button" value="add" onClick={() => store.dispatch(addTask(task))} />
      {/* <input type="button" value="delete" onClick={() => store.dispatch(delete2())} /> */}
      {/* ㄴ 테스크 값 */}
      
      <ul>
        {
          tasks.map(function(item, i) {
            // 7-5 내부적인 요소 만큼 함수를 실행해서 반환되는 값으로 새로운 배열을 만든다.
            // 가 새로운 결과값.

            
            return(<Todo store={store} item={item} index={i}/>)
            // 7-4 각 props오른쪽 값에 할당한다.
            // 요소 하나하나 마다 Todo를 리턴하기 때문에 isupdate상태도 요소마다 하나식 가지고 있기 때문에
            // 하나만 랜더링 한다.
          })
        }
      </ul>
    </div>
  );
}



{/* 6 button이란 녀석이 true라서 조건에 맞음 그후에 버튼을 
                        클릭을 해주면 setIsUpdate로 업데이트를 해준다.  */}