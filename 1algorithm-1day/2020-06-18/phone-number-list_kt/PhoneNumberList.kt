fun PhoneNumberList(list: Array<String>): Boolean {
    list.sortedBy { it.length }

    return !list.mapIndexed { index, s ->
        isStartWithPhoneNumber(s, list.drop(index + 1))
    }.contains(true)
}

fun isStartWithPhoneNumber(v: String, arr: List<String>) = arr.groupBy {
    it.startsWith(v)
}.containsKey(true)


