import React from 'react';

export class Header extends React.Component  {
    render() { 
        const {items, changePath} = this.props;
        return (
            <header>
              {items.map((item) =>(
                
                <button key={item.path} onClick={() => changePath(item.path)} >{item.name}</button>
              )
              )}
          </header>
        )
      }
};

