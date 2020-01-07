package numberOf124

fun convertTo124(n: Int): String = when (n) {
    1 -> "1"
    2 -> "2"
    3 -> "4"
    else -> "${convertTo124((n - 1) / 3)}${convertTo124((n - 1) % 3 + 1)}"
}
