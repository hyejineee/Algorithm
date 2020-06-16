package sort

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

class sortTest {
    @Test
    fun `버블 정렬 테스트`() {
        assertThat(bubble(intArrayOf(6, 5, 3, 1))).isEqualTo(intArrayOf(1, 3, 5, 6))
    }

    @Test
    fun `선택 정렬 테스트 `() {
        assertThat(selectionSort(intArrayOf(6, 5, 3, 1))).isEqualTo(intArrayOf(1, 3, 5, 6))
    }

    @Test
    fun `삽입 정렬 테스`() {
        assertThat(insertionSort(intArrayOf(6, 5, 3, 1))).isEqualTo(intArrayOf(1, 3, 5, 6))
    }

    @Test
    fun `병합 정렬 테스트`() {
//        assertThat(mergeSort(listOf(6, 2))).isEqualTo(listOf(2, 6))
//        assertThat(mergeSort(listOf(6, 2, 4, 1))).isEqualTo(listOf(1, 2, 4, 6))
        assertThat(mergeSort(listOf(6, 2, 3, 4, 1, 5))).isEqualTo(listOf(1, 2, 3, 4, 5, 6))
    }

    @Test
    fun `리스트 분리 테스트`() {
        assertThat(divideList(listOf(6, 5, 3, 1))).isEqualTo(
                Pair(listOf(6, 5), listOf(3, 1)))
        assertThat(divideList(listOf(6, 5, 3, 1, 4))).isEqualTo(
                Pair(listOf(6, 5), listOf(3, 1, 4)))
    }
}