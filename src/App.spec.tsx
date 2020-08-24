import React from 'react'
import {mount} from 'enzyme'
import App from './App'
import TimerComponent from './Components/timerComponent/TimerComponent'


describe('Render App Component' , ()=>{
   const appComponent = mount(<App/>);

   it('Should Render a Div' , ()=>{
   
    expect(appComponent.find('div').length).toBeGreaterThanOrEqual(1);
  })

  it('Should Render the Timer Component', ()=>{

     expect(appComponent.containsMatchingElement(<TimerComponent/>)).toEqual(true);
  })


   // Testing Play , Resume , Stop Functionalities  
   
  it('Should Start timer ' ,()=> {
    appComponent.find(".stopwatch-btn-green").simulate('click');
    expect(appComponent.find('.stopwatch span:last-child').text()).toBe("1");
  })

  it('Should Pause the timer ' ,()=> {
    appComponent.find(".stopwatch-btn-yel").simulate('click');
    expect(appComponent.find('.stopwatch span:last-child').text()).toBe("1");
  })

  it('Should Resume the timer ' ,()=> {
    appComponent.find(".stopwatch-btn-green").simulate('click');
    expect(appComponent.find('.stopwatch span:last-child').text()).toBe("2");
  })

  it('Should Reset timer ' ,()=> {
    appComponent.find(".stopwatch-btn-red").simulate('click');
    expect(appComponent.find('.stopwatch span:last-child').text()).toBe("00");
  })

})