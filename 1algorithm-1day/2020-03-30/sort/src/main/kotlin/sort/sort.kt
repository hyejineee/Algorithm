package sort

fun bubble(nonSorted: IntArray): IntArray {
    // 버블 정렬 : 인접한 두 수를 비교하여 자리를 교환하는 작업을 정렬이 완료될 때 까지 수행한다.
    for (i in nonSorted.indices) {
        for (j in nonSorted.indices) {
            if (j + 1 > nonSorted.size - 1) break
            if (nonSorted[j] > nonSorted[j + 1]) {
                val temp = nonSorted[j]
                nonSorted[j] = nonSorted[j + 1]
                nonSorted[j + 1] = temp
            }
        }
    }
    return nonSorted
}

fun selectionSort(nonSorted: IntArray): IntArray {
    //선택 정렬 : 선택한 수와 나머지 리스트에 있는 수를 비교하여 최소값을 찾아 자리를 교환하는 작업을 정렬이 완료될 때까지 수행한다.

    for (i in nonSorted.indices) {
        if (i + 1 > nonSorted.size - 1) break
        var minValue = Pair(nonSorted[i], i)
        for (j in i + 1 until nonSorted.size) {
            if (minValue.first > nonSorted[j]) {
                minValue = Pair(nonSorted[j], j)
            }
        }
        nonSorted[minValue.second] = nonSorted[i]
        nonSorted[i] = minValue.first
    }
    return nonSorted
}

fun insertionSort(nonSorted: IntArray): IntArray {
    val sorted = mutableListOf<Int>()
    sorted.add(nonSorted[0])
    for (i in 1 until nonSorted.size) {
        sorted.add(nonSorted[i])
        for (j in sorted.size - 2 downTo 0) {
            if (sorted[j] > sorted[j + 1]) {
                val temp = sorted[j]
                sorted[j] = sorted[j + 1]
                sorted[j + 1] = temp
            }
        }
    }
    return sorted.toIntArray()
}

fun mergeSort(nonSorted: List<Int>): List<Int> {

    if (nonSorted.size > 1) {
        val (left, right) = divideList(nonSorted)

        val leftList = mergeSort(left)
        val rightList = mergeSort(right)

        val copyLeft = leftList.toMutableList()
        val copyRight = rightList.toMutableList()

        val sorted = mutableListOf<Int>()

        while (copyLeft.isNotEmpty() && copyRight.isNotEmpty()) {
            if (copyLeft[0] > copyRight[0]) {
                sorted.add(copyRight[0])
                copyRight.removeAt(0)
            } else {
                sorted.add(copyLeft[0])
                copyLeft.removeAt(0)
            }
        }

        when {
            copyLeft.isEmpty() -> sorted.add(copyRight[0])
            else -> sorted.add(copyLeft[0])
        }
        return sorted
    }
    return nonSorted
}

fun divideList(list: List<Int>): Pair<List<Int>, List<Int>> {
    val count = ((list.size) / 2)
    val left = list.take(count)
    val right = list.takeLast(list.size - count)
    return Pair(left, right)
}

fun quickSort() {

}