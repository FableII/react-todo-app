import React, { useState } from 'react'

function Input() {

    //State hook section 
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState([]);

    //Helper functions

    function addItem(){

        if(!newItem){
            alert("Enter an item.")
            return;
        }

       const item = {
           id: Math.random(),
           value: newItem
       }

       setItems(oldList => [...oldList, item]);
       setNewItem("");

    }

    function deleteItem(id){
        const newArray = items.filter(item => item.id !== id)
        setItems(newArray)
    }
        

  
    
    return(
        <div className="Input">
            
            {/*Input and button*/}

            <input 
              type="text" 
             placeholder="Add an item..."
             value={newItem}
             onChange={(e)=>setNewItem(e.target.value)}
             />

             <button
             onClick={() => addItem()}
             >Add</button>
             
             {/*List of Items*/}

             <ul>
                 {items.map(item=>{
                     return(
                         <li key={item.id}>{item.value} <button className='delete-btn' onClick={() => deleteItem(item.id)}>❌</button></li>
                     )
                 })}
             </ul>

        </div>

    )


}

 


export default Input