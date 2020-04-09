import React from 'react';

export class Header extends React.Component  {
    render() { 
        return (
            <header>

            {this.props.items.map((item) =>(
              
              <button key={item.path} onClick={() => this.props.changePath(item.path)} >{item.name}</button>
            )
            )}
    
          </header>
        )
      }
};

