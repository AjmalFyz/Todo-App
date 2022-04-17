import React,{useState,useCallback} from 'react';
import './App.css';
import Card from './components/cards/Card';
// import Delete from './components/Delete/Delete';

function App() {
  const [change,setChange]=useState('')
  const [arr,setArr]=useState([]);


  const handleTodochange=(e)=>{
    setChange(e.target.value)
  }
  const handleTodoarr=(e)=>{
    setArr(arr =>[...arr,change]);
    setChange('')
  }

  const deleteHandle = useCallback(
    (id) => () => {
      update(id)
    }
      );


  const update=(id)=>{
    console.log(id);
    const newarr = arr.filter((items,index) => index !== parseInt(id))
    console.log('deleted item :',{id});
    console.log(newarr);
  setArr(newarr)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className='in'>
        <div className='todoinput'>
        <input value={change} onChange={handleTodochange} placeholder='Type todos here'></input>
        </div>
        <div className='addbutton'>
        <button onClick={handleTodoarr}>Add</button>
        </div>
      </div>
      
      {
       arr.map((items,index) =>
        <ul key={index}>
          <div className='both'>
          <Card key={items.index} head={items}/>
          <button style={{width:'rem',height:'5rem'}}  className='delete' onClick={deleteHandle(index)}></button>
          </div>
          </ul>
      )
      }
      
    </div>
  );
}

export default App;
