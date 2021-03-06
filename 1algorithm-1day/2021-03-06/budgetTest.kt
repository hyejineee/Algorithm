package algorithm_kt

import org.assertj.core.api.Assertions
import org.junit.Test

internal class BudgetTest {
    @Test
    fun `예산 구하기`() {
        Assertions.assertThat(
            budget(intArrayOf(120, 110, 140, 150), 485)
        ).isEqualTo(127)

        Assertions.assertThat(
            budget(intArrayOf(130, 200, 1000, 800, 2000), 2817)
        ).isEqualTo(843)

        Assertions.assertThat(
            budget(intArrayOf(130, 200, 1000, 800, 2000, 3500), 2817)
        ).isEqualTo(621)
    }
}