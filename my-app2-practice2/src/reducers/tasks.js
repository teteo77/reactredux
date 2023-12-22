// P111
// 일단 리듀서부터 살펴봅시다. reducers 디렉터리 바로 아래에 tasks.js를 만들고,
// tasks와 관련된 리듀서의 처리를 해당 파일로 옮깁니다.

// 1 리듀서

const initialState = {
  task: '',
  tasks: ["task1", "task2"]
};

export default  function tasksReducer(state = initialState, action) {
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
