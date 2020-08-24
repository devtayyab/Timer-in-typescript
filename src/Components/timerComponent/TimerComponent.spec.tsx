import React from 'react'
import {shallow} from 'enzyme'
import TimerComponent from './TimerComponent'


describe('TimerComponent', () => {
    const time = { ms: 0, s: 0, m: 0, h: 0 } ;
   let container = shallow(<TimerComponent time={time} />);

    it('Should Render 4 span Tags' ,()=>{
        expect(container.find('span').length).toEqual(4);

    })
})  
