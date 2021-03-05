fun hIndex(citations: IntArray): Int {
    var center = citations.sortedArrayDescending()[citations.size / 2]

    while (center > 0) {
        if ((citations.filter { it >= center }).count() >= center) {
            break
        }
        center--
    }

    return center
}