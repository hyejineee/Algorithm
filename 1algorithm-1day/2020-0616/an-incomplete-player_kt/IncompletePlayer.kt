package algorithm_kt

fun incompletePlayer(p: Array<String>, c: Array<String>): String {

    val map = p.groupBy { it }

    for ((t, u) in map) {
        if (u.size - c.count { it == t } != 0) {
            return t
        }
    }
    
    return ""
}