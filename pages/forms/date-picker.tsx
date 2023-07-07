import Link from 'next/link';
import { useEffect, useState } from 'react';
import CodeHighlight from '../../components/Highlight';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import Nouislider from '@x1mrdonut1x/nouislider-react';
import 'nouislider/distribute/nouislider.css';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';

const DateRangePicker = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Date & Range Picker'));
    });
    const [codeArr, setCodeArr] = useState<string[]>([]);

    const toggleCode = (name: string) => {
        if (codeArr.includes(name)) {
            setCodeArr((value) => value.filter((d) => d !== name));
        } else {
            setCodeArr([...codeArr, name]);
        }
    };

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [inputStart, setInputStart] = useState<any>(20);
    const [inputEnd, setInputEnd] = useState<any>(40);
    const [slider2, setSlider2] = useState<any>([500, 4000]);
    const [percent2, setPercent2] = useState<any>([5, 40]);

    const [disabled, setDisabled] = useState<any>(false);
    const [skippingValue, setSkippingValue] = useState<any>(40);
    const [skippingValue1, setSkippingValue1] = useState<any>(40);

    const changeValue = () => {
        setDisabled(!disabled);
    };

    const slider1Update = (range: any) => {
        setInputStart(range[0]);
        setInputEnd(range[1]);
    };

    const onSide = (render: any, handle: any, value: any, un: any, percent: any) => {
        setSlider2(value);
        setPercent2(percent);
    };

    const [date1, setDate1] = useState<any>('2022-07-05');
    const [date2, setDate2] = useState<any>('2022-07-05 12:00');
    const [date3, setDate3] = useState<any>('2022-07-05 to 2022-07-10');
    const [date4, setDate4] = useState<any>('13:45');
    const [range1, setRange1] = useState<any>('0');
    const [range2, setRange2] = useState<any>('0');
    const [range3, setRange3] = useState<any>('0');
    const [range4, setRange4] = useState<any>('0');

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Date and Range Picker</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                <div className="space-y-8" id="date_time_picker">
                    <div className="inline-block rounded bg-[#009688]/[.26] py-1 px-2 text-base text-[#009688]">Date and Time Picker</div>
                    <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                        <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                        <a href="https://www.npmjs.com/package/react-flatpickr" target="_blank" className="block hover:underline" rel="noreferrer">
                            https://www.npmjs.com/package/react-flatpickr
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/*  Basic  */}
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Basic</h5>
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
                                <Flatpickr
                                    value={date1}
                                    options={{
                                        dateFormat: 'Y-m-d',
                                        position: isRtl ? 'auto right' : 'auto left',
                                    }}
                                    className="form-input"
                                    onChange={(date) => setDate1(date)}
                                />
                            </div>
                            {codeArr.includes('code1') && (
                                <CodeHighlight>
                                    <pre className="language-typescript">{`import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';

const dispatch = useDispatch();
const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
const [date1, setDate1] = useState<any>('2022-07-05');

<Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input" onChange={(date) => setDate1(date)} />`}</pre>
                                </CodeHighlight>
                            )}
                        </div>

                        {/* Date & time */}
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Date Time</h5>
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
                            <div className="mb-2.5">
                                Use
                                <code className="text-danger">{` {enableTime: true, dateFormat: 'Y-m-d H:i'}`} </code>
                                option to enable time support
                            </div>
                            <div className="mb-5">
                                <Flatpickr
                                    data-enable-time
                                    options={{
                                        enableTime: true,
                                        dateFormat: 'Y-m-d H:i',
                                        position: isRtl ? 'auto right' : 'auto left',
                                    }}
                                    defaultValue={date2}
                                    className="form-input"
                                    onChange={(date2) => setDate2(date2)}
                                />
                            </div>
                            {codeArr.includes('code2') && (
                                <CodeHighlight>
                                    <pre className="language-typescript">{`import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';

const dispatch = useDispatch();
const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
const [date2, setDate2] = useState<any>('2022-07-05 12:00');

<Flatpickr
data-enable-time
options={{
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    position: isRtl ? 'auto right' : 'auto left',
}}
defaultValue={date2}
className="form-input"
onChange={(date2) => setDate2(date2)}
/>`}</pre>
                                </CodeHighlight>
                            )}
                        </div>

                        {/*  range-calendar */}
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Range Calendar</h5>
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
                            <div className="mb-2.5">
                                Use <code className="text-danger">{`{mode: 'range'}`}</code> select the date with range.
                            </div>
                            <div className="mb-5">
                                <Flatpickr
                                    options={{
                                        mode: 'range',
                                        dateFormat: 'Y-m-d',
                                        position: isRtl ? 'auto right' : 'auto left',
                                    }}
                                    defaultValue={date3}
                                    className="form-input"
                                    onChange={(date3) => setDate3(date3)}
                                />
                            </div>
                            {codeArr.includes('code3') && (
                                <CodeHighlight>
                                    <pre className="language-typescript">{`import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';

const dispatch = useDispatch();
const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
const [date3, setDate3] = useState<any>('2022-07-05 to 2022-07-10');

<Flatpickr
 options={{
     mode: 'range',
     dateFormat: 'Y-m-d',
     position: isRtl ? 'auto right' : 'auto left',
 }}
 defaultValue={date3}
 className="form-input"
 onChange={(date3) => setDate3(date3)}
/>`}</pre>
                                </CodeHighlight>
                            )}
                        </div>

                        {/* preloading time */}
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Preloading Time</h5>
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
                            <div className="mb-2.5">
                                Use
                                <code className="text-danger">{` {noCalendar: true, enableTime: true, dateFormat: 'H:i'} `}</code>
                                with Date Time options to disable calendar and show time picker only.
                            </div>
                            <div className="mb-5">
                                <Flatpickr
                                    options={{
                                        noCalendar: true,
                                        enableTime: true,
                                        dateFormat: 'H:i',
                                        position: isRtl ? 'auto right' : 'auto left',
                                    }}
                                    defaultValue={date4}
                                    className="form-input"
                                    onChange={(date4) => setDate4(date4)}
                                />
                            </div>
                            {codeArr.includes('code4') && (
                                <CodeHighlight>
                                    <pre className="language-typescript">{`import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';

const dispatch = useDispatch();
const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
const [date4, setDate4] = useState<any>('13:45');

<Flatpickr
 options={{
     noCalendar: true,
     enableTime: true,
     dateFormat: 'H:i',
     position: isRtl ? 'auto right' : 'auto left',
 }}
 defaultValue={date4}
 className="form-input"
 onChange={(date4) => setDate4(date4)}
/>`}</pre>
                                </CodeHighlight>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-8" id="js_range_slider">
                    {/*  range picker */}
                    <div className="inline-block rounded bg-[#009688]/[.26] py-1 px-2 text-base text-[#009688]">Javascript Range Slider</div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Top-Left */}
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Postion : Top-Left</h5>
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
                            <div className="mb-5 pt-5">
                                <div className="font-bold">
                                    <span className="inline-block rounded border border-white-light py-1 px-2 text-primary dark:border-dark">{range1}</span>
                                    <span>%</span>
                                </div>
                                <input type="range" className="w-full py-2.5" value={range1} min={0} max={100} onChange={(e) => setRange1(e.target.value)} />
                            </div>
                            {codeArr.includes('code5') && (
                                <CodeHighlight>
                                    <pre className="language-typescript">{`import { useState } from 'react';
const [range1, setRange1] = useState<any>('0');

<div>
 <div className="font-bold">
     <span className="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark">{range1}</span>
     <span>%</span>
 </div>
 <input type="range" className="w-full py-2.5" value={range1} min={0} max={100} onChange={(e) => setRange1(e.target.value)} />
</div>`}</pre>
                                </CodeHighlight>
                            )}
                        </div>

                        {/* Top-right */}
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Postion : Top-right</h5>
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
                                <div className="font-bold ltr:text-right rtl:text-left">
                                    <span className="inline-block rounded border border-white-light py-1 px-2 text-primary dark:border-dark">{range2}</span>
                                    <span>%</span>
                                </div>
                                <input type="range" className="w-full py-2.5" min="0" max="100" value={range2} onChange={(e) => setRange2(e.target.value)} />
                            </div>
                            {codeArr.includes('code6') && (
                                <CodeHighlight>
                                    <pre className="language-typescript">{`import { useState } from 'react';
const [range2, setRange2] = useState<any>('0');

<div>
 <div className="font-bold ltr:text-right rtl:text-left">
     <span className="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark">{range2}</span>
     <span>%</span>
 </div>
 <input type="range" className="w-full py-2.5" min="0" max="100" value={range2} onChange={(e) => setRange2(e.target.value)} />
</div>`}</pre>
                                </CodeHighlight>
                            )}
                        </div>

                        {/* bottom-left */}
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Postion : Bottom-Left</h5>
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
                                <input type="range" className="w-full py-2.5" min="0" max="100" value={range3} onChange={(e) => setRange3(e.target.value)} />
                                <div className="font-bold">
                                    <span className="inline-block rounded border border-white-light py-1 px-2 text-primary dark:border-dark">{range3}</span>
                                    <span>%</span>
                                </div>
                            </div>
                            {codeArr.includes('code7') && (
                                <CodeHighlight>
                                    <pre className="language-typescript">{`import { useState } from 'react';
const [range3, setRange3] = useState<any>('0');

<div>
 <input type="range" className="w-full py-2.5" min="0" max="100" value={range3} onChange={(e) => setRange3(e.target.value)} />
 <div className="font-bold">
     <span className="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark">{range3}</span>
     <span>%</span>
 </div>
</div>`}</pre>
                                </CodeHighlight>
                            )}
                        </div>

                        {/* Bottom-right */}
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Postion : Bottom-right</h5>
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
                                <input type="range" className="w-full py-2.5" min="0" max="100" value={range4} onChange={(e) => setRange4(e.target.value)} />
                                <div className="font-bold ltr:text-right rtl:text-left">
                                    <span className="inline-block rounded border border-white-light py-1 px-2 text-primary dark:border-dark">{range4}</span>
                                    <span>%</span>
                                </div>
                            </div>
                            {codeArr.includes('code8') && (
                                <CodeHighlight>
                                    <pre className="language-typescript">{`import { useState } from 'react';
const [range4, setRange4] = useState<any>('0');

<div>
 <input type="range" className="w-full py-2.5" min="0" max="100" value={range4} onChange={(e) => setRange4(e.target.value)} />
 <div className="font-bold ltr:text-right rtl:text-left">
     <span className="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark">{range4}</span>
     <span>%</span>
 </div>
</div>`}</pre>
                                </CodeHighlight>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-8" id="noui_sliders">
                    {/* Nouislider */}
                    <div className="inline-block rounded bg-[#009688]/[.26] py-1 px-2 text-base text-[#009688]">noUI Slider</div>
                    <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                        <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                        <a href="https://www.npmjs.com/package/nouislider-react" target="_blank" className="block hover:underline" rel="noreferrer">
                            https://www.npmjs.com/package/nouislider-react
                        </a>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Using HTML5 input elements */}
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Using HTML5 input elements</h5>
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
                            <div className="mb-5 pt-10">
                                <Nouislider range={{ min: 0, max: 100 }} start={[inputStart, inputEnd]} step={1} connect={true} onSlide={slider1Update} tooltips={true} />
                                <div className="mb-4 mt-9 grid grid-cols-1 gap-8 lg:grid-cols-2">
                                    <div className="mb-3">
                                        <select id="select" className="form-select w-full" value={parseInt(inputStart)} onChange={(e) => setInputStart(e.target.value)}>
                                            {Array.from(Array(101).keys()).map((i) => (
                                                <option value={i} key={i}>
                                                    {i}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <input type="number" className="form-input" min="0" max="100" value={parseInt(inputEnd)} onChange={(e) => setInputEnd(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            {codeArr.includes('code9') && (
                                <CodeHighlight>
                                    <pre className="language-typescript">{`import { useState } from 'react';

const [inputStart, setInputStart] = useState<any>(20);
const [inputEnd, setInputEnd] = useState<any>(40);
const slider1Update = (range: any) => {
 setInputStart(range[0]);
 setInputEnd(range[1]);
};

<div>
 <Nouislider range={{ min: 0, max: 100 }} start={[inputStart, inputEnd]} step={1} connect={true} onSlide={slider1Update} tooltips={true} />
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4 mt-9">
     <div className="mb-3">
         <select id="select" className="form-select w-full" value={parseInt(inputStart)} onChange={(e) => setInputStart(e.target.value)}>
             {Array.from(Array(101).keys()).map((i) => (
                 <option value={i} key={i}>
                     {i}
                 </option>
             ))}
         </select>
     </div>
     <div>
         <input type="number" className="form-input" min="0" max="100" value={parseInt(inputEnd)} onChange={(e) => setInputEnd(e.target.value)} />
     </div>
 </div>
</div>`}</pre>
                                </CodeHighlight>
                            )}
                        </div>

                        {/* Non linear slider */}
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Non linear slider</h5>
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
                            <div className="mb-5 pt-5">
                                <Nouislider
                                    connect
                                    start={[500, 4000]}
                                    behaviour="tap"
                                    range={{
                                        min: [0],
                                        '10%': [500, 500],
                                        '50%': [4000, 1000],
                                        max: [10000],
                                    }}
                                    onSlide={onSide}
                                    tooltips={true}
                                />

                                <div className="my-5 grid grid-cols-1 gap-8 font-bold lg:grid-cols-2">
                                    <div>
                                        <span className="mr-2 text-primary" id="nouiMin2">
                                            {parseInt(slider2[0]).toFixed(2)}
                                        </span>
                                        <span className="rounded border border-white-light py-1 px-2 text-dark dark:border-dark dark:text-white-dark" id="nouiMin2Perc">
                                            {`${parseInt(percent2[0])}%`}
                                        </span>
                                    </div>
                                    <div className="ltr:text-right rtl:text-left">
                                        <span className="mr-2 text-primary" id="nouiMax2">
                                            {parseInt(slider2[1]).toFixed(2)}
                                        </span>
                                        <span className="rounded border border-white-light py-1 px-2 text-dark dark:border-dark dark:text-white-dark" id="nouiMax2Perc">
                                            {`${parseInt(percent2[1])}%`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {codeArr.includes('code10') && (
                                <CodeHighlight>
                                    <pre className="language-typescript">{`import { useState } from 'react';

const [slider2, setSlider2] = useState<any>([500, 4000]);
const [percent2, setPercent2] = useState<any>([5, 40]);
const onSide = (render: any, handle: any, value: any, un: any, percent: any) => {
 setSlider2(value);
 setPercent2(percent);
};

<div>
 <Nouislider
     connect
     start={[500, 4000]}
     behaviour="tap"
     range={{
         min: [0],
         '10%': [500, 500],
         '50%': [4000, 1000],
         max: [10000],
     }}
     onSlide={onSide}
     tooltips={true}
 />

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-5 font-bold">
     <div>
         <span className="text-primary mr-2" id="nouiMin2">
             {parseInt(slider2[0]).toFixed(2)}
         </span>
         <span className="border border-white-light dark:border-dark py-1 px-2 text-dark dark:text-white-dark rounded" id="nouiMin2Perc">
             {\`\${parseInt(percent2[0])}%\`}
         </span>
     </div>
     <div className="ltr:text-right rtl:text-left">
         <span className="text-primary mr-2" id="nouiMax2">
             {parseInt(slider2[1]).toFixed(2)}
         </span>
         <span className="border border-white-light dark:border-dark py-1 px-2 text-dark dark:text-white-dark rounded" id="nouiMax2Perc">
             {\`\${parseInt(percent2[1])}%\`}
         </span>
     </div>
 </div>
</div>`}</pre>
                                </CodeHighlight>
                            )}
                        </div>

                        {/* Locking slider */}
                        <div className="panel lg:col-span-2">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Locking sliders together</h5>
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
                            <div className="mb-5 pt-5">
                                <Nouislider
                                    disabled={disabled}
                                    start={40}
                                    range={{
                                        min: 0.0,
                                        max: 100.0,
                                    }}
                                    tooltips={true}
                                    onSlide={(value) => setSkippingValue(value)}
                                />
                                <div>Value: {skippingValue}</div>
                                <div className="mb-10 font-bold text-primary" id="locking_slider1_value"></div>
                                <Nouislider
                                    disabled={disabled}
                                    start={40}
                                    range={{
                                        min: 0.0,
                                        max: 100.0,
                                    }}
                                    onSlide={(value) => setSkippingValue1(value)}
                                    tooltips={true}
                                />
                                <div>Value: {skippingValue1}</div>
                                <div className="mb-10 font-bold text-primary" id="locking_slider2_value"></div>
                                <div className="ltr:text-right rtl:text-left">
                                    {disabled === false ? (
                                        <button type="button" className="btn btn-primary" onClick={changeValue} id="lockbutton">
                                            Lock
                                        </button>
                                    ) : (
                                        <button type="button" className="btn btn-primary" onClick={changeValue} id="unlockbutton">
                                            Unlock
                                        </button>
                                    )}
                                </div>
                            </div>
                            {codeArr.includes('code11') && (
                                <CodeHighlight>
                                    <pre className="language-typescript">{`import { useState } from 'react';

const [disabled, setDisabled] = useState<any>(false);
const [skippingValue, setSkippingValue] = useState<any>(40);
const [skippingValue1, setSkippingValue1] = useState<any>(40);
const changeValue = () => {
 setDisabled(!disabled);
};

<div>
 <Nouislider
     disabled={disabled}
     start={40}
     range={{
         min: 0.0,
         max: 100.0,
     }}
     tooltips={true}
     onSlide={(value) => setSkippingValue(value)}
 />
 <div>Value: {skippingValue}</div>
 <div className="text-primary font-bold mb-10" id="locking_slider1_value"></div>
 <Nouislider
     disabled={disabled}
     start={40}
     range={{
         min: 0.0,
         max: 100.0,
     }}
     onSlide={(value) => setSkippingValue1(value)}
     tooltips={true}
 />
 <div>Value: {skippingValue1}</div>
 <div className="text-primary font-bold mb-10" id="locking_slider2_value"></div>
 <div className="ltr:text-right rtl:text-left">
     {disabled === false ? (
         <button type="button" className="btn btn-primary" onClick={changeValue} id="lockbutton">
             Lock
         </button>
     ) : (
         <button type="button" className="btn btn-primary" onClick={changeValue} id="unlockbutton">
             Unlock
         </button>
     )}
 </div>
</div>`}</pre>
                                </CodeHighlight>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateRangePicker;
