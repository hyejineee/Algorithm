package passingtruck

import java.util.*

fun passingTruck(
    bridge_length: Int,
    weight: Int,
    truck_weights: IntArray
): Int {
    var second = 0
    var waitingTrucks = ArrayDeque<Int>(truck_weights.toMutableList())
    var trucksInBridge = mutableListOf<Pair<Int, Int>>()
    var passedTrucks = ArrayDeque<Int>()

    while (passedTrucks.size != truck_weights.size) {
        second += 1

        if (trucksInBridge.isNotEmpty() && trucksInBridge.first().second >= bridge_length) {
            passedTrucks.offerLast(trucksInBridge.first().first)
            trucksInBridge.removeAt(0)
        }

        if (waitingTrucks.isNotEmpty() && trucksInBridge.sumBy { it.first } + waitingTrucks.peek() <= weight) {
            trucksInBridge.add(Pair(waitingTrucks.poll(), 0))
        }

        trucksInBridge.replaceAll { p -> Pair(p.first, p.second + 1) }
    }
    return second
}