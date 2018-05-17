import React from 'react';


export class Footer extends React.Component {
    render() {
        return (
                
          <footer className="footer">
               <ul className="social">
                    <li className="socialIcon"><a href="#" target="_blank" className="fa fa-facebook-f" ></a></li>
                    <li className="socialIcon"><a href="#" target="_blank" className="fa fa-google-plus"></a></li>
                    <li className="socialIcon"><a href="#" target="_blank" className="fa fa-facebook-official"></a></li>
                    <li className="socialIcon"><a href="#" target="_blank" className="fa fa-github"></a></li>
                    <li className="socialIcon"> <a href="#" target="_blank"className="fa fa-twitter"></a></li>
               </ul>
                  
                     <span id="copy">© 2017 Copyright</span> 
                
                     <h4>London office</h4> 
                     <p>52 Battersea Park Road, </p> 
                     <p>Battersea, London</p>
                     <span>SW11 4JP</span>
                     <a id="phone-footer" className="phone-link-yellow" href="tel:07428-390052">07428 390052</a>
            </footer>
        );
    }
}

export default Footer;
