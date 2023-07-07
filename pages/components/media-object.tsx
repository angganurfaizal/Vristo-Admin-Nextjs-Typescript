import Link from 'next/link';
import { useEffect, useState } from 'react';
import CodeHighlight from '../../components/Highlight';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import Dropdown from '../../components/Dropdown';
import { setPageTitle } from '../../store/themeConfigSlice';

const MediaObject = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Media Object'));
    });
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

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
                    <span>Media Object</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
                {/* Simple */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Simple</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code1')}>
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
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-16 w-16 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code1') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-16 h-16 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>

                {/* Order */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Order</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code2')}>
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
                        <div className="flex">
                            <div className="flex-1 ltr:mr-4 rtl:ml-4">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                            <div>
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-16 w-16 rounded" />
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code2') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex">
        <div className="flex-1 ltr:mr-4 rtl:ml-4">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
        <div>
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-16 h-16 rounded" />
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>

                {/* Alignment */}

                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Top-aligned media</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code3')}>
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
                        <div className="flex items-start">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-16 w-16 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                                    nulla elementum, rutrum neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code3') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex items-start">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-16 h-16 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                nulla elementum, rutrum neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>

                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Center-aligned media</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code4')}>
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
                        <div className="flex items-center">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-16 w-16 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                                    nulla elementum, rutrum neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code4') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex items-center">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-16 h-16 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                nulla elementum, rutrum neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Bottom-aligned media</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code5')}>
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
                        <div className="flex items-end">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-16 w-16 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                                    nulla elementum, rutrum neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code5') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex items-end">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-16 h-16 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                nulla elementum, rutrum neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Right Aligned</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code6')}>
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
                        <div className="flex">
                            <div className="flex-1 ltr:mr-4 ltr:text-right rtl:ml-4 rtl:text-left">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                                    nulla elementum, rutrum neque eu, gravida neque.
                                </p>
                            </div>
                            <div>
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-16 w-16 rounded" />
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code6') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex">
        <div className="flex-1 ltr:mr-4 rtl:ml-4 ltr:text-right rtl:text-left">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                nulla elementum, rutrum neque eu, gravida neque.
            </p>
        </div>
        <div>
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-16 h-16 rounded" />
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>

                {/* List */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Media list</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code7')}>
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
                        <div className="mb-5 flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                        <div className="mb-5 flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code7') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex mb-5">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
    <div className="flex mb-5">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>

                {/* Nesting */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Nesting</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code8')}>
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
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text mb-5">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                                <div className="flex">
                                    <div className="ltr:mr-4 rtl:ml-4">
                                        <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                        <p className="media-text">
                                            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum,
                                            rutrum neque eu, gravida neque.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code8') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text mb-5">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
            <div className="flex">
                <div className="ltr:mr-4 rtl:ml-4">
                    <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
                    <p className="media-text">
                        Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum,
                        rutrum neque eu, gravida neque.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>

                {/* Notation Text */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Notation Text</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code9')}>
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
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text mb-4">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                                <ul className="flex space-x-4 font-bold rtl:space-x-reverse">
                                    <li>
                                        <button type="button" className="hover:text-primary">
                                            Reply
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="hover:text-primary">
                                            Edit
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="hover:text-primary">
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code9') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text mb-4">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
            <ul className="flex space-x-4 rtl:space-x-reverse font-bold">
                <li>
                    <button type="button" className="hover:text-primary">
                        Reply
                    </button>
                </li>
                <li>
                    <button type="button" className="hover:text-primary">
                        Edit
                    </button>
                </li>
                <li>
                    <button type="button" className="hover:text-primary">
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>

                {/* Notation Icon */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Notation Icon</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code10')}>
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
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text mb-4">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                                <ul className="flex space-x-4 font-bold rtl:space-x-reverse">
                                    <li>
                                        <button type="button" className="flex items-center hover:text-primary">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ltr:mr-1 rtl:ml-1">
                                                <path
                                                    d="M13.0867 21.3877L13.7321 21.7697L13.0867 21.3877ZM13.6288 20.4718L12.9833 20.0898L13.6288 20.4718ZM10.3712 20.4718L9.72579 20.8539H9.72579L10.3712 20.4718ZM10.9133 21.3877L11.5587 21.0057L10.9133 21.3877ZM2.3806 15.9134L3.07351 15.6264V15.6264L2.3806 15.9134ZM7.78958 18.9915L7.77666 19.7413L7.78958 18.9915ZM5.08658 18.6194L4.79957 19.3123H4.79957L5.08658 18.6194ZM21.6194 15.9134L22.3123 16.2004V16.2004L21.6194 15.9134ZM16.2104 18.9915L16.1975 18.2416L16.2104 18.9915ZM18.9134 18.6194L19.2004 19.3123H19.2004L18.9134 18.6194ZM19.6125 2.7368L19.2206 3.37628L19.6125 2.7368ZM21.2632 4.38751L21.9027 3.99563V3.99563L21.2632 4.38751ZM4.38751 2.7368L3.99563 2.09732V2.09732L4.38751 2.7368ZM2.7368 4.38751L2.09732 3.99563H2.09732L2.7368 4.38751ZM9.40279 19.2098L9.77986 18.5615L9.77986 18.5615L9.40279 19.2098ZM13.7321 21.7697L14.2742 20.8539L12.9833 20.0898L12.4412 21.0057L13.7321 21.7697ZM9.72579 20.8539L10.2679 21.7697L11.5587 21.0057L11.0166 20.0898L9.72579 20.8539ZM12.4412 21.0057C12.2485 21.3313 11.7515 21.3313 11.5587 21.0057L10.2679 21.7697C11.0415 23.0767 12.9585 23.0767 13.7321 21.7697L12.4412 21.0057ZM10.5 2.75H13.5V1.25H10.5V2.75ZM21.25 10.5V11.5H22.75V10.5H21.25ZM2.75 11.5V10.5H1.25V11.5H2.75ZM1.25 11.5C1.25 12.6546 1.24959 13.5581 1.29931 14.2868C1.3495 15.0223 1.45323 15.6344 1.68769 16.2004L3.07351 15.6264C2.92737 15.2736 2.84081 14.8438 2.79584 14.1847C2.75041 13.5189 2.75 12.6751 2.75 11.5H1.25ZM7.8025 18.2416C6.54706 18.2199 5.88923 18.1401 5.37359 17.9265L4.79957 19.3123C5.60454 19.6457 6.52138 19.7197 7.77666 19.7413L7.8025 18.2416ZM1.68769 16.2004C2.27128 17.6093 3.39066 18.7287 4.79957 19.3123L5.3736 17.9265C4.33223 17.4951 3.50486 16.6678 3.07351 15.6264L1.68769 16.2004ZM21.25 11.5C21.25 12.6751 21.2496 13.5189 21.2042 14.1847C21.1592 14.8438 21.0726 15.2736 20.9265 15.6264L22.3123 16.2004C22.5468 15.6344 22.6505 15.0223 22.7007 14.2868C22.7504 13.5581 22.75 12.6546 22.75 11.5H21.25ZM16.2233 19.7413C17.4786 19.7197 18.3955 19.6457 19.2004 19.3123L18.6264 17.9265C18.1108 18.1401 17.4529 18.2199 16.1975 18.2416L16.2233 19.7413ZM20.9265 15.6264C20.4951 16.6678 19.6678 17.4951 18.6264 17.9265L19.2004 19.3123C20.6093 18.7287 21.7287 17.6093 22.3123 16.2004L20.9265 15.6264ZM13.5 2.75C15.1512 2.75 16.337 2.75079 17.2619 2.83873C18.1757 2.92561 18.7571 3.09223 19.2206 3.37628L20.0044 2.09732C19.2655 1.64457 18.4274 1.44279 17.4039 1.34547C16.3915 1.24921 15.1222 1.25 13.5 1.25V2.75ZM22.75 10.5C22.75 8.87781 22.7508 7.6085 22.6545 6.59611C22.5572 5.57256 22.3554 4.73445 21.9027 3.99563L20.6237 4.77938C20.9078 5.24291 21.0744 5.82434 21.1613 6.73809C21.2492 7.663 21.25 8.84876 21.25 10.5H22.75ZM19.2206 3.37628C19.7925 3.72672 20.2733 4.20752 20.6237 4.77938L21.9027 3.99563C21.4286 3.22194 20.7781 2.57144 20.0044 2.09732L19.2206 3.37628ZM10.5 1.25C8.87781 1.25 7.6085 1.24921 6.59611 1.34547C5.57256 1.44279 4.73445 1.64457 3.99563 2.09732L4.77938 3.37628C5.24291 3.09223 5.82434 2.92561 6.73809 2.83873C7.663 2.75079 8.84876 2.75 10.5 2.75V1.25ZM2.75 10.5C2.75 8.84876 2.75079 7.663 2.83873 6.73809C2.92561 5.82434 3.09223 5.24291 3.37628 4.77938L2.09732 3.99563C1.64457 4.73445 1.44279 5.57256 1.34547 6.59611C1.24921 7.6085 1.25 8.87781 1.25 10.5H2.75ZM3.99563 2.09732C3.22194 2.57144 2.57144 3.22194 2.09732 3.99563L3.37628 4.77938C3.72672 4.20752 4.20752 3.72672 4.77938 3.37628L3.99563 2.09732ZM11.0166 20.0898C10.8136 19.7468 10.6354 19.4441 10.4621 19.2063C10.2795 18.9559 10.0702 18.7304 9.77986 18.5615L9.02572 19.8582C9.07313 19.8857 9.13772 19.936 9.24985 20.0898C9.37122 20.2564 9.50835 20.4865 9.72579 20.8539L11.0166 20.0898ZM7.77666 19.7413C8.21575 19.7489 8.49387 19.7545 8.70588 19.7779C8.90399 19.7999 8.98078 19.832 9.02572 19.8582L9.77986 18.5615C9.4871 18.3912 9.18246 18.3215 8.87097 18.287C8.57339 18.2541 8.21375 18.2487 7.8025 18.2416L7.77666 19.7413ZM14.2742 20.8539C14.4916 20.4865 14.6287 20.2564 14.7501 20.0898C14.8622 19.936 14.9268 19.8857 14.9742 19.8582L14.2201 18.5615C13.9298 18.7304 13.7204 18.9559 13.5379 19.2063C13.3646 19.4441 13.1864 19.7468 12.9833 20.0898L14.2742 20.8539ZM16.1975 18.2416C15.7862 18.2487 15.4266 18.2541 15.129 18.287C14.8175 18.3215 14.5129 18.3912 14.2201 18.5615L14.9742 19.8582C15.0192 19.832 15.096 19.7999 15.2941 19.7779C15.5061 19.7545 15.7842 19.7489 16.2233 19.7413L16.1975 18.2416Z"
                                                    fill="currentColor"
                                                />
                                                <g opacity="0.5">
                                                    <path d="M9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z" fill="currentColor" />
                                                    <path
                                                        d="M13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11Z"
                                                        fill="currentColor"
                                                    />
                                                    <path
                                                        d="M17 11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11Z"
                                                        fill="currentColor"
                                                    />
                                                </g>
                                            </svg>
                                            Reply
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="flex items-center hover:text-primary">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1">
                                                <path
                                                    d="M15.2869 3.15178L14.3601 4.07866L5.83882 12.5999L5.83881 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L4.19792 21.6782L7.47918 20.5844L7.47919 20.5844C8.25353 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5344 19.0269 10.8229 18.7383 11.4001 18.1612L11.4001 18.1612L19.9213 9.63993L20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    opacity="0.5"
                                                    d="M14.36 4.07812C14.36 4.07812 14.4759 6.04774 16.2138 7.78564C17.9517 9.52354 19.9213 9.6394 19.9213 9.6394M4.19789 21.6777L2.32178 19.8015"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                            </svg>{' '}
                                            Edit
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="flex items-center hover:text-primary">
                                            <svg className="ltr:mr-1 rtl:ml-1" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.5"
                                                    d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path d="M20.5001 6H3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path
                                                    d="M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <path opacity="0.5" d="M9.5 11L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path opacity="0.5" d="M14.5 11L14 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code10') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text mb-4">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
            <ul className="flex space-x-4 rtl:space-x-reverse font-bold">
                <li>
                    <button type="button" className="flex items-center hover:text-primary">
                        <svg>...</svg>
                        Reply
                    </button>
                </li>
                <li>
                    <button type="button" className="flex items-center hover:text-primary">
                        <svg>...</svg>
                        Edit
                    </button>
                </li>
                <li>
                    <button type="button" className="flex items-center hover:text-primary">
                        <svg>...</svg>
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>

                {/* Badge */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Badge</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code11')}>
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
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">
                                    Heading
                                    <span className="badge bg-primary ltr:float-right rtl:float-left">Web Designer</span>
                                </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code11') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">
                Heading
                <span className="badge bg-primary ltr:float-right rtl:float-left">Web Designer</span>
            </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>

                {/* Dropdown */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Dropdown List</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code12')}>
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
                    <div className="dropdown mb-5">
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <div className="mb-2 flex justify-between">
                                    <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                    <div className="dropdown">
                                        <Dropdown
                                            offset={[0, 5]}
                                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                            btnClassName="text-white-dark"
                                            button={
                                                <svg className="h-5 w-5 text-black/70 hover:!text-primary dark:text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                    <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                    <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                </svg>
                                            }
                                        >
                                            <ul className="!min-w-[130px]">
                                                <li>
                                                    <button type="button">
                                                        <svg className="ltr:mr-1 rtl:ml-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10 22C14.4183 22 18 18.4183 18 14C18 9.58172 14.4183 6 10 6C5.58172 6 2 9.58172 2 14C2 15.2355 2.28008 16.4056 2.7802 17.4502C2.95209 17.8093 3.01245 18.2161 2.90955 18.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L5.39939 21.0904C5.78393 20.9876 6.19071 21.0479 6.54976 21.2198C7.5944 21.7199 8.76449 22 10 22Z"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                            />
                                                            <path
                                                                opacity="0.5"
                                                                d="M18 14.5018C18.0665 14.4741 18.1324 14.4453 18.1977 14.4155C18.5598 14.2501 18.9661 14.1882 19.3506 14.2911L19.8267 14.4185C20.793 14.677 21.677 13.793 21.4185 12.8267L21.2911 12.3506C21.1882 11.9661 21.2501 11.5598 21.4155 11.1977C21.7908 10.376 22 9.46242 22 8.5C22 4.91015 19.0899 2 15.5 2C12.7977 2 10.4806 3.64899 9.5 5.9956"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                            />
                                                            <g opacity="0.5">
                                                                <path
                                                                    d="M7.5 14C7.5 14.5523 7.05228 15 6.5 15C5.94772 15 5.5 14.5523 5.5 14C5.5 13.4477 5.94772 13 6.5 13C7.05228 13 7.5 13.4477 7.5 14Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14Z"
                                                                    fill="currentColor"
                                                                />
                                                                <path
                                                                    d="M14.5 14C14.5 14.5523 14.0523 15 13.5 15C12.9477 15 12.5 14.5523 12.5 14C12.5 13.4477 12.9477 13 13.5 13C14.0523 13 14.5 13.4477 14.5 14Z"
                                                                    fill="currentColor"
                                                                />
                                                            </g>
                                                        </svg>
                                                        Start chat
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button">
                                                        <svg className="ltr:mr-1 rtl:ml-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                            />
                                                            <path
                                                                opacity="0.5"
                                                                d="M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                            />
                                                        </svg>
                                                        Make a call
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ltr:mr-1 rtl:ml-1">
                                                            <path d="M22 22H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                            <path
                                                                opacity="0.5"
                                                                d="M21 22V14.5C21 13.6716 20.3284 13 19.5 13H16.5C15.6716 13 15 13.6716 15 14.5V22"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                            />
                                                            <path
                                                                d="M15 22V5C15 3.58579 15 2.87868 14.5607 2.43934C14.1213 2 13.4142 2 12 2C10.5858 2 9.87868 2 9.43934 2.43934C9 2.87868 9 3.58579 9 5V22"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                            />
                                                            <path opacity="0.5" d="M9 22V9.5C9 8.67157 8.32843 8 7.5 8H4.5C3.67157 8 3 8.67157 3 9.5V22" stroke="currentColor" strokeWidth="1.5" />
                                                        </svg>
                                                        Statistics
                                                    </button>
                                                </li>
                                            </ul>
                                        </Dropdown>
                                    </div>
                                </div>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code12') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`import Dropdown from '../../components/Dropdown';

<div className="mb-5 dropdown">
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <div className="flex justify-between mb-2">
                <h4 className="font-semibold text-lg text-primary">Heading </h4>
                <div className="dropdown">
                    <Dropdown
                        offset={[0, 5]}
                        placement={\`${isRtl ? 'bottom-start' : 'bottom-end'}\`}
                        btnClassName="text-white-dark"
                        button={
                            <svg>...</svg>
                        }
                    >
                        <ul className="!min-w-[130px]">
                            <li>
                                <button type="button">
                                    <svg>...</svg>
                                    Start chat
                                </button>
                            </li>
                            <li>
                                <button type="button">
                                    <svg>...</svg>
                                    Make a call
                                </button>
                            </li>
                            <li>
                                <button type="button">
                                    <svg>...</svg>
                                    Statistics
                                </button>
                            </li>
                        </ul>
                    </Dropdown>
                </div>
            </div>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>

                {/* Labels */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Labels</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code13')}>
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
                        <div className="mb-5 flex items-center">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-danger">
                                    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-warning">
                                    <path
                                        opacity="0.5"
                                        d="M5.31171 10.7615C8.23007 5.58716 9.68925 3 12 3C14.3107 3 15.7699 5.58716 18.6883 10.7615L19.0519 11.4063C21.4771 15.7061 22.6897 17.856 21.5937 19.428C20.4978 21 17.7864 21 12.3637 21H11.6363C6.21356 21 3.50217 21 2.40626 19.428C1.31034 17.856 2.52291 15.7061 4.94805 11.4063L5.31171 10.7615Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <circle cx="12" cy="16" r="1" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code13') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex items-center mb-5">
        <div className="ltr:mr-4 rtl:ml-4">
            <svg>...</svg>
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg text-primary">Heading </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
    <div className="flex items-center">
        <div className="ltr:mr-4 rtl:ml-4">
            <svg>...</svg>
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg text-primary">Heading </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>

                {/* Checkbox */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Checkbox</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code14')}>
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
                        <div className="mb-5 flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <input type="checkbox" className="form-checkbox mt-1.5" defaultChecked />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <input type="checkbox" className="form-checkbox mt-1.5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code14') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex mb-5">
        <div className="ltr:mr-4 rtl:ml-4">
            <input type="checkbox" className="form-checkbox mt-1.5" defaultChecked />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg text-primary">Heading </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <input type="checkbox" className="form-checkbox mt-1.5" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg text-primary">Heading </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>

                {/*  Radio */}
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white-light">Radio</h5>
                        <button type="button" className="font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600" onClick={() => toggleCode('code15')}>
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
                        <div className="mb-5 flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <input type="radio" className="form-radio mt-1.5" name="radio" defaultChecked />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <input type="radio" className="form-radio mt-1.5" name="radio" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                    {codeArr.includes('code15') && (
                        <CodeHighlight>
                            <pre className="language-xml">
                                {`<div className="mb-5">
    <div className="flex mb-5">
        <div className="ltr:mr-4 rtl:ml-4">
            <input type="radio" className="form-radio mt-1.5" name="radio" defaultChecked />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg text-primary">Heading </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <input type="radio" className="form-radio mt-1.5" name="radio" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg text-primary">Heading </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                            </pre>
                        </CodeHighlight>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MediaObject;
