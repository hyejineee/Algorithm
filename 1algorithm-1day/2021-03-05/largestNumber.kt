package algorithm_kt

fun maxNumber(numbers: IntArray): String {
    val answer = numbers.map {
        it.toString()
    }.sortedWith(Comparator { o1, o2 ->
        (o2 + o1).compareTo(o1 + o2)
    }).joinToString("")

    if (answer.first() == '0') {
        return "0"
    }

    return answer
}