import React from 'react'
import { Wavy } from './Components/Ace_Ui/Wavy'
import LinesBg from './Components/Ace_Ui/LinesBg'
import Features from './Components/Ace_Ui/Features'
import CodeSec from './Components/Ace_Ui/CodeSec'
import Process from './Components/Ace_Ui/Process'
import Reviews from './Components/Reviews'
// import Voice from './Components/Pages/Voice'
import PriceCard from './Components/PriceCard'
import ContactForm from './Components/ContactForm'
import Button from './Components/Ace_Ui/Button'

const Home = () => {
    return (
        <div>


            <Wavy />
            <LinesBg />
            <Features />
            <CodeSec />
            <Process />
            <Reviews />
            <PriceCard />
            <ContactForm />
        </div>
    )
}

export default Home