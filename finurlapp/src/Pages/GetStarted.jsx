import React from 'react'
import Navbar from '../Components/Common/Navbar'
import GetStartedForm from '../Components/Get_Started_Components/GetStartedForm'

const GetStarted = () => {
  return (
    <>
        <Navbar/>
        <section style={{"paddingTop":"8%", height:"100vh"}}>
        <GetStartedForm/>
        </section>
    </>
  )
}

export default GetStarted