package numberOf124

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test


internal class convertTo124Test {
    @Test
    fun `자연수 124나라의 수로 바꾸기`() {
        // Given

        // When

        // Then
        assertThat(convertTo124(1)).isEqualTo("1")
        assertThat(convertTo124(2)).isEqualTo("2")
        assertThat(convertTo124(3)).isEqualTo("4")
        assertThat(convertTo124(4)).isEqualTo("11")
        assertThat(convertTo124(5)).isEqualTo("12")
        assertThat(convertTo124(6)).isEqualTo("14")
        assertThat(convertTo124(7)).isEqualTo("21")
        assertThat(convertTo124(8)).isEqualTo("22")
        assertThat(convertTo124(9)).isEqualTo("24")


    }

}

