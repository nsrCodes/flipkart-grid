// components
import Button from '../Common/Button';

// assets
import { MdDelete } from "react-icons/md"
import cartImage from '../../images/image-product-1-thumbnail.jpg';

export default function Cart({ savedCount, setSavedCount }) {
    return (
        <div className="absolute top-[70px] left-1/2 z-10 w-[95%] max-w-md -translate-x-1/2 rounded-lg bg-white shadow-2xl shadow-tertiary/70 md:right-0 md:top-20 md:-translate-x-16 lg:top-28 lg:right-0 lg:w-96 lg:translate-x-56">
            <span className="border-secondary-dark-dark block border-b border-solid p-6 font-bold">
                Cart
            </span>

            <div className={`w-full ${!savedCount ? 'py-20' : 'p-6'}`}>
                {!savedCount ? (
                    <span className="inline-block w-full text-center font-bold text-tertiary-light">
                        Your cart is empty
                    </span>
                ) : (
                    <div>
                        <div className="mb-6 flex items-center gap-4">
                            <img src={cartImage} alt="shoes" className="w-12 rounded-md" />

                            <div className="mr-auto flex flex-col font-bold text-tertiary-dark">
                                <span>Fall Limited Edition...</span>
                                <span className="font-normal">
                                    $125.00 x {savedCount}{' '}
                                    <span className="font-bold text-tertiary">
                                        ${(125 * savedCount).toFixed(2)}
                                    </span>
                                </span>
                            </div>

                            <button type="button" onClick={() => setSavedCount(0)}>
                                <MdDelete alt="delete" />
                            </button>
                        </div>

                        <Button>
                            <span>Checkout</span>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}