// React imports
import React from "react";
import ListWeapons from './components/listWeapons';

// Redux imports
import { fetchWeapons } from './redux/actions/weapons';
import { useDispatch } from 'react-redux';

export default function Weapons() {
  const dispatch = useDispatch();

  dispatch(fetchWeapons(dispatch))

  return(
    <table style={{width: '100%'}}>
      <tbody>
        <ListWeapons/>
      </tbody>
    </table>
  )
}