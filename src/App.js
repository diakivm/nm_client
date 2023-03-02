import React, {useState} from "react";
import TransactionsPage from "./pages/TransactionsPage/TransactionsPage";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

function App() {
    return (
        <div className='app'>
            <Header/>
            <div className='content'>
                <TransactionsPage/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
