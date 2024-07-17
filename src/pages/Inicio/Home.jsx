import React from 'react';
import "./home.css";

function Home() {
    return (
        <React.Fragment>
            <div className='home__wrapper'>
                <div className="home__hero">
                    <h1>Plantas Emanuel</h1>
                    <p>Donde encontrarás esa planta que transforme tu hogar</p>
                </div>

            </div>

            <div className="about__wrapper">
                <div class="custom-shape-divider-top-1721165681">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div className="about__container">
                    <h1>¿Quienes somos?</h1>
                    <p>En Plantas Emanuel, compartimos nuestro amor por la naturaleza con cada visitante. Aquí encontrarás un rincón de paz y belleza, donde las plantas cobran vida y llenan de alegría cada espacio. Ven y descubre la magia que nuestras plantas pueden traer a tu hogar.</p>

                </div>
                <div class="custom-shape-divider-bottom-1721167927">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>

            <div className="products__wrapper">
                <div className="products__container">
                    <h1>¿Qué plantas ofrecemos?</h1>
                    <p>Ofrecemos una gran variedad de plantas de interior y exterior, suculentas, cactus, árboles frutales, y mucho más. Cada planta viene con una guía de cuidado para asegurarnos de que puedas disfrutar de tu compra al máximo.</p>
                    <div className='products__grid'>
                        <div className='product__card'>
                            <img src="https://images.pexels.com/photos/305827/pexels-photo-305827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cactus con maceta blanca" />
                            <h2>Suculentas</h2>
                        </div>
                        <div className='product__card'>
                            <img src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Cactus con maceta blanca" />
                            <h2>Cactus</h2>
                        </div>
                        <div className='product__card'>
                            <img src="https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cactus con maceta blanca" />
                            <h2>Plantas de interiores</h2>
                        </div>
                        <div className='product__card'>
                            <img src="https://images.pexels.com/photos/227396/pexels-photo-227396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cactus con maceta blanca" />
                            <h2>Exteriores</h2>
                        </div>
                        <div className='product__card'>
                            <img src="https://images.pexels.com/photos/1424672/pexels-photo-1424672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cactus con maceta blanca" />
                            <h2>Arreglos</h2>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
}

export default Home;
