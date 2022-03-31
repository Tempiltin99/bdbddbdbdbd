
import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Education from './Education/Education'
import Skilis from './Siklis/Skilis'
import Port from './Portfolio/Port'
import './myresum.scss'
const MyResum = () => {
    return (
        <>
            <section id='MyResum'>
                <div className="container">
                  
                    <div className="row">
                        <div className="col-12">
                            <div className="sectionTitle text-center">
                                <span className="subtitle">1+ YEARS OF EXPERIENCE</span>
                                <h2 className="title">My Resume</h2>
                            </div>
                        </div>
                        <div className="col-12">
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="myres mb-3" >
                                <Tab eventKey="home" title="education" >
                                    <Education />
                                </Tab>
                                <Tab eventKey="professional" title="professional
                                    Skills">
                                  <Skilis />
                                </Tab>
                                <Tab eventKey="experience" title="experience" >
                                    <Port />
                                </Tab>

                            </Tabs>
                        </div>
                    </div>
                    <hr className='Hrm'/>
                </div>
            </section>
        </>
    )
}

export default MyResum