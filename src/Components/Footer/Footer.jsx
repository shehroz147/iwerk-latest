import React from 'react'
import './footer.css'
import logo from '../Pictures/logo.png'

export default function Footer() {
  return (
      <>
    <div className="my-container my-footer">
                <div className="container p-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-2 col-12">
                            <img className="footer-img" src={logo} alt="" />
                        </div>
                        <div className="col-lg-2 col-6 mb-2">
                            <p className="footer-para" style={{ color: "#5BBAB6" }}>Detroit</p>
                            <p className="footer-para">306 S Wishington Suite 500</p>
                            <p className="footer-para" >Royal Oak, MI 48067 (248) 591.0000</p>

                        </div>
                        <div className="col-lg-2 col-6 mb-2">
                            <p className="footer-para mb-2" style={{ color: "#5BBAB6" }}>Dallas/Fort Worth</p>
                            <p className="footer-para">1701 River Run Suite 809</p>
                            <p className="footer-para">Fort Worth, Texas 760107 (817) 236.2555</p>
                        </div>
                        <div className="col-lg-2 col-6 mb-2">
                            <p className="footer-para mb-2"  style={{ color: "#5BBAB6" }}>Mesa</p>
                            <p className="footer-para">245 W. 2nd St., Mesa, AZ 5201 (480) 331.3450</p>
                        </div>
                        <div className="col-lg-2 col-6 mb-2">
                            <p className="footer-para mb-2"  style={{ color: "#5BBAB6" }}>Connect</p>
                            <p className="footer-para">Career</p>
                            <p className="footer-para">Contact</p>
                            <ul className='footer-ul'>
                                <li className='footer-li'><a href="" className='footer-a'><i className="bi bi-facebook text-light"></i></a></li>
                                <li className='footer-li'><a href="" className='footer-a'><i className="bi bi-instagram text-light"></i></a></li>
                                <li className='footer-li'><a href="" className='footer-a'><i className="bi bi-linkedin text-light"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="my-container-2">
                <div className="py-4">
                    <div className="col-12">
                        <p className='text-center' style={{  color: 'rgb(211, 207, 207)'}}>
                            Copyright © 2021 iwerk. All rights reserverd
                        </p>
                    </div>
                </div>
            </div>
            </>
  )
}
