import React from 'react'
import Details from '../components/Cart/Details'
import Slider from '../components/Common/Slider'

const ProductPage = ({ count, setCount, setSavedCount }) => {
    return (
        <main className="lg:mt-20 lg:flex lg:items-center lg:justify-center lg:gap-24 lg:px-12">
            <Slider />

            <Details
                count={count}
                setCount={setCount}
                setSavedCount={setSavedCount}
            />
        </main>
    )
}

export default ProductPage