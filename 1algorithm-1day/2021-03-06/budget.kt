package algorithm_kt

import kotlin.math.floor

fun budget(budgets: IntArray, m: Int): Int {
    if (budgets.sum() <= m) {
        return budgets.max() ?: budgets.sortedArray().last()
    }

    return budget(
        m / budgets.size,
        m,
        budgets,
        budgets.filter { it > (m / budgets.size) }.count()
    )
}

tailrec fun budget(allocateBudget: Int, m: Int, budgets: IntArray, overLocalCount: Int): Int {

    val tempBudgets = budgets.map {
        when (it <= allocateBudget) {
            true -> it
            false -> allocateBudget
        }
    }.toIntArray()

    val newBudget = floor((m - tempBudgets.sum()).toDouble() / overLocalCount).toInt()

    if (newBudget <= 0) {
        return allocateBudget
    }

    return budget(
        allocateBudget + newBudget,
        m,
        budgets,
        budgets.filter { it > allocateBudget + newBudget }.count()
    )
}
