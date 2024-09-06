import './App.css';
import StoreList from './compunents/StoreList';
import ToDoList from './compunents/ToDoList';
import UserList from './compunents/UserList';

function App() {
  return (
    <div className="App">
      <UserList />
      <br />
      <hr />
      {/* 맛집 리스트 추가 */}
      {/* 월미당(쌀국수) */}
      <StoreList />
      {/* <br />
      <hr />*/}  
      {/* <ToDoList /> */}  
    </div>
  );
}

export default App;
