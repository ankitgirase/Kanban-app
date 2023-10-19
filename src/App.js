import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Priority from './components/Priority';
import Name from './components/Name';
import Status from './components/Status';

// PiCellSignalMediumFill
// PiCellSignalHighFill
// PiCellSignalFullFill

function App() {

  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [selectedPriority, setSelectedPriority] = useState('Priority');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(()=>{

    if(selectedStatus === "status"){
        navigate('/');
    }
    else if(selectedStatus === 'user'){
      navigate('/name')
    }
    else if(selectedStatus === 'priority'){
      navigate('/priority');
    }

  },[selectedStatus, selectedPriority])



  // Handle selecting a value from the "Status" dropdown
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  // Handle selecting a value from the "Priority" dropdown
  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  const popupRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
     <div>

      <nav className='navbar'>
      <div className="container">

          <div onClick={togglePopup} className='display'>
            <p>IC</p>
            <p >Display </p>
            <span>▽</span>
          </div>

          
     
      
      <div className={`popup ${isPopupOpen ? 'open' : ''}`} ref={popupRef}
        style={{ top: isPopupOpen ? '40px' : '-9999px' }}>
        <div className="box">
          <div className="row">
            <div className="label">Grouping</div>
            <div className="dropdown">
              <select value={selectedStatus} onChange={handleStatusChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="label">Ordering</div>
            <div className="dropdown">
              <select value={selectedPriority} onChange={handlePriorityChange}>
                <option value="priority"><bold>Priority</bold></option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
         
        </div>
      </div>
    </div>

      </nav>

      {
        // (toggle && 
        //   <div className='grouping-box'>

        //     <div>
        //       <p>Grouping</p>
        //       <option value="">x</option>
        //     </div>
        //   </div>
        //    )

        
          
      }

      <div className='main-content'>

    
        <Routes >
          
          <Route path='/' element={<Status sortBy = {selectedPriority}/>} />

          <Route path='/priority' element={<Priority sortBy = {selectedPriority}/>}/>

          <Route path='/name' element={<Name sortBy = {selectedPriority }/>}/>

            
        </Routes>

      
      </div>
      

    
    </div>
  );
}

export default App;
