package com.hyejineee.passingTruck


import org.junit.Test
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.CoreMatchers.equalTo
import com.hyejineee.passingTruck.*
import org.junit.Assert.assertThat

class PassingTruckTest {
    @Test
    fun 지나가는_트럭(){
        //Given

        //When
        val result:Int = passingTruck()
        //Then
        assertThat(result,`is`(equalTo(0)))
    }
}