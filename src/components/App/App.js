// import React from 'react';
// import ReactDOM from 'react';

// import Header from '../Header/Header.js'

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


ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);

