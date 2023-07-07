import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { setPageTitle } from '../../store/themeConfigSlice';
import BlankLayout from '@/components/Layouts/BlankLayout';

const Error500 = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Error 500'));
    });
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-t from-[#c39be3] to-[#f2eafa]">
            <div className="p-5 text-center font-semibold">
                <h2 className="mb-8 text-[50px] font-bold leading-none md:text-[80px]">Error 500</h2>
                <h4 className="mb-5 text-xl font-semibold text-primary sm:text-5xl">Ooops!</h4>
                <p className="text-base">Internal Server Error!</p>
                <Link href="/" className="btn btn-primary mx-auto mt-10 w-max">
                    Home
                </Link>
            </div>
        </div>
    );
};
Error500.getLayout = (page: any) => {
    return <BlankLayout>{page}</BlankLayout>;
};
export default Error500;
