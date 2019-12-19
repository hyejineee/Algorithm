package printer.hys.saj.hhj

fun printer(priorities: IntArray, location: Int): Int {
    val newPriorities = priorities.mapIndexed { index, i ->
        val isMyDocument = location == index
        Pair(i, isMyDocument)
    }
    return print(newPriorities.toTypedArray(), 0, null)
}

fun print(priorities: Array<Pair<Int, Boolean>>, count: Int, printedDoc: Pair<Int, Boolean>?): Int {
    if (printedDoc?.second == true) return count

    val nextPrints = priorities.drop(1)
    
    if (nextPrints.find { it.first > priorities.first().first } == null)
        return print(nextPrints.toTypedArray(), count + 1, priorities.first())
    return print((nextPrints + priorities.take(1)).toTypedArray(), count, null)
}