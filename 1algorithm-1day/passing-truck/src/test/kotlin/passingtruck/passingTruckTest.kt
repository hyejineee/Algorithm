package passingtruck

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test


internal class passingTruckTest{
    @Test
    fun `다리를 지나는 트럭`(){
        //Given

        //When

        //Then
        assertThat(passingTruck(2,10, intArrayOf(7,4,5,6))).isEqualTo(8)
        assertThat(passingTruck(100,100, intArrayOf(10,10,10,10,10,10,10,10,10,10))).isEqualTo(110)

    }
}