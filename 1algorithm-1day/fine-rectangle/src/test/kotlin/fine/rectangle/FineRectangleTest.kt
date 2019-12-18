package fine.rectangle

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test


internal class FineRectangleTest {
    @Test
    fun `멀쩡한 사각형 테스`() {
        val t: Int = 100000000
        println((t.toDouble() / 2356.toDouble()).toLong())
        //Given

        //When

//        //Then
        assertThat(fineRectangle(8, 12)).isEqualTo(80)
        assertThat(fineRectangle(8, 8)).isEqualTo(64 - 8)
        assertThat(fineRectangle(100000000, 100000000)).isEqualTo(
                100000000.toLong() * 100000000.toLong() - 100000000.toLong()
        )
        assertThat(fineRectangle(100000000, 50000000)).isEqualTo(
                100000000.toLong() * 50000000.toLong() - 50000000.toLong() * 2
        )
        assertThat(fineRectangle(100000000, 25000000)).isEqualTo(
                100000000.toLong() * 25000000.toLong() - 25000000.toLong() * 4
        )
        assertThat(fineRectangle(100000000, 1)).isEqualTo(0)
        assertThat(fineRectangle(2147483647, 2147483647)).isEqualTo(
                2147483647.toLong() * 2147483647.toLong() - 2147483647.toLong()
        )

    }

    @Test
    fun `최대 공약수 구하기 테스트`() {
        //Given

        //When

        //Then
        assertThat(gcd(8, 12)).isEqualTo(4)
    }

    @Test
    fun `공통된 수 중에서 가장 큰 값을 구하는 함수 테스트`() {
        assertThat(maxCommon(arrayOf(1, 2, 4), arrayOf(1, 2, 3, 4, 6))).isEqualTo(4)
        assertThat(maxCommon(arrayOf(1, 2, 4, 8), arrayOf(1, 2, 3, 4, 6, 12))).isEqualTo(4)
        assertThat(maxCommon(arrayOf(1, 2), arrayOf(1, 3))).isEqualTo(1)
    }

    @Test
    fun `약수 구하기 테스트`() {
        // Given

        // When

        // Then
        assertThat(calculateFactors(8)).isEqualTo(arrayOf(1, 2, 4, 8))
    }

    @Test
    fun `사용 못하는 상자 개수 구하기 테스트`() {
        // Given

        // When

        // Then
        assertThat(wrongRectanglesCount(8, 12)).isEqualTo(16)
        assertThat(wrongRectanglesCount(4, 4)).isEqualTo(4)
    }
}