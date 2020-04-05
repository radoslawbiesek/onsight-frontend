import React from 'react';
import './SidebarSection.css';

class SidebarSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        return (
            <div className='sidebar-section'>
                <h1 className="sidebar-section__title">{this.props.title}
                    <span 
                        className='sidebar-section__dropdown'
                        onClick={this.handleClick}
                    >
                        &#9660;
                    </span>
                </h1>
                <div 
                    className= {!this.state.checked ? 'sidebar-section__content shown' : 'sidebar-section__content'}
                >   
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default SidebarSection;