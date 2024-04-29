import '../index.css';
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [FA1, setFA1] = useState('');
    const [FA2, setFA2] = useState('');
    const [FA3, setFA3] = useState('');
    const [SA1, setSA1] = useState('');
    const [SA2, setSA2] = useState('');
    const [SA3, setSA3] = useState('');
    const [total1, setTotal1] = useState('');
    const [total2, setTotal2] = useState('');
    const [total3, setTotal3] = useState('');
    const [faAvg, setFaAvg] = useState('');
    const [saAvg, setSaAvg] = useState('');
    const [totalAvg, setTotalAvg] = useState('');
    const [performance, setPerformance] = useState('');
    const [totalGrade, setTotalGrade] = useState('');
    const [saGrade, setSaGrade] = useState('');
    const [faGrade, setFaGrade] = useState('');

    const calculateAvg = () => {
      const faAvg = (Number(FA1) + Number(FA2) + Number(FA3)) / 3;
      setFaAvg(faAvg.toFixed(2));

      const saAvg = (Number(SA1) + Number(SA2) + Number(SA3)) / 3;
      setSaAvg(saAvg.toFixed(2));

      const totalAvg= (Number(total1) + Number(total2) + Number(total3)) / 3;
      setTotalAvg(totalAvg.toFixed(2));
    if(totalAvg>=91){
        setTotalGrade('A1');
        setPerformance('Outstanding');
    }
    else if(totalAvg>=81){
        setTotalGrade('A2');
        setPerformance('Outstanding');
    }
    else if(totalAvg>=71){
        setTotalGrade('B1');
        setPerformance('Excellent');
    }
    else if(totalAvg>=61){
        setTotalGrade('B2');
        setPerformance('Excellent');
     }
    else if(totalAvg>=51){
        setTotalGrade('C1');
        setPerformance('Good');
    }
    else if(totalAvg>=41){
        setTotalGrade('C2');
        setPerformance('Good');
     }
     else if(totalAvg>=33){
        setTotalGrade('D');
        setPerformance('better');
     }
     else if(totalAvg>=21){
        setTotalGrade('E1');
        setPerformance('poor');
      }
      else{
         setTotalGrade('E2');
         setPerformance('poor');
      }




      //For sa
      if(saAvg>=55){
        setSaGrade('A1');
      }
      else if(saAvg>=49){
        setSaGrade('A2');
      }
      else if(saAvg>=43){
        setSaGrade('B1');
      }
      else if(saAvg>=37){
        setSaGrade('B2');
      }
      else if(saAvg>=31){
        setSaGrade('C1');
      }
      else if(saAvg>=25){
        setSaGrade('C2');
      }
      else if(saAvg>=20){
        setSaGrade('D');
      }
      else if(saAvg>=13){
        setSaGrade('E1');
      }
      else{
        setSaGrade('E2');
      }



      //For Fa 
      if(faAvg>=37){
        setFaGrade('A1');
      }
      else if(faAvg>=33){
        setFaGrade('A2');
      }
      else if(faAvg>=29){
        setFaGrade('B1');
      }
      else if(faAvg>=25){
        setFaGrade('B2');
      }
      else if(faAvg>=21){
        setFaGrade('C1');
      }
      else if(faAvg>=17){
        setFaGrade('C2');
      }
      else if(faAvg>=13){
        setFaGrade('D');
      }
      else if(faAvg>=9){
        setFaGrade('E1');
      }
      else{
        setFaGrade('E2');
      }
    }

  const handleFA1Change = (e) => {
      const newfaValue1 = e.target.value;
      if(newfaValue1<=40){
        setFA1(newfaValue1);
        calculatefaTotal1(newfaValue1);
      }
      else{
        window.alert("Please enter the value upto 40");
      }
  };
      const handleFA2Change = (e) => {
        const newfaValue2 = e.target.value;
        if(newfaValue2<=40){
          setFA2(newfaValue2);
          calculatefaTotal2(newfaValue2);
        }
        else{
          window.alert("Please enter the value upto 40");
        }
      };
      const handleFA3Change = (e) => {
        const newfaValue3 = e.target.value;
        if(newfaValue3<=40){
          setFA3(newfaValue3);
          calculatefaTotal3(newfaValue3);
        }
        else{
          window.alert("Please enter the value upto 40");
        }
      };
      
      
  
      const handleSA1Change = (e) => {
        const newValue1 = e.target.value;
        if(newValue1<=60){
          setSA1(newValue1);
          calculateTotal1(newValue1);
        }
        else{
          window.alert("Please enter the value upto 60");
        }
      };
      const handleSA2Change = (e) => {
        const newValue2 = e.target.value;
        if(newValue2<=60){
          setSA2(newValue2);
          calculateTotal2(newValue2);
        }
        else{
          window.alert("Please enter the value upto 60");
        }
      };
      const handleSA3Change = (e) => {
        const newValue3 = e.target.value;
        if(newValue3<=60){
          setSA3(newValue3);
          calculateTotal3(newValue3);
        }
        else{
          window.alert("Please enter the value upto 60");
        }
      };
  
  
  
      const calculateTotal1 = (newValue1) => {
        const total1 = Number(FA1) + Number(newValue1);
        setTotal1(total1);
      };
      const calculateTotal2 = (newValue2) => {
          const total2 = Number(FA2) + Number(newValue2);
          setTotal2(total2);
  
      };
      const calculateTotal3 = (newValue3) => {
          const total3 = Number(FA3) + Number(newValue3);
          setTotal3(total3);
      };
      
  
  
      const calculatefaTotal1 = (newfaValue1) => {
        const total1 = Number(newfaValue1) + Number(SA1);
        setTotal1(total1);
      };
      const calculatefaTotal2 = (newfaValue2) => {
        const total2 = Number(newfaValue2) + Number(SA2);
        setTotal2(total2);
      };
      const calculatefaTotal3 = (newfaValue3) => {
        const total3 = Number(newfaValue3) + Number(SA3);
        setTotal3(total3);
      };

    return (
        <div className='whole_div'>
            <div className='top'>
            <h1 className='grade_heading'>GRADE CALCULATOR</h1>
            <div className='grade_div'>
            <table className='mark_table'>
                <thead>
                    <tr>
                        <th className='table_heading'></th>
                        <th className='table_heading'>FA</th>
                        <th className='table_heading'>SA</th>
                        <th className='table_heading'style={{borderRight:'0px'}}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='table_data'style={{textAlign:'center'}}>Term I</td>
                        <td className='table_data'><input type='text' id='FA1' value={FA1} onChange={handleFA1Change} /></td>
                        <td className='table_data'><input type='text' id='SA1' value={SA1} onChange={handleSA1Change} /></td>
                        <td className='table_data'style={{borderRight:'0px'}}>{total1}</td>
                    </tr>
                    <tr>
                        <td className='table_data'style={{textAlign:'center'}}>Term II</td>
                        <td className='table_data'><input type='text' id='FA2' value={FA2} onChange={handleFA2Change} /></td>
                        <td className='table_data'><input type='text' id='SA2' value={SA2} onChange={handleSA2Change} /></td>
                        <td className='table_data'style={{borderRight:'0px'}}>{total2}</td>
                    </tr>
                    <tr>
                        <td className='table_data' style={{borderBottom:'0px',textAlign:'center'}}>Term III</td>
                        <td className='table_data'style={{borderBottom:'0px'}}><input type='text' id='FA3' value={FA3} onChange={handleFA3Change} /></td>
                        <td className='table_data'style={{borderBottom:'0px'}}><input type='text' id='SA3' value={SA3} onChange={handleSA3Change} /></td>
                        <td className='table_data'style={{borderBottom:'0px',borderRight:'0px'}}>{total3}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <button  id="calculateBtn" className="cal_btn" onClick={calculateAvg}>Calculate</button>

            </div>
            <div className='bottom'>
        <div className='card-container'>
            <div className='card-container-up'>
        <div className='cards card1'>
          <span className='card-title'>Total</span>
          <span className='card-value'>{totalAvg}</span>
          <span className='card-value'>{totalGrade}</span>
        </div>
        <div className='cards card2'>
          <span className='card-title'>SA Average</span>
          <span className='card-value'>{saAvg}</span>
          <span className='card-value'>{saGrade}</span>
        </div>
        </div>
        <div className='card-container-bottom'>
        <div className='cards card3'>
          <span className='card-title'>FA Average</span>
          <span className='card-value'>{faAvg}</span>
          <span className='card-value'>{faGrade}</span>
        </div>
        <div className='cards card4'>
          <span className='card-title'>Performance</span>
          <span className='card-value'>{performance}</span>
          
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Home;