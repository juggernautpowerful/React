import React from 'react';
import { Logo } from "loft-taxi-mui-theme";

export class Header extends React.Component  {
    render() { 
        const {items, changePath} = this.props;
        return (
            <header>
              <Logo animated />
              {items.map((item) =>(
                <button key={item.path} onClick={() => changePath(item.path)} >{item.name}</button>
              )
              )}
          </header>
        )
      }
};

