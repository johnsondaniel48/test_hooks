import React, { useState } from 'react';
import "./App.css"

function Topic({topic,index}){
return (
  <div className="topic">
    {topic.name}
    {topic.title}
  </div>
)
}

function TopicForm({addTopics}){
const [name, setName] = useState('');

const handleSubmit=e=> {
  e.preventDefault();
  if(!name)
  return;
  addTopics(name);
  setName('');
}

return (
<form onSubmit={handleSubmit}>
<label></label>
<input type="text"  className="input" value={name} onChange={e=>setName(e.target.value)}/>
<button type="submit">Submit</button>
</form>
)
}


function App(){
  const [topics,setTopics] = useState([
    {name:"New topic 1",title:"New topic title 1"},
    {name:"New topic 2",title:"New topic title 2"},
    {name:"New topic 3",title:"New topic title 3"}
  ]);

  
const addTopics=name=>{
  const updatedTopics= [...topics,{name}];
  setTopics(updatedTopics);
}


  return(
    <div className="App">
      <div className="topics">
          {topics.map((topic,index)=>(
            <Topic key={index} index={index} topic={topic}/>
          ))}
          <TopicForm addTopics={adddTopics}/>
      </div>
    </div>
  )
}
export default App;
