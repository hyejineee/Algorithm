package algorithm_kt

import org.assertj.core.api.Assertions
import org.junit.Test

class MaxNumberTest {
    @Test
    fun `가장 큰 수`() {
        Assertions.assertThat(
            maxNumber(intArrayOf(3, 30, 34, 5, 9))
        ).isEqualTo("9534330")

        Assertions.assertThat(
            maxNumber(intArrayOf(3, 30, 34, 5, 91, 9))
        ).isEqualTo("991534330")

        Assertions.assertThat(
            maxNumber(intArrayOf(3, 30, 34, 5, 91, 9, 900))
        ).isEqualTo("991900534330")

        Assertions.assertThat(
            maxNumber(intArrayOf(3, 30, 34, 5, 91, 9, 99))
        ).isEqualTo("99991534330")

        Assertions.assertThat(
            maxNumber(intArrayOf(0, 0, 0))
        ).isEqualTo("0")
    }
}