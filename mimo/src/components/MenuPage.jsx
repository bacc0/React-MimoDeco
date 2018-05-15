import React from 'react';


export class MenuPage extends React.Component {
    render() {
        return (
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                <label for="navi-toggle" className="navigation__button">
                    <span className="navigation__iconTop">&nbsp;</span>
                    <span className="navigation__iconMid">&nbsp;</span>
                    <span className="navigation__iconDown">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav ">
                    <table>
                        <tr>
                            <th></th>
                        </tr>
                        <tr>
                            <th></th>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="navigation__litem"><a href="/" className="navigation__link ">
                                <i className="material-icons right"> home</i> Home</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="navigation__litem"><a href="/discover" className="navigation__link">
                                <i className="material-icons right"> brush</i> Discover</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="navigation__litem"><a href="/quote" className="navigation__link">
                                <i className="material-icons right">format_paint</i> Recive a Quote</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="navigation__litem"><a href="/map" className="navigation__link">
                                <i className="material-icons right">map</i> Map</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="navigation__litem"><a href="/contact" className="navigation__link">
                                <i className="material-icons right">add_location</i> Contact us </a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <th></th>
                        </tr>
                        <tr>
                            <th></th>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </table>
                </nav>
            </div>
        );
    }
}

export default MenuPage;