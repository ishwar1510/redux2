// to get hold of any state in the redux store we use useSelector hook

import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
// import { buyCake } from '../redux'
import { buyCake } from '../redux/cake/CakeAction'


function HooksCakeContainer() {
    const numOfCakes = useSelector (state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>(use hooks) Num of Cakes -{numOfCakes} </h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer

