import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreList from './compunent/StoreList';
import ToDoList from './compunent/ToDoList';
import UserList from './compunent/UserList';

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
