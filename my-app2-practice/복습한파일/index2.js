import React from 'react';
// React파일을 읽어 들이기 위해서 React를 사용
import {render} from 'react-dom';
// 그래픽을 불러올때 로딩할때
import {createStore} from'redux';
//스토어를 만들어주는 라이브러리 도구입니다.

//스토어 이용을 위해서 초기상태
const initialState= {
    task: '',
    tasks:[]
    // [] concat함수를 이용해서 input에 입력되는 값을 계속해서 이어서 표현해줍니다.
}

//리액트에서는 store reducer action
// reducer를 이용해서 store상태를 변경을 해줘요

function tasksReducer(state = initialState, action){
    switch(action.type){
        case 'INPUT_TASK':
            return {
              ...state,
              task: action.payload.task
            };

        case'ADD_TASK':
        return{
            ...state,
            tasks: state.tasks.concat([action.payload.task])
        };
        default:
            return state;
    }
}

const store = createStore(tasksReducer);

// 투두리스에 필요한 기능은 input속성에 텍스트가 입력이 되면은
// tasks라는 배열에 concat을 이용해서 입력된 문자열을 합치는 기능을 만들꺼에요

const inputTask = (task) =>({
    type: 'INPUT_TASK',
    paylaod:{
        task
    }
});

const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task
    }
})

function TodoApp({store}){
    const{task, tasks}= store.getState();
    return (
        <div>
            <input type='text' onChange={(e) => store.dispatch(inputTask(e.target.value))}/>
            <input type='button' value='add' onclick={()=>store.dispatch(addTask(task))}/>
            <ul>
                {
                    tasks.map(function(item, i){
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

function renderApp(store){
    render(
        <TodoApp store={store} />,
        document.getElementById('root')
    )
}

store.subscribe(() => renderApp(store));
renderApp(store);