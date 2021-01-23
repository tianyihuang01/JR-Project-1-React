// import React from 'react';
// import ReactDOM from 'react';

import Header from '../Header/Header.js'
import HomePage from '../Page/components/HomePage/HomePage'
import ResumePage from '../Page/components/ResumePage/ResumePage'
import ServicesPage from '../Page/components/ServicesPage/ServicesPage'
import BlogPage from '../Page/components/BlogPage/BlogPage'
import ContactPage from '../Page/components/ContactPage/ContactPage'
import Footer from '../Footer/footer'

const App = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <HomePage/>
                <ResumePage/>
                <ServicesPage/>
                <BlogPage/>
                <ContactPage/>
            </main> 
                <Footer/>
        </div>  
    )
}

export default App;
