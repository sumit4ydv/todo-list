import React, {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
// import Button from '@mui/material/Button';



function MainDisplay(props) {
    const [line, setLine] = useState(false)


   const strikeThrough = () => {
    setLine(true)
   }

  return (
    <div className='checking' style={{display: 'flex', flexDirection: 'row',  alignItems:'center', justifyContent:'left', margin:'5px 0px'}}>
        <span style={{backgroundColor: "red", borderRadius: '20%', margin:'0px 9px 0px 0px'}} onClick={strikeThrough}>< DeleteIcon style={{ margin: "1px 1px", padding:'2px 1px 0px 1px '}} onClick={() => {props.onSelect(props.id)}}> </DeleteIcon></span>
        <li style={{textDecoration : line? 'line-through' : 'none'}}>{props.text}</li>
    </div>
  )
}

export default MainDisplay