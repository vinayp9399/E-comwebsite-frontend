import { useState, useEffect } from 'react';
import '../css/home.css'
import Slider from './slider';

const Home=()=>{
    
    return(
    <>
    <div class="content">
        {<Slider/>}
        <div className='grid1'>
        <div class="card1">
            <h3 style={{textAlign:'center'}} class="heading">Revamp your home in style</h3>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Cushion covers</h5>
            </div>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/372x232_Home_decor_1._SY232_CB584596691_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Figurines and vases</h5>
            </div>
            <br/>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/372x232_Home_storage_1._SY232_CB584596691_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Home storage</h5>
            </div>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/372x232_Home_lighting_2._SY232_CB584596691_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Lightings</h5>
            </div>
        </div>
        <div class="card1">
            <h3 style={{textAlign:'center'}} class="heading">Up to 60% off | Styles for men</h3>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Clothings</h5>
            </div>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-372-232._SY232_CB636110853_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Footwear</h5>
            </div>
            <br/>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Watches</h5>
            </div>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF_4-372-232._SY232_CB636110853_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Bags and wallets</h5>
            </div>
        </div>
        <div class="card1">
            <h3 style={{textAlign:'center'}} class="heading">Appliances for your home | Up to 55% off</h3>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Air conditioners</h5>
            </div>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Refrigerators</h5>
            </div>
            <br/>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Microwaves</h5>
            </div>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Washing machines</h5>
            </div>
        </div>
        <div class="card1">
            <h3 style={{textAlign:'center'}} class="heading">Starting ₹99 | All your home improvement</h3>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_376x232_4._SY232_CB600489960_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Spin mops</h5>
            </div>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_376x232_3._SY232_CB600489960_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Bathroom hardware</h5>
            </div>
            <br/>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_376x232_7._SY232_CB600489960_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Hammers</h5>
            </div>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_376x232_5._SY232_CB600489960_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Extension boards</h5>
            </div>
        </div>
        <div class="card1">
            <h3 style={{textAlign:'center'}} class="heading">Up to 60% off | Styles for women</h3>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-372-232._SY232_CB636048992_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Women clothings</h5>
            </div>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-372-232._SY232_CB636048992_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Footwears</h5>
            </div>
            <br/>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-372-232._SY232_CB636048992_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Watches</h5>
            </div>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-372-232._SY232_CB636048992_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Fashion jewellery</h5>
            </div>
        </div>
        <div class="card1">
            <h3 style={{textAlign:'center'}} class="heading">Automotive essentials | Up to 60% off</h3>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare2x._SY232_CB410830552_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Cleaning accesories</h5>
            </div>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare2x._SY232_CB410830552_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Tyres and rim care</h5>
            </div>
            <br/>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_372x232._SY232_CB405083904_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Helmets</h5>
            </div>
            <div class="card_child">
            <img class="img1_1" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum2x._SY232_CB410830555_.jpg" alt=""/>
            <br/><h5 style={{padding:"3px"}}>Vaccum cleaners</h5>
            </div>
        </div>
        </div>
        </div>
    </>)
}

export default Home