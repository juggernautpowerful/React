import React from 'react'
import {Login} from './../Login'
import {expect} from 'chai'
import {mount} from 'enzyme'
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

describe ('test group 1', ()=>{
    it('Login test input exists', ()=>{
        let login = mount(<Login changePath={()=>{}} />);
        login.mount();

        expect(login.find(Input).length).to.greaterThan(0);
    })

    it('Login test button exists', ()=>{
        let login = mount(<Login changePath={()=>{}} />);
        login.mount();

        expect(login.find(Button).length).to.greaterThan(0);
    })
});