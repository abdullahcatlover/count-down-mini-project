import {useState} from 'react';
import "./Products.scss";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import gown from '../../assets/shoes.jpg'





const Product = ({ onHideCountDown }) => {


     const handleShowBtn =()=> {   
        onHideCountDown()    
    

     }

     


    return (
        <>
            <header className='--bg-dark'>
                <nav className="container">
                    <h2 className='--text-md --text-light --py2'>Zulu <span>Shop</span>
                        <AiOutlineShoppingCart cursor='pointer' color='orangered' size={30} />
                    </h2>
                   
                    <div onClick={handleShowBtn}>
                        <a className='check__disc '  color='white'>check discount</a>
                    </div>


                      
                </nav>
            </header>
            <section>
                <div className="container product --flex-start --flex-dir-column">
                    <div className="product-image --text-center --card --mr">
                        <img src={gown} alt="shoes" />
                    </div>
                    <div className="product-descr">
                        <h3 className='-text-md --color-danger'>take your time</h3>
                        <p className='--fw-bold'>$20 USD</p>
                        <p className='--text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima nam maxime tenetur. Unde, provident ex sit totam minus ipsum, ipsa error pariatur soluta veniam, explicabo sunt quibusdam tenetur sapiente beatae dicta consectetur iusto maxime minima quos dignissimos illo? Ab!</p>
                        <form action="">
                            <div className="--form-control --flex-start my2">
                                <label>Color</label>
                                <select>
                                    <option>Choose an option</option>
                                    <option>White</option>
                                </select>
                            </div>

                            <div className="--form-control --flex-start my2">
                                <label>Size</label>
                                <select>
                                    <option>Choose an option</option>
                                    <option>24</option>
                                </select>
                            </div>

                            <div className="--form-control --flex-start my2">
                                <label>Quantity</label>
                                <select>
                                    <option>Choose an option</option>
                                    <option>1</option>
                                </select>
                            </div>
                            <button className='--btn --btn-primary --btn-block'>Add to Cart</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Product