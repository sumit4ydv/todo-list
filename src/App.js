import "./App.css";
// import MainDisplay from './MainDisplay';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import MainDisplay from "./MainDisplay";

function App() {
  const [txt, setTxt] = useState("");
  const [list, setList] = useState([]);
  const [active, setActive] = useState(false);

  const deleteItems = (id) => {
    setList((oldList) => {
      return oldList.filter((arr, i) => {
        return i!== id
      })
    })
  }



  const handleAdd = () => {
    setList((oldList) => {
      if(list.length === 7){
        alert('Sorry you can not add more')
        return [...oldList]
      }else{
        return [...oldList, txt];
      }
      
    });
    setTxt("");
    setActive(true)
  };

  const clearAll = () => {
    setList([])
    setActive(false)
  }

  const handleChange = (e) => {
    setTxt(e.target.value);
  };

  return (
    
      <div className="main-div" style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
      <h1 className="heading" style={{fontSize:'50px', margin:'15px'}}>Todo List </h1>
        <div className="center-div" style={{backgroundColor:'lightgreen', display: 'flex', flexDirection:'column',width:'330px', alignItems:'center', margin:'0px 0px', borderRadius:'10px', height:'410px',}}>
         <div className="input-list-cont" style={{margin:'9px '}}>
          <div className="input-cont" style={{paddingLeft:'10px'}}>
            <input
            type="text"
            placeholder="Enter an Item"
            value={txt}
            onChange={handleChange}
            id=""
            style={{ padding: "7px 10px", marginRight: "9px", width:'170px'  }}
          />

          <Button
            onClick={handleAdd}
            className="add-btn"
            style={{ backgroundColor: "lightgray", borderRadius: "7px" }}
          >
            <AddIcon style={{ color: "darkblue" }} />
          </Button>
          </div>
          <ol style={{ listStyle: "none", display:'flex', flexDirection:'column', justifyContent:'left', padding:'0px', width:'270px',  }}>
            {list.map((todoText, i) => {
              return <MainDisplay text={todoText} key={i} id={i} onSelect={deleteItems} />;
            })}
           
          </ol>
          </div>
          {active && <Button 
              onClick={clearAll}
              style={{
                position:'fixed',
                backgroundColor: "lightgray",
                borderRadius: "7px",
                color: "red",
                translate: '0px 363px'

              }}
            >
              Clear All
            </Button> }
        </div>
      </div>
 
  );
}

export default App;
