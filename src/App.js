import {useState} from 'react'
import Countdown from "./components/countdown/Countdown";
import Product from "./components/Product/Product";




function App() {
   const [showCountDown, setShowCountDown] = useState(true);
   const [showBtn, setShowBtn] = useState(true)
   
  

  return (
    
    <div>
      {showCountDown &&  (
        <Countdown onHideCountDown={()=> setShowCountDown(false)}/>
      )}
     {/*  this && means then */}
        
       {
        showBtn && (
          <Product  handleShowBtn={()=> setShowBtn(false)}   onHideCountDown={()=> setShowCountDown(true)}/>
        )
       }
    </div>
  );
}

export default App;
