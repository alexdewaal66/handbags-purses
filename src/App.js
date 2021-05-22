import React from 'react';
import './App.css';
import Button from './Button';
import Product from "./Product";
import Tile from "./Tile";
import {bag1, bag2, bag3, bag4, brand, our_story} from "./assets/images";


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
                <Product marker="Best seller" price="€400,-" image={bag1}>
                    The handy bag
                </Product>
                <Product marker="Best seller" price="€400,-" image={bag2}>
                    The stylish bag
                </Product>
                <Product marker="Best seller" price="€400,-" image={bag3}>
                    The simple bag
                </Product>
                <Product marker="Best seller" price="€400,-" image={bag4}>
                    The trendy bag
                </Product>
            </main>
            <footer>
                <span>
                    <Tile>
                        <h2>The Brand</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem deserunt dolorem et ipsum
                            laborum libero necessitatibus porro praesentium saepe!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore dolores ea ex impedit
                            minus possimus quasi quibusdam quos reiciendis.</p>
                   </Tile>
                    <Tile>
                        <img src={brand} alt="product box top view showing logo"/>
                    </Tile>
                </span>
                <span>
                    <Tile>
                        <h2>Our Story</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloribus earum molestiae quis
                            recusandae rem velit. Aliquam consequatur hic qui!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, obcaecati.</p>
                        <p>Quidquid latine dictum sit, altum videtur</p>
                    </Tile>
                    <Tile>
                        <img src={our_story} alt="female models hugging & smiling"/>
                    </Tile>
                </span>
            </footer>
        </>
    );
}

export default App;



