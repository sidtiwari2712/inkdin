import React from 'react'
import "./css/widget.css"
import InfoIcon from '@mui/icons-material/Info';


function Widget() {
  return (
      <>
    
 <div className="widget">
    <div className="widget_top">
    <div className="widget__header">
    <h4>LinkedIN News</h4>
    <InfoIcon/>
    </div>
    <div className="widget__body">
        <ul className="widget__options">
            <li>
                <h4>Slaying Job search Fees</h4>
                <p>6d ago * 4,55 readers</p>
            </li>
            <li>
                <h4>
                    A two pizza rule for eating
                </h4>
                <p>2d ago *6,12 readers</p>
            </li>
            <li>
                <h4>Flexi leave is the  new flexi</h4>
                <p>4d ago *6,12 readers</p>
            </li>
            <li>
                <h4>How to Handle workspace breakup</h4>
                <p>3d ago *7,12 readers</p>
            </li>
        </ul>
    </div>
    </div>
    <div className="widget_bottom">
    <div className="widget__header">
    <h4>Today's top courses</h4>
    <InfoIcon/>
    </div>
    <div className="widget__body">
    <ul className="widget__options">
            <li>
                <h4>Trading</h4>
                <p>6d ago * 4,55 readers</p>
            </li>
            <li>
                <h4>Power of money</h4>
                <p>6d ago * 4,55 readers</p>
            </li>
            <li>
                <h4>enterpreneurs</h4>
                <p>6d ago * 4,55 readers</p>
            </li>
            <li>
                <h4>critical thinking for better judgement</h4>
                <p>6d ago * 4,55 readers</p>
            </li>
            </ul>



    </div>




    </div>
    
 </div>
 </>

  )
}

export default Widget