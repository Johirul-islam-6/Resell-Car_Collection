import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UseContext';


const AllBookinPresent = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/all-booking`;

    //    --------- TenStand Query------------
    const { data: booking = [], } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(booking)

    return (
        <div className='md:mx-16 md:mt-24 mt-36'>
            <h1 className='text-3xl text-bold text-black mb-10 text-center'>All Dental Booking Presents <span className='text-fuchsia-700'>{booking?.length}</span></h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>

                            <th>Name</th>
                            <th>email</th>
                            <th>Services</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {booking.map((bok, i) =>

                            <tr key={bok?._id}>
                                <th><div className="flex">{i + 1} <img className='rounded-full md:w-10 ml-5' src={bok?.photo} alt="" /></div></th>

                                <td>
                                    <div className="block ">
                                        <h1>{bok?.patient}</h1>
                                        <h1 className='text-red-900'>{bok?.email}</h1>
                                    </div>
                                </td>
                                <td className='text-sky-600'>{bok?.treatment}</td>
                                <td className='text-teal-500'>{bok?.slot}</td>
                                <td className='text-teal-500'>{bok?.appointmentDate}</td>
                            </tr>

                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBookinPresent;