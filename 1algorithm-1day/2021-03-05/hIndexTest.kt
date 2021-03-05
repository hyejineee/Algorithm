internal class HIndexTest {
    @Test
    fun `h인덱스 구하기`() {
        Assertions.assertThat(
            hIndex(intArrayOf(3, 0, 6, 1, 5))
        ).isEqualTo(3)

        Assertions.assertThat(
            hIndex(intArrayOf(6, 4, 4, 1, 0))
        ).isEqualTo(3)
    }
}