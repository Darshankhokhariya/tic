import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import './App.css';

function App() {


  function newgame() {
    window.location.reload(true);
  }

                              // raw

  function win()
  {
    if((b1 == "X" && b2 == "X" && b3 == "X") || (b4 == "X" && b5 == "X" && b6 == "X") || (b7 == "X" && b8 == "X" && b9 == "X"))
    {
        alert("X is win")
    }
    else if((b1 == "O" && b2 == "O" && b3 == "O") || (b4 == "O" && b5 == "O" && b6 == "O") || (b7 == "O" && b8 == "O" && b9 == "O"))
    {
        alert("O is win")
    }

                                        // col

    else if((b1 == "X" && b4 == "X" && b7 == "X") || (b2 == "X" && b5 == "X" && b8 == "X") || (b3 == "X" && b6 == "X" && b9 == "X"))
    {
        alert("X is win")
    } 
    else if((b1 == "O" && b2 == "O" && b3 == "O") || (b4 == "O" && b5 == "O" && b6 == "O") || (b7 == "O" && b8 == "O" && b9 == "O"))
    {
        alert("O is win")
    }
     

                                        // cross
    else if((b1 == "X" && b5 == "X" && b9 == "X") || (b3 == "X" && b5 == "X" && b7 == "X"))
    {
        alert("X is win")
    } 
    else if((b1 == "O" && b5 == "O" && b9 == "O") || (b3 == "O" && b5 == "O" && b7 == "O"))
    {
        alert("O is win")
    }

  }

  const[b1,setb1] = useState(' ');
  const[b2,setb2] = useState(' ');
  const[b3,setb3] = useState(' ');
  const[b4,setb4] = useState(' ');
  const[b5,setb5] = useState(' ');
  const[b6,setb6] = useState(' ');
  const[b7,setb7] = useState(' ');
  const[b8,setb8] = useState(' ');
  const[b9,setb9] = useState(' ');


  const [cnt, setcnt] = useState(0)





  const btn1 = () => {
    if (b1 == " ")
    {
      if(cnt%2==0)
      { 
          setb1('X')
          setcnt(cnt+1)
      }
      else
      {
          setb1('O')
          setcnt(cnt+1)
      }
      win();
    }
  }
  const btn2 = () => {

   if (b2 == " ")
   {
    if(cnt%2==0)
    {
        setb2('X')
        setcnt(cnt+1)
    }
    else
    {
        setb2('O')
        setcnt(cnt+1)
    }
    win();
   }
  }
  const btn3 = () => {  
    if(b3 == " ")
    {
      if(cnt%2==0)
      {
          setb3('X')
          setcnt(cnt+1)
      }
      else
      {
          setb3('O')
          setcnt(cnt+1)
      }
      win();
    }
  }
  const btn4 = () => {
    if (b4 == " ")
    {
      if(cnt%2==0)
      {
          setb4('X')
          setcnt(cnt+1)
      }
      else
      {
          setb4('O')
          setcnt(cnt+1)
      }
      win();

    }
  }
  const btn5 = () => {
      if (b5 == " ")
      {
        if(cnt%2==0)
        {
            setb5('X')
            setcnt(cnt+1)
        }
        else
        {
            setb5('O')
            setcnt(cnt+1)
        }
      win();

      }
  }
  const btn6 = () => {
      if(b6 == " ")
      {
        if(cnt%2==0)
        {
            setb6('X')
            setcnt(cnt+1)
        }
        else
        {
            setb6('O')
            setcnt(cnt+1)
        }
      win();
        
      }
  }
  const btn7 = ( ) => {
       if(b7 == " ")
       {
        if(cnt%2==0)
        {
            setb7('X')
            setcnt(cnt+1)
        }
        else
        {
            setb7('O')
            setcnt(cnt+1)
        }
      win();

       }
  }
  const btn8 = ( ) => {
    if(b8 == " ")
    {
     if(cnt%2==0)
     {
         setb8('X')
         setcnt(cnt+1)
     }
     else
     {
         setb8('O')
         setcnt(cnt+1)
     }
     win();

    }
  }
  const btn9 = ( ) => {

    if(b9 == " ")
    {
     if(cnt%2==0)
     {
         setb9('X')
         setcnt(cnt+1)
     }
     else
     {
         setb9('O')
         setcnt(cnt+1)
     }
     win();

    }
  }

  return (
   <>
   
   <div className='main'>
    	<input type="button" className='btn' value={b1} onClick={btn1} name=""/>
      <input type="button" className='btn' value={b2} onClick={btn2} name=""/>
      <input type="button" className='btn' value={b3} onClick={btn3} name=""/><br/> 
      <input type="button" className='btn' value={b4} onClick={btn4} name=""/>
      <input type="button" className='btn' value={b5} onClick={btn5} name=""/>
      <input type="button" className='btn' value={b6} onClick={btn6} name=""/><br/> 
      <input type="button" className='btn' value={b7} onClick={btn7} name=""/>
      <input type="button" className='btn' value={b8} onClick={btn8} name=""/>
      <input type="button" className='btn' value={b9} onClick={btn9} name=""/><br/><br/>
    
      
      <button  onClick={newgame}> NEW GAME </button> 
   </div>
   
   </>
  );
}

export default App;
