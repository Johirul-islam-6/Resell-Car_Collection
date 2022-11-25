import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/UseContext';

const UserBooking = () => {

    const { user } = useContext(AuthContext);

    const { data: MyBookingCar = [] } = useQuery({
        queryKey: ['allBooking'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings/${user?.email}`);
            const data = await res.json();
            return data;
        },
    })
    console.log(MyBookingCar);


    return (
        <>
            <h1 className='text-4xl text-gray-700 text-bold font-mono py-5 text-center'>User Bookings <span className='text-amber-600'>Resell Cars</span> Collection </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:px-12 px-5 justify-center items-center">
                {
                    MyBookingCar?.map((item, i) =>
                        <div key={i} className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-lg">
                            <div className="flex justify-between pb-4 border-bottom">
                                <div className="flex items-center">
                                    <a rel="noopener noreferrer" href="" className="mb-0 capitalize dark:text-gray-100">
                                        {/* -----------user verified blue dote------------- */}
                                        {
                                            user?.emailVerified ? <>
                                                <div className="flex items-center space-x-3">
                                                    <div id='avatar' className="avatar online placeholder mr-2 ">
                                                        <div className="w-7 rounded-full ring ring-primary
                                                                  ring-offset-base-100 ring-offset-2">

                                                            <img className='w-5 bg-slate-300' src={item?.productSeller} />

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{item?.names}</div>
                                                        <div className="text-sm opacity-50">{item?.sellerLocation}</div>
                                                    </div>
                                                </div>
                                            </>
                                                :
                                                <>
                                                    <div className="flex items-center space-x-3">
                                                        <div id='avatar' className="avatar placeholder mr-2 ">
                                                            <div className="w-7 rounded-full ring ring-primary
                                                                  ring-offset-base-100 ring-offset-2">

                                                                <img className='w-6 bg-slate-300' src={item?.productSeller} />

                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{item?.names}</div>
                                                            <div className="text-sm opacity-50">{item?.sellerLocation}</div>
                                                        </div>
                                                    </div>
                                                </>

                                        }


                                        <span className='text-amber-600'> </span></a>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <img src={item?.productImg} alt="" className="block object-cover object-center w-full rounded-md h-[180px] dark:bg-gray-500" />
                                    <div className="flex items-center text-xs justify-between pt-2">
                                        <div className="block">
                                            <span className='block'>Resive Date : {item?.resiveDate}</span>
                                            <span className='mt-1'>{item?.sellerLocation} <span className='text-red-500'>To </span>{item?.Resivelocation}</span>
                                            <span className='block mb-1'>{item?.email}</span>
                                            <span className='block'>phone : {item?.phoneNumber}</span>
                                        </div>
                                        <div className="block">
                                            Brand : <span className='text-amber-700'>{item?.serviceName?.slice(0, 5)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <a rel="noopener noreferrer" href="" className="block">
                                        <h3 className="text-xl font-semibold dark:text-[#bd108f]">Model : {item?.serviceName?.slice(0, 80)}</h3>
                                    </a>
                                    <h1 className=''> Total Price : <span className='text-amber-200'>{item?.carPrice}. </span></h1>
                                    <p className="leading-snug dark:text-gray-400">{item?.productText?.slice(0, 120)} More..</p>
                                    <div className="flex justify-between mt-3" >
                                        <label className="btn md:px-12 bg-red-600 hover:bg-red-400 my-2">DElete Now</label>
                                        <label className="btn md:px-12 bg-[#b92090] hover:bg-[#CF23A1] my-2">confirm Now</label>

                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                }
            </div>
        </>
    );
};

export default UserBooking;