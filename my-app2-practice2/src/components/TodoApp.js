// P112
// 마지막으로 components디렉터리를 만들고, 리액트의 뷰 관련 처리를 해당 파일로 옮깁니다.
// components 디렉터리 내부의 파일에서 액션을 디스패치하려면 이전에 만든 액션크리에이터인
// action/stasks.js를 import해야 합니다.

import React from 'react';
import { inputTask, addTask } from '../actions/tasks';

export default function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  return (
    <div>
      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
      <input type="button" value="add" onClick={() => store.dispatch(addTask(task))} />
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
