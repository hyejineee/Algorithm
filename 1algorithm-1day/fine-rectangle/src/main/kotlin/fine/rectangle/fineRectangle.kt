package fine.rectangle

fun fineRectangle(w: Int, h: Int) =
        w.toLong() * h.toLong() - wrongRectanglesCount(w, h)

fun wrongRectanglesCount(w: Int, h: Int): Long {
    val g = gcd(w, h)
    return g * (w / g + h / g - 1).toLong()
}

fun gcd(num1: Int, num2: Int) =
        maxCommon(calculateFactors(num1), calculateFactors(num2))

fun maxCommon(numbers1: Array<Int>, numbers2: Array<Int>) =
        numbers1.reversedArray().find { it in numbers2 } ?: 1

fun calculateFactors(num: Int) =
        (1..num).filter { num % it == 0 }.toTypedArray()
