import Link from 'next/link';
import { useEffect, useState } from 'react';
import CodeHighlight from '../../components/Highlight';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';

const Timeline = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Timeline'));
    });
    const [codeArr, setCodeArr] = useState<string[]>([]);

    const toggleCode = (name: string) => {
        if (codeArr.includes(name)) {
            setCodeArr((value) => value.filter((d) => d !== name));
        } else {
            setCodeArr([...codeArr, name]);
        }
    };

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Timeline</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
                {/* profile */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Profile</h5>
                        <button onClick={() => toggleCode('code1')} className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                            <span className="flex items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ltr:mr-2 rtl:ml-2">
                                    <path
                                        d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path
                                        d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                Code
                            </span>
                        </button>
                    </div>
                    <div className="mb-5">
                        <p className="mb-5 text-base font-bold text-white-dark">Today</p>
                        <div className="sm:flex">
                            <div className="relative z-[2] mx-auto mb-5 before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-z-[1] before:hidden before:h-auto before:w-0 before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] dark:before:border-[#191e3a] sm:mb-0 sm:before:block ltr:sm:mr-8 rtl:sm:ml-8">
                                <img src="/assets/images/profile-16.jpeg" alt="img" className="mx-auto h-12 w-12 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-center text-xl font-bold text-primary ltr:sm:text-left rtl:sm:text-right">Laurie Fox</h4>
                                <p className="text-center ltr:sm:text-left rtl:sm:text-right">5 sec</p>
                                <div className="mt-4 mb-16 sm:mt-7">
                                    <svg
                                        className="inline-block align-text-bottom text-white-dark ltr:mr-2.5 rtl:ml-2.5"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            opacity="0.5"
                                            d="M2 12H22M16 12C16 13.3132 15.8965 14.6136 15.6955 15.8268C15.4945 17.0401 15.1999 18.1425 14.8284 19.0711C14.457 19.9997 14.016 20.7362 13.5307 21.2388C13.0454 21.7413 12.5253 22 12 22C11.4747 22 10.9546 21.7413 10.4693 21.2388C9.98396 20.7362 9.54301 19.9997 9.17157 19.0711C8.80014 18.1425 8.5055 17.0401 8.30448 15.8268C8.10346 14.6136 8 13.3132 8 12C8 10.6868 8.10346 9.38642 8.30448 8.17316C8.5055 6.95991 8.80014 5.85752 9.17157 4.92893C9.54301 4.00035 9.98396 3.26375 10.4693 2.7612C10.9546 2.25866 11.4747 2 12 2C12.5253 2 13.0454 2.25866 13.5307 2.76121C14.016 3.26375 14.457 4.00035 14.8284 4.92893C15.1999 5.85752 15.4945 6.95991 15.6955 8.17317C15.8965 9.38642 16 10.6868 16 12Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.76121 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L22 12Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                    <h6 className="mb-2 inline-block text-lg font-bold">Trending Style</h6>
                                    <p className="font-semibold text-white-dark ltr:pl-8 rtl:pr-8">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <div className="mt-6 flex space-x-1 ltr:pl-8 rtl:space-x-reverse rtl:pr-8">
                                        <img
                                            src="/assets/images/profile-16.jpeg"
                                            alt="img"
                                            className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                        <img
                                            src="/assets/images/drag-1.jpeg"
                                            alt="img"
                                            className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                        <img
                                            src="/assets/images/drag-2.jpeg"
                                            alt="img"
                                            className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                        <img
                                            src="/assets/images/profile-16.jpeg"
                                            alt="img"
                                            className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                        <img
                                            src="/assets/images/drag-4.jpg"
                                            alt="img"
                                            className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex">
                            <div className="relative z-[2] mx-auto mb-5 before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-z-[1] before:hidden before:h-auto before:w-0 before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] dark:before:border-[#191e3a] sm:mb-0 sm:before:block ltr:sm:mr-8 rtl:sm:ml-8">
                                <img src="/assets/images/profile-7.jpeg" alt="img" className="mx-auto h-12 w-12 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-center text-xl font-bold text-primary ltr:sm:text-left rtl:sm:text-right">Justin Cross</h4>
                                <p className="text-center ltr:sm:text-left rtl:sm:text-right">45 min</p>
                                <div className="mt-4 mb-16 sm:mt-7">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="inline-block h-5 w-5 align-text-bottom text-white-dark ltr:mr-2.5 rtl:ml-2.5"
                                    >
                                        <path
                                            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <circle opacity="0.5" cx="16" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
                                        <path
                                            opacity="0.5"
                                            d="M2 12.5001L3.75159 10.9675C4.66286 10.1702 6.03628 10.2159 6.89249 11.0721L11.1822 15.3618C11.8694 16.0491 12.9512 16.1428 13.7464 15.5839L14.0446 15.3744C15.1888 14.5702 16.7369 14.6634 17.7765 15.599L21 18.5001"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <h6 className="mb-2 inline-block text-lg font-bold">Nature Photography</h6>
                                    <p className="font-semibold text-white-dark ltr:pl-8 rtl:pr-8">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <div className="mt-6 grid grid-cols-3 gap-3 ltr:pl-8 rtl:pr-8 sm:grid-cols-5 lg:grid-cols-8">
                                        <img
                                            src="/assets/images/drag-1.jpeg"
                                            alt="img"
                                            className="relative top-0 w-full rounded-md shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                        <img
                                            src="/assets/images/profile-16.jpeg"
                                            alt="img"
                                            className="relative top-0 w-full rounded-md shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                        <img
                                            src="/assets/images/drag-4.jpg"
                                            alt="img"
                                            className="relative top-0 w-full rounded-md shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex">
                            <div className="relative z-[2] mx-auto mb-5 before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-z-[1] before:hidden before:h-auto before:w-0 before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] dark:before:border-[#191e3a] sm:mb-0 sm:before:block ltr:sm:mr-8 rtl:sm:ml-8">
                                <img src="/assets/images/profile-16.jpeg" alt="img" className="mx-auto h-12 w-12 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-center text-xl font-bold text-primary ltr:sm:text-left rtl:sm:text-right">Laurie Fox</h4>
                                <p className="text-center ltr:sm:text-left rtl:sm:text-right">5 sec</p>
                                <div className="mt-4 mb-16 sm:mt-7">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="inline-block h-4.5 w-4.5 align-text-bottom text-white-dark ltr:mr-2.5 rtl:ml-2.5"
                                    >
                                        <path
                                            d="M15.3929 4.05365L14.8912 4.61112L15.3929 4.05365ZM19.3517 7.61654L18.85 8.17402L19.3517 7.61654ZM21.654 10.1541L20.9689 10.4592V10.4592L21.654 10.1541ZM3.17157 20.8284L3.7019 20.2981H3.7019L3.17157 20.8284ZM20.8284 20.8284L20.2981 20.2981L20.2981 20.2981L20.8284 20.8284ZM14 21.25H10V22.75H14V21.25ZM2.75 14V10H1.25V14H2.75ZM21.25 13.5629V14H22.75V13.5629H21.25ZM14.8912 4.61112L18.85 8.17402L19.8534 7.05907L15.8947 3.49618L14.8912 4.61112ZM22.75 13.5629C22.75 11.8745 22.7651 10.8055 22.3391 9.84897L20.9689 10.4592C21.2349 11.0565 21.25 11.742 21.25 13.5629H22.75ZM18.85 8.17402C20.2034 9.3921 20.7029 9.86199 20.9689 10.4592L22.3391 9.84897C21.9131 8.89241 21.1084 8.18853 19.8534 7.05907L18.85 8.17402ZM10.0298 2.75C11.6116 2.75 12.2085 2.76158 12.7405 2.96573L13.2779 1.5653C12.4261 1.23842 11.498 1.25 10.0298 1.25V2.75ZM15.8947 3.49618C14.8087 2.51878 14.1297 1.89214 13.2779 1.5653L12.7405 2.96573C13.2727 3.16993 13.7215 3.55836 14.8912 4.61112L15.8947 3.49618ZM10 21.25C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981L2.64124 21.3588C3.38961 22.1071 4.33855 22.4392 5.51098 22.5969C6.66182 22.7516 8.13558 22.75 10 22.75V21.25ZM1.25 14C1.25 15.8644 1.24841 17.3382 1.40313 18.489C1.56076 19.6614 1.89288 20.6104 2.64124 21.3588L3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14H1.25ZM14 22.75C15.8644 22.75 17.3382 22.7516 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588L20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25V22.75ZM21.25 14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981L21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.7516 17.3382 22.75 15.8644 22.75 14H21.25ZM2.75 10C2.75 8.09318 2.75159 6.73851 2.88976 5.71085C3.02502 4.70476 3.27869 4.12511 3.7019 3.7019L2.64124 2.64124C1.89288 3.38961 1.56076 4.33855 1.40313 5.51098C1.24841 6.66182 1.25 8.13558 1.25 10H2.75ZM10.0298 1.25C8.15538 1.25 6.67442 1.24842 5.51887 1.40307C4.34232 1.56054 3.39019 1.8923 2.64124 2.64124L3.7019 3.7019C4.12453 3.27928 4.70596 3.02525 5.71785 2.88982C6.75075 2.75158 8.11311 2.75 10.0298 2.75V1.25Z"
                                            fill="currentColor"
                                        />
                                        <path opacity="0.5" d="M6 14.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path opacity="0.5" d="M6 18H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path opacity="0.5" d="M13 2.5V5C13 7.35702 13 8.53553 13.7322 9.26777C14.4645 10 15.643 10 18 10H22" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                    <h6 className="mb-2 inline-block text-lg font-bold">Create new Project</h6>
                                    <p className="font-semibold text-white-dark ltr:pl-8 rtl:pr-8">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <div className="mt-6 flex space-x-1 ltr:pl-8 rtl:space-x-reverse rtl:pr-8">
                                        <img
                                            src="/assets/images/profile-16.jpeg"
                                            alt="img"
                                            className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                        <img
                                            src="/assets/images/drag-1.jpeg"
                                            alt="img"
                                            className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                        <img
                                            src="/assets/images/drag-2.jpeg"
                                            alt="img"
                                            className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                        <img
                                            src="/assets/images/profile-16.jpeg"
                                            alt="img"
                                            className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                        <img
                                            src="/assets/images/drag-4.jpg"
                                            alt="img"
                                            className="relative top-0 h-10 w-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code1') && (
                        <div className="mt-5 w-full">
                            <CodeHighlight>
                                <pre className="language-xml">
                                    {`<div className="mb-5">
    <p className="text-white-dark font-bold mb-5 text-base">Today</p>
    <div className="sm:flex">
        <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 z-[2] before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
            <img src="/assets/images/profile-16.jpeg" alt="img" className="w-12 h-12 mx-auto rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]" />
        </div>
        <div className="flex-1">
            <h4 className="text-primary text-xl font-bold text-center ltr:sm:text-left rtl:sm:text-right">Laurie Fox</h4>
            <p className="text-center ltr:sm:text-left rtl:sm:text-right">5 sec</p>
            <div className="mt-4 sm:mt-7 mb-16">
                <svg>...</svg>
                <h6 className="inline-block font-bold mb-2 text-lg">Trending Style</h6>
                <p className="ltr:pl-8 rtl:pr-8 text-white-dark font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="ltr:pl-8 rtl:pr-8 flex space-x-1 rtl:space-x-reverse mt-6">
                    <img
                        src="/assets/images/profile-16.jpeg"
                        alt="img"
                        className="w-10 h-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    <img
                        src="/assets/images/drag-1.jpeg"
                        alt="img"
                        className="w-10 h-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    <img
                        src="/assets/images/drag-2.jpeg"
                        alt="img"
                        className="w-10 h-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    <img
                        src="/assets/images/profile-16.jpeg"
                        alt="img"
                        className="w-10 h-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    <img
                        src="/assets/images/drag-4.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                </div>
            </div>
        </div>
    </div>
    <div className="sm:flex">
        <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 z-[2] before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
            <img src="/assets/images/profile-7.jpeg" alt="img" className="w-12 h-12 mx-auto rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]" />
        </div>
        <div className="flex-1">
            <h4 className="text-primary text-xl font-bold text-center ltr:sm:text-left rtl:sm:text-right">Justin Cross</h4>
            <p className="text-center ltr:sm:text-left rtl:sm:text-right">45 min</p>
            <div className="mt-4 sm:mt-7 mb-16">
                <svg>...</svg>
                <h6 className="inline-block font-bold mb-2 text-lg">Nature Photography</h6>
                <p className="ltr:pl-8 rtl:pr-8 text-white-dark font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="ltr:pl-8 rtl:pr-8 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-3 mt-6">
                    <img
                        src="/assets/images/drag-1.jpeg"
                        alt="img"
                        className="w-full rounded-md shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    <img
                        src="/assets/images/profile-16.jpeg"
                        alt="img"
                        className="w-full rounded-md shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    <img
                        src="/assets/images/drag-4.jpg"
                        alt="img"
                        className="w-full rounded-md shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                </div>
            </div>
        </div>
    </div>
    <div className="sm:flex">
        <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 z-[2] before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
            <img src="/assets/images/profile-16.jpeg" alt="img" className="w-12 h-12 mx-auto rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]" />
        </div>
        <div className="flex-1">
            <h4 className="text-primary text-xl font-bold text-center ltr:sm:text-left rtl:sm:text-right">Laurie Fox</h4>
            <p className="text-center ltr:sm:text-left rtl:sm:text-right">5 sec</p>
            <div className="mt-4 sm:mt-7 mb-16">
                <svg>...</svg>
                <h6 className="inline-block font-bold mb-2 text-lg">Create new Project</h6>
                <p className="ltr:pl-8 rtl:pr-8 text-white-dark font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="ltr:pl-8 rtl:pr-8 flex space-x-1 rtl:space-x-reverse mt-6">
                    <img
                        src="/assets/images/profile-16.jpeg"
                        alt="img"
                        className="w-10 h-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    <img
                        src="/assets/images/drag-1.jpeg"
                        alt="img"
                        className="w-10 h-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    <img
                        src="/assets/images/drag-2.jpeg"
                        alt="img"
                        className="w-10 h-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    <img
                        src="/assets/images/profile-16.jpeg"
                        alt="img"
                        className="w-10 h-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                    <img
                        src="/assets/images/drag-4.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)] relative top-0 transition-all duration-300 hover:-top-0.5 hover:shadow-none"
                    />
                </div>
            </div>
        </div>
    </div>
</div>`}
                                </pre>
                            </CodeHighlight>
                        </div>
                    )}
                </div>

                {/* modern */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Modern</h5>
                        <button onClick={() => toggleCode('code2')} className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                            <span className="flex items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ltr:mr-2 rtl:ml-2">
                                    <path
                                        d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path
                                        d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>{' '}
                                Code
                            </span>
                        </button>
                    </div>
                    <div className="mb-5 inline-block w-full">
                        <ul className="relative mx-auto table max-w-[900px] py-12 before:absolute before:bottom-0 before:left-1/2 before:top-0 before:-ml-[1.5px] before:w-[3px] before:bg-[#ebedf2] dark:before:bg-[#191e3a]">
                            <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
                                <div className="absolute left-1/2 top-[32px] z-[1] -ml-2.5 hidden h-5 w-5 rounded-full border-[3px] border-[#ebedf2] bg-info dark:border-[#191e3a] sm:block"></div>
                                <div className="relative mx-auto w-full max-w-[320px] rounded-md border border-[#ebedf2] bg-white shadow-[0_20px_20px_rgba(126,142,177,0.12)] before:absolute before:top-10 before:hidden before:h-[3px] before:w-[37px] before:rounded-full before:bg-[#ebedf2] ltr:before:-right-[37px] rtl:before:-left-[37px] dark:border-[#191e3a] dark:bg-[#191e3a] dark:before:bg-[#191e3a] sm:w-[46%] sm:max-w-full sm:before:block ltr:sm:float-left rtl:sm:float-right">
                                    <div>
                                        <img src="/assets/images/carousel1.jpeg" alt="timeline" className="w-full rounded-t-md" />
                                    </div>
                                    <div className="p-5">
                                        <h4 className="mb-3 text-lg font-semibold text-info">Front-End Framework</h4>
                                        <p className="mb-3 text-white-dark">
                                            Map where your photos were taken and discover local points of interest. Map where your photos. Map where your photos were taken and discover.
                                        </p>
                                        <p>
                                            <button type="button" className="btn btn-info">
                                                Read more
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
                                <div className="absolute left-1/2 top-[32px] z-[1] -ml-2.5 hidden h-5 w-5 rounded-full border-[3px] border-[#ebedf2] bg-primary dark:border-[#191e3a] sm:block"></div>
                                <div className="relative mx-auto w-full max-w-[320px] rounded-md border border-[#ebedf2] bg-white shadow-[0_20px_20px_rgba(126,142,177,0.12)] before:absolute before:top-10 before:hidden before:h-[3px] before:w-[37px] before:rounded-full before:bg-[#ebedf2] ltr:before:-left-[37px] rtl:before:-right-[37px] dark:border-[#191e3a] dark:bg-[#191e3a] dark:before:bg-[#191e3a]  sm:w-[46%] sm:max-w-full sm:before:block ltr:sm:float-right rtl:sm:float-left">
                                    <div>
                                        <img src="/assets/images/menu-heade.jpg" alt="timeline" className="w-full rounded-t-md" />
                                    </div>
                                    <div className="p-5">
                                        <h4 className="mb-3 text-lg font-semibold text-primary">Web Development</h4>
                                        <p className="mb-3 text-white-dark">
                                            Map where your photos were taken and discover local points of interest. Map where your photos. Map where your photos were taken and discover.
                                        </p>
                                        <p>
                                            <button type="button" className="btn btn-primary">
                                                Read more
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
                                <div className="absolute left-1/2 top-[32px] z-[1] -ml-2.5 hidden h-5 w-5 rounded-full border-[3px] border-[#ebedf2] bg-success dark:border-[#191e3a] sm:block"></div>
                                <div className="relative mx-auto w-full max-w-[320px] rounded-md border border-[#ebedf2] bg-white shadow-[0_20px_20px_rgba(126,142,177,0.12)] before:absolute before:top-10 before:hidden before:h-[3px] before:w-[37px] before:rounded-full before:bg-[#ebedf2] ltr:before:-right-[37px] rtl:before:-left-[37px] dark:border-[#191e3a] dark:bg-[#191e3a] dark:before:bg-[#191e3a] sm:w-[46%] sm:max-w-full sm:before:block ltr:sm:float-left rtl:sm:float-right">
                                    <div>
                                        <img src="/assets/images/carousel1.jpeg" alt="timeline" className="w-full rounded-t-md" />
                                    </div>
                                    <div className="p-5">
                                        <h4 className="mb-3 text-lg font-semibold text-success">Theme Development</h4>
                                        <p className="mb-3 text-white-dark">
                                            Map where your photos were taken and discover local points of interest. Map where your photos. Map where your photos were taken and discover.
                                        </p>
                                        <p>
                                            <button type="button" className="btn btn-success">
                                                Read more
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
                                <div className="absolute left-1/2 top-[32px] z-[1] -ml-2.5 hidden h-5 w-5 rounded-full border-[3px] border-[#ebedf2] bg-danger dark:border-[#191e3a] sm:block"></div>
                                <div className="relative mx-auto w-full max-w-[320px] rounded-md border border-[#ebedf2] bg-white shadow-[0_20px_20px_rgba(126,142,177,0.12)] before:absolute before:top-10 before:hidden before:h-[3px] before:w-[37px] before:rounded-full before:bg-[#ebedf2] ltr:before:-left-[37px] rtl:before:-right-[37px] dark:border-[#191e3a] dark:bg-[#191e3a] dark:before:bg-[#191e3a]  sm:w-[46%] sm:max-w-full sm:before:block ltr:sm:float-right rtl:sm:float-left">
                                    <div>
                                        <img src="/assets/images/menu-heade.jpg" alt="timeline" className="w-full rounded-t-md" />
                                    </div>
                                    <div className="p-5">
                                        <h4 className="mb-3 text-lg font-semibold text-danger">Plugin Development</h4>
                                        <p className="mb-3 text-white-dark">
                                            Map where your photos were taken and discover local points of interest. Map where your photos. Map where your photos were taken and discover.
                                        </p>
                                        <p>
                                            <button type="button" className="btn btn-danger">
                                                Read more
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {codeArr.includes('code2') && (
                        <div className="mt-5 w-full">
                            <CodeHighlight>
                                <pre className="language-xml">
                                    {`<div className="mb-5 inline-block w-full">
<ul className="relative py-12 before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:bottom-0 before:left-1/2 before:top-0 before:w-[3px] before:-ml-[1.5px] max-w-[900px] mx-auto table">
    <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
        <div className="hidden sm:block absolute bg-info border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
        <div className="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white dark:bg-[#191e3a] ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
            <div>
                <img src="/assets/images/carousel1.jpeg" alt="timeline" className="w-full rounded-t-md" />
            </div>
            <div className="p-5">
                <h4 className="mb-3 text-info text-lg font-semibold">Front-End Framework</h4>
                <p className="mb-3 text-white-dark">
                    Map where your photos were taken and discover local points of interest. Map where your photos. Map where your photos were taken and discover.
                </p>
                <p>
                    <button type="button" className="btn btn-info">
                        Read more
                    </button>
                </p>
            </div>
        </div>
    </li>
    <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
        <div className="hidden sm:block absolute bg-primary border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
        <div className="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white dark:bg-[#191e3a] ltr:sm:float-right rtl:sm:float-left before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full  ltr:before:-left-[37px] rtl:before:-right-[37px] before:top-10 sm:before:block before:hidden">
            <div>
                <img src="/assets/images/menu-heade.jpg" alt="timeline" className="w-full rounded-t-md" />
            </div>
            <div className="p-5">
                <h4 className="mb-3 text-primary text-lg font-semibold">Web Development</h4>
                <p className="mb-3 text-white-dark">
                    Map where your photos were taken and discover local points of interest. Map where your photos. Map where your photos were taken and discover.
                </p>
                <p>
                    <button type="button" className="btn btn-primary">
                        Read more
                    </button>
                </p>
            </div>
        </div>
    </li>
    <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
        <div className="hidden sm:block absolute bg-success border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
        <div className="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white dark:bg-[#191e3a] ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
            <div>
                <img src="/assets/images/carousel1.jpeg" alt="timeline" className="w-full rounded-t-md" />
            </div>
            <div className="p-5">
                <h4 className="mb-3 text-success text-lg font-semibold">Theme Development</h4>
                <p className="mb-3 text-white-dark">
                    Map where your photos were taken and discover local points of interest. Map where your photos. Map where your photos were taken and discover.
                </p>
                <p>
                    <button type="button" className="btn btn-success">
                        Read more
                    </button>
                </p>
            </div>
        </div>
    </li>
    <li className="relative mb-12 before:clear-both before:table after:clear-both after:table">
        <div className="hidden sm:block absolute bg-danger border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
        <div className="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white dark:bg-[#191e3a] ltr:sm:float-right rtl:sm:float-left before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full  ltr:before:-left-[37px] rtl:before:-right-[37px] before:top-10 sm:before:block before:hidden">
            <div>
                <img src="/assets/images/menu-heade.jpg" alt="timeline" className="w-full rounded-t-md" />
            </div>
            <div className="p-5">
                <h4 className="mb-3 text-danger text-lg font-semibold">Plugin Development</h4>
                <p className="mb-3 text-white-dark">
                    Map where your photos were taken and discover local points of interest. Map where your photos. Map where your photos were taken and discover.
                </p>
                <p>
                    <button type="button" className="btn btn-danger">
                        Read more
                    </button>
                </p>
            </div>
        </div>
    </li>
</ul>
</div>`}
                                </pre>
                            </CodeHighlight>
                        </div>
                    )}
                </div>

                {/* basic */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Basic</h5>
                        <button onClick={() => toggleCode('code3')} className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                            <span className="flex items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ltr:mr-2 rtl:ml-2">
                                    <path
                                        d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path
                                        d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>{' '}
                                Code
                            </span>
                        </button>
                    </div>
                    <div className="mb-5">
                        <div className="mx-auto max-w-[900px]">
                            <div className="flex">
                                <p className="min-w-[58px] max-w-[100px] py-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">10:00</p>
                                <div className="relative before:absolute before:left-1/2 before:top-[15px] before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:rounded-full before:border-2 before:border-primary after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-primary"></div>
                                <div className="self-center p-2.5 ltr:ml-2.5 rtl:ml-2.5 rtl:ltr:mr-2.5">
                                    <p className="text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">Updated Server Logs</p>
                                    <p className="min-w-[100px] max-w-[100px] self-center text-xs font-bold text-white-dark">25 mins ago</p>
                                </div>
                            </div>
                            <div className="flex">
                                <p className="min-w-[58px] max-w-[100px] py-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">12:45</p>
                                <div className="relative before:absolute before:left-1/2 before:top-[15px] before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:rounded-full before:border-2 before:border-secondary after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-secondary"></div>
                                <div className="self-center p-2.5 ltr:ml-2.5 rtl:ml-2.5 rtl:ltr:mr-2.5">
                                    <p className="text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">Backup Files EOD</p>
                                    <p className="min-w-[100px] max-w-[100px] self-center text-xs font-bold text-white-dark">2 hrs ago</p>
                                </div>
                            </div>
                            <div className="flex">
                                <p className="min-w-[58px] max-w-[100px] py-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">14:00</p>
                                <div className="relative before:absolute before:left-1/2 before:top-[15px] before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:rounded-full before:border-2 before:border-success after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-success"></div>
                                <div className="self-center p-2.5 ltr:ml-2.5 rtl:ml-2.5 rtl:ltr:mr-2.5">
                                    <p className="text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">Send Mail to HR and Admin</p>
                                    <p className="min-w-[100px] max-w-[100px] self-center text-xs font-bold text-white-dark">4 hrs ago</p>
                                </div>
                            </div>
                            <div className="flex">
                                <p className="min-w-[58px] max-w-[100px] py-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">16:00</p>
                                <div className="relative before:absolute before:left-1/2 before:top-[15px] before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:rounded-full before:border-2 before:border-danger after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-danger"></div>
                                <div className="self-center p-2.5 ltr:ml-2.5 rtl:ml-2.5 rtl:ltr:mr-2.5">
                                    <p className="text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">Conference call with Marketing Manager.</p>
                                    <p className="min-w-[100px] max-w-[100px] self-center text-xs font-bold text-white-dark">6 hrs ago</p>
                                </div>
                            </div>
                            <div className="flex">
                                <p className="min-w-[58px] max-w-[100px] py-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">17:00</p>
                                <div className="relative before:absolute before:left-1/2 before:top-[15px] before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:rounded-full before:border-2 before:border-warning after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-warning"></div>
                                <div className="self-center p-2.5 ltr:ml-2.5 rtl:ml-2.5 rtl:ltr:mr-2.5">
                                    <p className="text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">
                                        Collected documents from <button type="button">Sara</button>
                                    </p>
                                    <p className="min-w-[100px] max-w-[100px] self-center text-xs font-bold text-white-dark">9 hrs ago</p>
                                </div>
                            </div>
                            <div className="flex">
                                <p className="min-w-[58px] max-w-[100px] py-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">16:00</p>
                                <div className="relative before:absolute before:left-1/2 before:top-[15px] before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:rounded-full before:border-2 before:border-info"></div>
                                <div className="self-center p-2.5 ltr:ml-2.5 rtl:ml-2.5 rtl:ltr:mr-2.5">
                                    <p className="text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">Server rebooted successfully</p>
                                    <p className="min-w-[100px] max-w-[100px] self-center text-xs font-bold text-white-dark">8 hrs ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code3') && (
                        <div className="mt-5 w-full">
                            <CodeHighlight>
                                <pre className="language-xml">
                                    {`<div className="mb-5">
    <div className="max-w-[900px] mx-auto">
        <div className="flex">
            <p className="text-[#3b3f5c] dark:text-white-light min-w-[58px] max-w-[100px] text-base font-semibold py-2.5">10:00</p>
            <div className="relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-[15px] before:w-2.5 before:h-2.5 before:border-2 before:border-primary before:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-primary after:rounded-full"></div>
            <div className="p-2.5 self-center ltr:ml-2.5 rtl:ltr:mr-2.5 rtl:ml-2.5">
                <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px]">Updated Server Logs</p>
                <p className="text-white-dark text-xs font-bold self-center min-w-[100px] max-w-[100px]">25 mins ago</p>
            </div>
        </div>
        <div className="flex">
            <p className="text-[#3b3f5c] dark:text-white-light min-w-[58px] max-w-[100px] text-base font-semibold py-2.5">12:45</p>
            <div className="relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-[15px] before:w-2.5 before:h-2.5 before:border-2 before:border-secondary before:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-secondary after:rounded-full"></div>
            <div className="p-2.5 self-center ltr:ml-2.5 rtl:ltr:mr-2.5 rtl:ml-2.5">
                <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px]">Backup Files EOD</p>
                <p className="text-white-dark text-xs font-bold self-center min-w-[100px] max-w-[100px]">2 hrs ago</p>
            </div>
        </div>
        <div className="flex">
            <p className="text-[#3b3f5c] dark:text-white-light min-w-[58px] max-w-[100px] text-base font-semibold py-2.5">14:00</p>
            <div className="relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-[15px] before:w-2.5 before:h-2.5 before:border-2 before:border-success before:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-success after:rounded-full"></div>
            <div className="p-2.5 self-center ltr:ml-2.5 rtl:ltr:mr-2.5 rtl:ml-2.5">
                <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px]">Send Mail to HR and Admin</p>
                <p className="text-white-dark text-xs font-bold self-center min-w-[100px] max-w-[100px]">4 hrs ago</p>
            </div>
        </div>
        <div className="flex">
            <p className="text-[#3b3f5c] dark:text-white-light min-w-[58px] max-w-[100px] text-base font-semibold py-2.5">16:00</p>
            <div className="relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-[15px] before:w-2.5 before:h-2.5 before:border-2 before:border-danger before:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-danger after:rounded-full"></div>
            <div className="p-2.5 self-center ltr:ml-2.5 rtl:ltr:mr-2.5 rtl:ml-2.5">
                <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px]">Conference call with Marketing Manager.</p>
                <p className="text-white-dark text-xs font-bold self-center min-w-[100px] max-w-[100px]">6 hrs ago</p>
            </div>
        </div>
        <div className="flex">
            <p className="text-[#3b3f5c] dark:text-white-light min-w-[58px] max-w-[100px] text-base font-semibold py-2.5">17:00</p>
            <div className="relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-[15px] before:w-2.5 before:h-2.5 before:border-2 before:border-warning before:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-warning after:rounded-full"></div>
            <div className="p-2.5 self-center ltr:ml-2.5 rtl:ltr:mr-2.5 rtl:ml-2.5">
                <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px]">
                    Collected documents from <button type="button">Sara</button>
                </p>
                <p className="text-white-dark text-xs font-bold self-center min-w-[100px] max-w-[100px]">9 hrs ago</p>
            </div>
        </div>
        <div className="flex">
            <p className="text-[#3b3f5c] dark:text-white-light min-w-[58px] max-w-[100px] text-base font-semibold py-2.5">16:00</p>
            <div className="relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-[15px] before:w-2.5 before:h-2.5 before:border-2 before:border-info before:rounded-full"></div>
            <div className="p-2.5 self-center ltr:ml-2.5 rtl:ltr:mr-2.5 rtl:ml-2.5">
                <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px]">Server rebooted successfully</p>
                <p className="text-white-dark text-xs font-bold self-center min-w-[100px] max-w-[100px]">8 hrs ago</p>
            </div>
        </div>
    </div>
</div>`}
                                </pre>
                            </CodeHighlight>
                        </div>
                    )}
                </div>

                {/* with images */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">With Images</h5>
                        <button onClick={() => toggleCode('code4')} className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600">
                            <span className="flex items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ltr:mr-2 rtl:ml-2">
                                    <path
                                        d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path
                                        d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>{' '}
                                Code
                            </span>
                        </button>
                    </div>
                    <div className="mb-5">
                        <div className="mx-auto max-w-[900px] space-y-3 text-center sm:space-y-0 ltr:sm:text-left rtl:sm:text-right">
                            <div className="items-center sm:flex">
                                <p className="p-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">09:00</p>
                                <div className="relative p-2.5 after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-white-dark/20">
                                    <img src="/assets/images/profile-16.jpeg" alt="img" className="relative z-[1] mx-auto h-11 w-11 rounded-full" />
                                </div>
                                <p className="mt-5 self-center p-2.5 text-xs font-bold text-white-dark sm:mt-0 sm:min-w-[100px] sm:max-w-[100px]">25 mins ago</p>
                                <p className="p-2.5 text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">Conference call with Marketing Manager.</p>
                            </div>
                            <div className="items-center sm:flex">
                                <p className="p-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">10:00</p>
                                <div className="relative p-2.5 after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-white-dark/20">
                                    <img src="/assets/images/profile-1.jpeg" alt="img" className="relative z-[1] mx-auto h-11 w-11 rounded-full" />
                                </div>
                                <p className="mt-5 self-center p-2.5 text-xs font-bold text-white-dark sm:mt-0 sm:min-w-[100px] sm:max-w-[100px]">2 hrs ago</p>
                                <p className="p-2.5 text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">Server rebooted successfully</p>
                            </div>
                            <div className="items-center sm:flex">
                                <p className="p-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">11:00</p>
                                <div className="relative p-2.5 after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-white-dark/20">
                                    <img src="/assets/images/profile-2.jpeg" alt="img" className="relative z-[1] mx-auto h-11 w-11 rounded-full" />
                                </div>
                                <p className="mt-5 self-center p-2.5 text-xs font-bold text-white-dark sm:mt-0 sm:min-w-[100px] sm:max-w-[100px]">4 hrs ago</p>
                                <p className="p-2.5 text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">Backup Files EOD</p>
                            </div>
                            <div className="items-center sm:flex">
                                <p className="p-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">12:00</p>
                                <div className="relative p-2.5 after:absolute after:left-1/2 after:top-[25px] after:-bottom-[15px] after:h-auto after:w-0 after:-translate-x-1/2 after:rounded-full after:border-l-2 after:border-white-dark/20">
                                    <img src="/assets/images/profile-3.jpeg" alt="img" className="relative z-[1] mx-auto h-11 w-11 rounded-full" />
                                </div>
                                <p className="mt-5 self-center p-2.5 text-xs font-bold text-white-dark sm:mt-0 sm:min-w-[100px] sm:max-w-[100px]">6 hrs ago</p>
                                <p className="p-2.5 text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">Collected documents from Sara</p>
                            </div>
                            <div className="items-center sm:flex">
                                <p className="p-2.5 text-base font-semibold text-[#3b3f5c] dark:text-white-light">01:00</p>
                                <div className="relative p-2.5">
                                    <img src="/assets/images/profile-4.jpeg" alt="img" className="relative z-[1] mx-auto h-11 w-11 rounded-full" />
                                </div>
                                <p className="mt-5 self-center p-2.5 text-xs font-bold text-white-dark sm:mt-0 sm:min-w-[100px] sm:max-w-[100px]">9 hrs ago</p>
                                <p className="p-2.5 text-[13px] font-semibold text-[#3b3f5c] dark:text-white-light">PDF file Download</p>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code4') && (
                        <div className="mt-5 w-full">
                            <CodeHighlight>
                                <pre className="language-xml">
                                    {`<div className="mb-5">
    <div className="max-w-[900px] mx-auto text-center ltr:sm:text-left rtl:sm:text-right space-y-3 sm:space-y-0">
        <div className="sm:flex items-center">
            <p className="text-[#3b3f5c] dark:text-white-light text-base font-semibold p-2.5">09:00</p>
            <div className="p-2.5 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-white-dark/20 after:rounded-full">
                <img src="/assets/images/profile-16.jpeg" alt="img" className="w-11 h-11 rounded-full relative z-[1] mx-auto" />
            </div>
            <p className="text-white-dark text-xs font-bold self-center sm:min-w-[100px] sm:max-w-[100px] p-2.5 mt-5 sm:mt-0">25 mins ago</p>
            <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px] p-2.5">Conference call with Marketing Manager.</p>
        </div>
        <div className="sm:flex items-center">
            <p className="text-[#3b3f5c] dark:text-white-light text-base font-semibold p-2.5">10:00</p>
            <div className="p-2.5 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-white-dark/20 after:rounded-full">
                <img src="/assets/images/profile-1.jpeg" alt="img" className="w-11 h-11 rounded-full relative z-[1] mx-auto" />
            </div>
            <p className="text-white-dark text-xs font-bold self-center sm:min-w-[100px] sm:max-w-[100px] p-2.5 mt-5 sm:mt-0">2 hrs ago</p>
            <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px] p-2.5">Server rebooted successfully</p>
        </div>
        <div className="sm:flex items-center">
            <p className="text-[#3b3f5c] dark:text-white-light text-base font-semibold p-2.5">11:00</p>
            <div className="p-2.5 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-white-dark/20 after:rounded-full">
                <img src="/assets/images/profile-2.jpeg" alt="img" className="w-11 h-11 rounded-full relative z-[1] mx-auto" />
            </div>
            <p className="text-white-dark text-xs font-bold self-center sm:min-w-[100px] sm:max-w-[100px] p-2.5 mt-5 sm:mt-0">4 hrs ago</p>
            <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px] p-2.5">Backup Files EOD</p>
        </div>
        <div className="sm:flex items-center">
            <p className="text-[#3b3f5c] dark:text-white-light text-base font-semibold p-2.5">12:00</p>
            <div className="p-2.5 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-white-dark/20 after:rounded-full">
                <img src="/assets/images/profile-3.jpeg" alt="img" className="w-11 h-11 rounded-full relative z-[1] mx-auto" />
            </div>
            <p className="text-white-dark text-xs font-bold self-center sm:min-w-[100px] sm:max-w-[100px] p-2.5 mt-5 sm:mt-0">6 hrs ago</p>
            <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px] p-2.5">Collected documents from Sara</p>
        </div>
        <div className="sm:flex items-center">
            <p className="text-[#3b3f5c] dark:text-white-light text-base font-semibold p-2.5">01:00</p>
            <div className="p-2.5 relative">
                <img src="/assets/images/profile-4.jpeg" alt="img" className="w-11 h-11 rounded-full relative z-[1] mx-auto" />
            </div>
            <p className="text-white-dark text-xs font-bold self-center sm:min-w-[100px] sm:max-w-[100px] p-2.5 mt-5 sm:mt-0">9 hrs ago</p>
            <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px] p-2.5">PDF file Download</p>
        </div>
    </div>
</div>`}
                                </pre>
                            </CodeHighlight>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
