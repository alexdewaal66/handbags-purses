import React from 'react';
import './App.css';
import Button from './Button';
import Product from "./Product";
import {first, second, third, fourth, brand} from "./assets";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button>
                    to the collection
                </Button>
                <Button>
                    shop all bags
                </Button>
                <Button status="disabled">
                    pre-orders
                </Button>
            </nav>
            <main>
                <Product marker="Best seller" price="€400,-" image={first}>
                    The handy bag
                </Product>
                <Product marker="Best seller" price="€400,-" image={second}>
                    The stylish bag
                </Product>
                <Product marker="Best seller" price="€400,-" image={third}>
                    The simple bag
                </Product>
                <Product marker="Best seller" price="€400,-" image={fourth}>
                    The trendy bag
                </Product>
            </main>
        </>
    );
}

export default App;



