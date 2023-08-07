import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
let f;


let count=0;
function GH()
{
  
let [list,set]=useState();
let [r,set1] = useState([]);

let Ji =()=>
{
  if(document.getElementById('lo').value!="")
  {
    document.getElementById('lo').value="";
    set(f);
    set1(()=>{
      return ([...r,f]);
    });
  }
  
}

let Hj =(event)=>
{
  f = event.target.value;
}

let Ob =(e)=>{
  console.log("press delete button", e.target.id);
  document.getElementById('i'+e.target.id).style.textDecoration="line-through";
}

  return(
    <>
    <div className='all'>
    <div className='head'>
      <h1 className='header'>TO DO LIST</h1>
    </div>
    <TextField type='text' id='lo' name='f1' placeholder='Add to do' className='i1' onChange={Hj} variant="standard"/>
    <Tooltip title="Add button">
    <button className='b1' onClick={Ji}><AddIcon></AddIcon></button></Tooltip>
    {
      r.map((value,index)=>{
        return(
          <>
          <br></br>
          <p id={'i'+index} className='j1'>{value}</p>
          <Tooltip title="delete button">
          <button id={index} onClick={Ob} className='b2'>
            <DeleteForeverIcon/>
          </button>
          </Tooltip>
          </>
        )
      })
    }
    </div>
    </>
  )
}
ReactDOM.render(
  <>
<GH></GH>
  </>,
  document.getElementById("root")
);