import React from "react";
import {FOOTER_LINKS} from "../../constants/constants";
import './footer.css'

const Footer = () => {
  return(
      <div className={'landingScreen__footer'}>
          <p>Questions? Call 000-800-040-1843</p>
          <div className={'landingScreen__footerLinks'}>
              {FOOTER_LINKS.map((footer, index) => {
                  return (
                      <a key={index} href={footer.url}>{footer.text}</a>
                  )
              })}
          </div>
          <p>Netflix India</p>
      </div>
  )
}
export default Footer;
