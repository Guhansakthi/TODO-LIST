import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import Additem from "./Additem";
import SearchItem from "./SearchItem";

function App() {
  const[items, setItem]=useState([]);
  const[search,setSearch] = useState('')
  useEffect(()=>{
    JSON.parse(localStorage.getItem("todo_list"))
  },[])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItem(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems));

  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setnewItem('');
  }

  const handleCheck =(id)=>{
    const itemlist= items.map((item)=>
      item.id === id ? {...item , checked:!item.checked} : item
    )
    setItem(itemlist);
    localStorage.setItem("todo_list",JSON.stringify(itemlist));
  };
  const handleDelete =(id)=>{
    const itemlist = items.filter((item)=> item.id!==id );
    setItem(itemlist);
    localStorage.setItem("todo_list",JSON.stringify(itemlist));
  }
  const[newItem,setnewItem] = useState('')
  
  return (
   <div>
      <Header title="To Do List"/>
      <Additem 
       newItem ={newItem}
       setnewItem={setnewItem}
       handleSubmit={handleSubmit}
      />
      <SearchItem 
       search ={search}
       setSearch={setSearch}
      />
      <Content
        items ={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete} 
      />
      <Footer />
   </div>
    
  );
}

export default App;
