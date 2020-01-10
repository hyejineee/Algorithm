package printer.hys.saj.hhj

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

internal class PrinterTest {
    @Test
    fun `프린터 테스트하기`() {
        assertThat(printer(intArrayOf(2, 1, 3, 2), 2)).isEqualTo(1)
        assertThat(printer(intArrayOf(1, 1, 9, 1, 1, 1), 0)).isEqualTo(5)
    }
