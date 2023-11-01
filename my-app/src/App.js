import React, { Component } from 'react';
import './App.css';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        title: '디폴트',
        id: 0,
      }],
      uniqueId: 1,
    };

    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  // App 컴포넌트에서는 tasks를 단순한 변수로 정의했습니다. 이를 state를 사용해 관리합니다(예제 4.34)
  // 일단 초기값을 설정합니다. 초기값은 constructor에서 설정합니다.

  // this.state에 직접 값을 입력하는 조작은 constructor에서 초기값을 설정할 때만 가능한 방법입니다.
  addTodo(title) {
    const {
      tasks,
      uniqueId,
    } = this.state;

    // title을 받은 addTodo는 state에 기록돼 있는 tasks에 새로운 Todo를 push하고
    // task에 push로 배열에 넣어준다
    tasks.push({
      title,
      id: uniqueId,
    }); 

    // setState메서드를 사용해 state에 저장합니다. 추가로 이떄 Todo 유니크 ID도 증가시켜서 state에 저장합니다.
    // 이처럼 state를 변화시킬때는 setState 메서드를 사용합니다. setState는 현재 state를 단순하게
    // 변경하는 것이 아니고, 변경이 있는 state만 덮어 씌우는 메서드입니다.
    // 가령 uniqueId를 setState로 전달하지 않아도 기존에 있던 uniqueId가 사라지는 것은 아닙니다.
    // 단지 기존의 값을 유지할 뿐입니다.
    // 현제상태 불러와서 데이터 표시
    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });
  }

  resetTodo() {
    this.setState({
      tasks: [],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
