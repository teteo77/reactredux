// P112
// 마지막으로 components디렉터리를 만들고, 리액트의 뷰 관련 처리를 해당 파일로 옮깁니다.
// components 디렉터리 내부의 파일에서 액션을 디스패치하려면 이전에 만든 액션크리에이터인
// action/stasks.js를 import해야 합니다.

import React, { useState } from 'react';
import { inputTask, addTask, delete2 } from '../actions/tasks';
// tasks에 함수 선언 해주고 delete2처럼 불러와서 사용한다고 선언해줘야 한다.

// 4-3 여기가 UI 
export default function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  const [isUpdate, setIsUpdate] = useState(false)
    // 3-2useState(false)가 초기값이고 isUpdate 가지는 값이다.
  // 상태값, 상태 업데이트 함수
  // 상태는 setIsUpdate소괄호 안에 넣어서 수정
  
  // const [isUpdate2, setIsUpdate2]= useState(true)
  // update 버튼
  // const []= useState(true);
  // 취소버튼 State
  const toggle=!isUpdate;
  
  return (
    <div>
      <div>{isUpdate.toString()}</div>
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
                      {!isUpdate && <> 
                      {/* 6-3  6번 보고, 좌항값만 봐라*/}
                        <button value="update" onClick={() => {setIsUpdate(!isUpdate); }}>update</button>
                        
                        {/* 6-4 ! 빼고 setIsupdate로 변환을 주면 계속 false
                        변환을 주기 위해서 !를 넣어야 true되고 false가 될수있다. */}
                        {/* <button value="update" onClick={setIsUpdate(!isUpdate)}>update</button> */}
                                              {/* ㄴ3-6 */}
                      </>}
                                            {/* 3-4 ㄴ 상태는 setIsUpdate(!isUpdate) 안에 넣어서 수정  */}
                                            {/* 3-5 함수를 두개 넣을때는 중괄호를 넣고 선언해주기, 콜백함수이다 공부하기 */}
                                            {/* 3-6 어떤 함수가 실행을 하고 나서 내부적으로 return문을 가지고 있거나 화살표 ㅎ함수처럼 중괄호가 생략되어서 실행딘 경우에는 반환 값을 가지게 되는데 리턴을문을 가지지않고 함수를 호출하게 되면
                                            무조건 언드파인드가 반환이 된다. */}
                                            

                      {isUpdate && <> 
                      {/* 6-2 초기값이 false이기 때문에 isUpdate에서 실행시키지 않는다 
                      우측에 뭐가있던 실행 안함 false라서 */}
                      {/* 3-3isUpdate는 현제 false이고 &&연산자에 의해 두가지 값이 트루여야 표시됨 */}
                         <input type="text"></input>
                         <button value="update_check">확인</button>
                          <button value="update_cancle" onClick={()=>{setIsUpdate(!isUpdate); }}>취소</button>
                          
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

{/* 6 button이란 녀석이 true라서 조건에 맞음 그후에 버튼을 
                        클릭을 해주면 setIsUpdate로 업데이트를 해준다.  */}