// P111
// 일단 리듀서부터 살펴봅시다. reducers 디렉터리 바로 아래에 tasks.js를 만들고,
// tasks와 관련된 리듀서의 처리를 해당 파일로 옮깁니다.


const initialState = {
  task: '',
  tasks: []
};

export default function tasksReducer(state = initialState, action) {
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
    default:
      return state;
  }
}
