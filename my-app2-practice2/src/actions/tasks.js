// P112
// 이어서 액션입니다. actions디렉터리 아래에 tasks.js를 만들고,
// 액션크리에이터의 처리를 해당 파일로 옮깁니다.

export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});
