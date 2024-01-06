import React, {useState} from 'react';
import { delete2,update } from '../actions/tasks';


export default function Todo({store,item,index}){
  const [isUpdate, setIsUpdate] = useState(false)
  const [input, setInput] = useState('')

    return (<>
      <li>{item}</li>
      <input type="button" value="delete" onClick={()=>store.dispatch(delete2(index))}></input>
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
        <input type="text" onChange={(e)=>{setInput(e.target.value)}}></input>
        <button value="update_check" onClick={()=>{store.dispatch(update(index,input)); setIsUpdate(!isUpdate); }}>확인</button>
          <button value="update_cancle" onClick={()=>{setIsUpdate(!isUpdate); }}>취소</button>
          {/* 7button은 객체다. */}
          {/* 7-2 isupdate가 있는 함수는 한번더 실해오딘다. 
          isUpdate가 바뀐 기준으로 한번 쭉 실행된다.*/}
          
      </>}
    </>
  // <li key={i}>{item}</li></><input type="button"></input></>
  );
}