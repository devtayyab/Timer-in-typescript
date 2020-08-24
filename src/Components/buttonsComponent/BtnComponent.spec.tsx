import React from 'react'   
import {shallow} from 'enzyme'
import BtnComponent from './BtnComponent'
import App from '../../../src/App'

describe('Button Components' , () => {
    let btnCompoent:any;

    beforeEach( ()=> {
        btnCompoent = shallow(<BtnComponent/>);
    })

    it('Should render 3 buttons ' ,()=> {
        expect(btnCompoent.find('button').length).toEqual(3);
    })

   
    
})