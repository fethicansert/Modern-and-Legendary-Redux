import React from 'react'
import LegendRxCounter from './Components/LegendRx_Counter';
import ThemePage from '../modernRedux/Components/ModernThemePage';
import LegendRxThemePage from './Components/LegendRx_ThemePage';
const LegendaryRxApp = () => {
  return (
    <div className='legendary-app'>
        <h1>Legandary Redux</h1>
        <LegendRxCounter />
        <LegendRxThemePage />
    </div>
  )
}

export default LegendaryRxApp;
