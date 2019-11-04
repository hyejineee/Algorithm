package com.hyejineee.passingTruck

import java.util.*

fun passingTruck(bridge_length: Int, weight: Int, truck_weights: IntArray):Int{
    var bridge_stack = Stack<Int>()
    //1. 다리 위의 트럭의 무게가 10 미만인 경우에만 다리에 트럭을 하나씩 올린다.
    bridge_stack.push(truck_weights[0])
    if(bridge_stack.sum() <10 ) bridge_stack.push(truck_weights[1])

    return 0
}