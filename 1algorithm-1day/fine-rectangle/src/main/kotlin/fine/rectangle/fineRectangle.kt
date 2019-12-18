package fine.rectangle

fun fineRectangle(w: Int, h: Int): Long = w.toLong() * h.toLong() - wrongRectanglesCount(w, h)

fun wrongRectanglesCount(w: Int, h: Int): Long {
    val g = gcd(w, h)
    return g * (w / g + h / g - 1).toLong()
}

fun gcd(num1: Int, num2: Int): Int = maxCommon(calculateFactors(num1), calculateFactors(num2))

fun maxCommon(numbers1: Array<Int>, numbers2: Array<Int>): Int {
    for (i in numbers1.reversedArray()) {
        if (i in numbers2) {
            return i
        }
    }
    return 1
}

fun calculateFactors(num: Int): Array<Int> = (1..num).filter { num % it == 0 }.toTypedArray()


