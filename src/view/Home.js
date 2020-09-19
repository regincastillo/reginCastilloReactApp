import React, { Component } from 'react';
import '../style/style.css';
import arrow from '../images/arrow-down.svg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    link_title: 'Quick view',
                },
                {
                    link_title: 'Equipment',
                    submenu: [
                        'Equipment',
                        'Equipment'
                    ]
                },
                {
                    link_title: 'Monitoring Status',
                    submenu: [
                        'Monitoring Status',
                        'Monitoring Status'
                    ]
                },
                {
                    link_title: 'SC Fallover',
                    submenu: [
                        'SC Fallover',
                        'SC Fallover'
                    ]
                },
                {
                    link_title: 'Trial Parameters',
                },
                {
                    link_title: 'Dashboard',
                }

            ]
        }
        this.renderLink = this.renderLink.bind(this);

    }

    renderLink () {
        return this.state.links.map(item => {

            if (typeof item.submenu === 'undefined') {
                return (
                    <li>
                        {item.link_title}
                    </li>
                )
            }

            return (
                <li>
                    <div className="d-flex justify-content-between">
                        <span className="sub-menubar-btn">{item.link_title}</span> 
                        <img src={arrow} alt="" />
                    </div>
                    <ul className="sub-menubar__link">
                        {item.submenu.map(sub => (
                            <li>{sub}</li>
                        ))}
                    </ul>
                </li>

            );

        })
    }

    render() {
        return (
            <div>
                <div className="menubar  container-fluid d-flex justify-content-between" >

                    <div>
                        <span className="font-weight-bold">Monitoring & Control System</span>
                    </div>
                    {/* <!-- monitoring --> */}

                    <div>
                        <span>Logged in as Justine Lim</span>
                    </div>
                    {/* <!-- logged --> */}
                </div>
                {/* <!-- menubar --> */}

                <div className="side-menubar">
                    <ul className="side-menubar__link">
                        {this.renderLink()}
                    </ul>
                </div>
                {/* side-menubar */}

            </div>
        );
    }
}
export default Home;  