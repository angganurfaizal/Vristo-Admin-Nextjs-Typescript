import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from '../components/Dropdown';
import { setPageTitle } from '../store/themeConfigSlice';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});
import Link from 'next/link';

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Sales Admin'));
    });
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme) === 'dark' ? true : false;
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    });

    //Revenue Chart
    const revenueChart: any = {
        series: [
            {
                name: 'Income',
                data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
            },
            {
                name: 'Expenses',
                data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000],
            },
        ],
        options: {
            chart: {
                height: 325,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },

            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
                lineCap: 'square',
            },
            dropShadow: {
                enabled: true,
                opacity: 0.2,
                blur: 10,
                left: -7,
                top: 22,
            },
            colors: isDark ? ['#2196F3', '#E7515A'] : ['#1B55E2', '#E7515A'],
            markers: {
                discrete: [
                    {
                        seriesIndex: 0,
                        dataPointIndex: 6,
                        fillColor: '#1B55E2',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 5,
                        fillColor: '#E7515A',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                ],
            },
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            xaxis: {
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: true,
                },
                labels: {
                    offsetX: isRtl ? 2 : 0,
                    offsetY: 5,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-xaxis-title',
                    },
                },
            },
            yaxis: {
                tickAmount: 7,
                labels: {
                    formatter: (value: number) => {
                        return value / 1000 + 'K';
                    },
                    offsetX: isRtl ? -30 : -10,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                },
                opposite: isRtl ? true : false,
            },
            grid: {
                borderColor: isDark ? '#191E3A' : '#E0E6ED',
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                fontSize: '16px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 5,
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
                x: {
                    show: false,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: isDark ? 0.19 : 0.28,
                    opacityTo: 0.05,
                    stops: isDark ? [100, 100] : [45, 100],
                },
            },
        },
    };

    //Sales By Category
    const salesByCategory: any = {
        series: [985, 737, 270],
        options: {
            chart: {
                type: 'donut',
                height: 460,
                fontFamily: 'Nunito, sans-serif',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 25,
                colors: isDark ? '#0e1726' : '#fff',
            },
            colors: isDark ? ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'] : ['#e2a03f', '#5c1ac3', '#e7515a'],
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                height: 50,
                offsetY: 20,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '65%',
                        background: 'transparent',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '29px',
                                offsetY: -10,
                            },
                            value: {
                                show: true,
                                fontSize: '26px',
                                color: isDark ? '#bfc9d4' : undefined,
                                offsetY: 16,
                                formatter: (val: any) => {
                                    return val;
                                },
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#888ea8',
                                fontSize: '29px',
                                formatter: (w: any) => {
                                    return w.globals.seriesTotals.reduce(function (a: any, b: any) {
                                        return a + b;
                                    }, 0);
                                },
                            },
                        },
                    },
                },
            },
            labels: ['Apparel', 'Sports', 'Others'],
            states: {
                hover: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
            },
        },
    };

    //Daily Sales
    const dailySales: any = {
        series: [
            {
                name: 'Sales',
                data: [44, 55, 41, 67, 22, 43, 21],
            },
            {
                name: 'Last Week',
                data: [13, 23, 20, 8, 13, 27, 33],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'bar',
                fontFamily: 'Nunito, sans-serif',
                toolbar: {
                    show: false,
                },
                stacked: true,
                stackType: '100%',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 1,
            },
            colors: ['#e2a03f', '#e0e6ed'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            xaxis: {
                labels: {
                    show: false,
                },
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            },
            yaxis: {
                show: false,
            },
            fill: {
                opacity: 1,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '25%',
                },
            },
            legend: {
                show: false,
            },
            grid: {
                show: false,
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 10,
                    right: -20,
                    bottom: -20,
                    left: -20,
                },
            },
        },
    };

    //Total Orders
    const totalOrders: any = {
        series: [
            {
                name: 'Sales',
                data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40],
            },
        ],
        options: {
            chart: {
                height: 290,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: isDark ? ['#00ab55'] : ['#00ab55'],
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            yaxis: {
                min: 0,
                show: false,
            },
            grid: {
                padding: {
                    top: 125,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                opacity: 1,
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: 0.3,
                    opacityTo: 0.05,
                    stops: [100, 100],
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
            },
        },
    };

    return (
        <>
            <div>
                <ul className="flex space-x-2 rtl:space-x-reverse">
                    <li>
                        <Link href="/" className="text-primary hover:underline">
                            Dashboard
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Sales</span>
                    </li>
                </ul>

                <div className="pt-5">
                    <div className="mb-6 grid gap-6 xl:grid-cols-3">
                        <div className="panel h-full xl:col-span-2">
                            <div className="mb-5 flex items-center justify-between dark:text-white-light">
                                <h5 className="text-lg font-semibold">Revenue</h5>
                                <div className="dropdown">
                                    <Dropdown
                                        offset={[0, 1]}
                                        placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                        button={
                                            <svg className="h-5 w-5 text-black/70 hover:!text-primary dark:text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        }
                                    >
                                        <ul>
                                            <li>
                                                <button type="button">Weekly</button>
                                            </li>
                                            <li>
                                                <button type="button">Monthly</button>
                                            </li>
                                            <li>
                                                <button type="button">Yearly</button>
                                            </li>
                                        </ul>
                                    </Dropdown>
                                </div>
                            </div>
                            <p className="text-lg dark:text-white-light/90">
                                Total Profit <span className="ml-2 text-primary">$10,840</span>
                            </p>
                            <div className="relative">
                                <div className="rounded-lg bg-white dark:bg-black">
                                    {isMounted ? (
                                        <ReactApexChart series={revenueChart.series} options={revenueChart.options} type="area" height={325} width={'100%'} />
                                    ) : (
                                        <div className="grid min-h-[325px] place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                                            <span className="inline-flex h-5 w-5 animate-spin rounded-full  border-2 border-black !border-l-transparent dark:border-white"></span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="panel h-full">
                            <div className="mb-5 flex items-center">
                                <h5 className="text-lg font-semibold dark:text-white-light">Sales By Category</h5>
                            </div>
                            <div>
                                <div className="rounded-lg bg-white dark:bg-black">
                                    {isMounted ? (
                                        <ReactApexChart series={salesByCategory.series} options={salesByCategory.options} type="donut" height={460} width={'100%'} />
                                    ) : (
                                        <div className="grid min-h-[325px] place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                                            <span className="inline-flex h-5 w-5 animate-spin rounded-full  border-2 border-black !border-l-transparent dark:border-white"></span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        <div className="panel h-full sm:col-span-2 xl:col-span-1">
                            <div className="mb-5 flex items-center">
                                <h5 className="text-lg font-semibold dark:text-white-light">
                                    Daily Sales
                                    <span className="block text-sm font-normal text-white-dark">Go to columns for details.</span>
                                </h5>
                                <div className="relative ltr:ml-auto rtl:mr-auto">
                                    <div className="grid h-11 w-11 place-content-center rounded-full bg-[#ffeccb] text-warning dark:bg-warning dark:text-[#ffeccb]">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path
                                                d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="rounded-lg bg-white dark:bg-black">
                                    {isMounted ? (
                                        <ReactApexChart series={dailySales.series} options={dailySales.options} type="bar" height={160} width={'100%'} />
                                    ) : (
                                        <div className="grid min-h-[325px] place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                                            <span className="inline-flex h-5 w-5 animate-spin rounded-full  border-2 border-black !border-l-transparent dark:border-white"></span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="panel h-full">
                            <div className="mb-5 flex items-center justify-between dark:text-white-light">
                                <h5 className="text-lg font-semibold">Summary</h5>
                                <div className="dropdown">
                                    <Dropdown
                                        placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                        button={
                                            <svg className="h-5 w-5 text-black/70 hover:!text-primary dark:text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        }
                                    >
                                        <ul>
                                            <li>
                                                <button type="button">View Report</button>
                                            </li>
                                            <li>
                                                <button type="button">Edit Report</button>
                                            </li>
                                            <li>
                                                <button type="button">Mark as Done</button>
                                            </li>
                                        </ul>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="space-y-9">
                                <div className="flex items-center">
                                    <div className="h-9 w-9 ltr:mr-3 rtl:ml-3">
                                        <div className="grid h-9 w-9 place-content-center  rounded-full bg-secondary-light text-secondary dark:bg-secondary dark:text-secondary-light">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.74157 18.5545C4.94119 20 7.17389 20 11.6393 20H12.3605C16.8259 20 19.0586 20 20.2582 18.5545M3.74157 18.5545C2.54194 17.1091 2.9534 14.9146 3.77633 10.5257C4.36155 7.40452 4.65416 5.84393 5.76506 4.92196M3.74157 18.5545C3.74156 18.5545 3.74157 18.5545 3.74157 18.5545ZM20.2582 18.5545C21.4578 17.1091 21.0464 14.9146 20.2235 10.5257C19.6382 7.40452 19.3456 5.84393 18.2347 4.92196M20.2582 18.5545C20.2582 18.5545 20.2582 18.5545 20.2582 18.5545ZM18.2347 4.92196C17.1238 4 15.5361 4 12.3605 4H11.6393C8.46374 4 6.87596 4 5.76506 4.92196M18.2347 4.92196C18.2347 4.92196 18.2347 4.92196 18.2347 4.92196ZM5.76506 4.92196C5.76506 4.92196 5.76506 4.92196 5.76506 4.92196Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    opacity="0.5"
                                                    d="M9.1709 8C9.58273 9.16519 10.694 10 12.0002 10C13.3064 10 14.4177 9.16519 14.8295 8"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="mb-2 flex font-semibold text-white-dark">
                                            <h6>Income</h6>
                                            <p className="ltr:ml-auto rtl:mr-auto">$92,600</p>
                                        </div>
                                        <div className="h-2 rounded-full bg-dark-light shadow dark:bg-[#1b2e4b]">
                                            <div className="h-full w-11/12 rounded-full bg-gradient-to-r from-[#7579ff] to-[#b224ef]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="h-9 w-9 ltr:mr-3 rtl:ml-3">
                                        <div className="grid h-9 w-9 place-content-center rounded-full bg-success-light text-success dark:bg-success dark:text-success-light">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.59881 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <circle opacity="0.5" cx="8.60699" cy="8.87891" r="2" transform="rotate(-45 8.60699 8.87891)" stroke="currentColor" strokeWidth="1.5" />
                                                <path opacity="0.5" d="M11.5417 18.5L18.5208 11.5208" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="mb-2 flex font-semibold text-white-dark">
                                            <h6>Profit</h6>
                                            <p className="ltr:ml-auto rtl:mr-auto">$37,515</p>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-dark-light shadow dark:bg-[#1b2e4b]">
                                            <div className="h-full w-full rounded-full bg-gradient-to-r from-[#3cba92] to-[#0ba360]" style={{ width: '65%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="h-9 w-9 ltr:mr-3 rtl:ml-3">
                                        <div className="grid h-9 w-9 place-content-center rounded-full bg-warning-light text-warning dark:bg-warning dark:text-warning-light">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path opacity="0.5" d="M10 16H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path opacity="0.5" d="M14 16H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path opacity="0.5" d="M2 10L22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="mb-2 flex font-semibold text-white-dark">
                                            <h6>Expenses</h6>
                                            <p className="ltr:ml-auto rtl:mr-auto">$55,085</p>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-dark-light shadow dark:bg-[#1b2e4b]">
                                            <div className="h-full w-full rounded-full bg-gradient-to-r from-[#f09819] to-[#ff5858]" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="panel h-full p-0">
                            <div className="absolute flex w-full items-center justify-between p-5">
                                <div className="relative">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-success-light text-success dark:bg-success dark:text-success-light">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                            <path
                                                opacity="0.5"
                                                d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path
                                                opacity="0.5"
                                                d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                            <path opacity="0.5" d="M11 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path
                                                d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <h5 className="text-2xl font-semibold ltr:text-right rtl:text-left dark:text-white-light">
                                    3,192
                                    <span className="block text-sm font-normal">Total Orders</span>
                                </h5>
                            </div>
                            <div className="rounded-lg bg-transparent">
                                {/* loader */}
                                {isMounted ? (
                                    <ReactApexChart series={totalOrders.series} options={totalOrders.options} type="area" height={290} width={'100%'} />
                                ) : (
                                    <div className="grid min-h-[325px] place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                                        <span className="inline-flex h-5 w-5 animate-spin rounded-full  border-2 border-black !border-l-transparent dark:border-white"></span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        <div className="panel h-full pb-0 sm:col-span-2 xl:col-span-1">
                            <h5 className="mb-5 text-lg font-semibold dark:text-white-light">Recent Activities</h5>
                            <PerfectScrollbar className="relative -mr-3 mb-4 h-[290px] pr-3">
                                <div className="cursor-pointer text-sm">
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Updated Server Logs</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">Just Now</div>

                                        <span className="badge badge-outline-primary absolute bg-primary-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            Pending
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-success ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Send Mail to HR and Admin</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">2 min ago</div>

                                        <span className="badge badge-outline-success absolute bg-success-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            Completed
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-danger ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Backup Files EOD</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">14:00</div>

                                        <span className="badge badge-outline-danger absolute bg-danger-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            Pending
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-black ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Collect documents from Sara</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">16:00</div>

                                        <span className="badge badge-outline-dark absolute bg-dark-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            Completed
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-warning ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Conference call with Marketing Manager.</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">17:00</div>

                                        <span className="badge badge-outline-warning absolute bg-warning-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            In progress
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-info ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Rebooted Server</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">17:00</div>

                                        <span className="badge badge-outline-info absolute bg-info-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            Completed
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-secondary ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Send contract details to Freelancer</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">18:00</div>

                                        <span className="badge badge-outline-secondary absolute bg-secondary-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            Pending
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Updated Server Logs</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">Just Now</div>

                                        <span className="badge badge-outline-primary absolute bg-primary-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            Pending
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-success ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Send Mail to HR and Admin</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">2 min ago</div>

                                        <span className="badge badge-outline-success absolute bg-success-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            Completed
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-danger ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Backup Files EOD</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">14:00</div>

                                        <span className="badge badge-outline-danger absolute bg-danger-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            Pending
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-black ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Collect documents from Sara</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">16:00</div>

                                        <span className="badge badge-outline-dark absolute bg-dark-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            Completed
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-warning ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Conference call with Marketing Manager.</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">17:00</div>

                                        <span className="badge badge-outline-warning absolute bg-warning-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            In progress
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-info ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Rebooted Server</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">17:00</div>

                                        <span className="badge badge-outline-info absolute bg-info-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            Completed
                                        </span>
                                    </div>
                                    <div className="group relative flex items-center py-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-secondary ltr:mr-1 rtl:ml-1.5"></div>
                                        <div className="flex-1">Send contract details to Freelancer</div>
                                        <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">18:00</div>

                                        <span className="badge badge-outline-secondary absolute bg-secondary-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">
                                            Pending
                                        </span>
                                    </div>
                                </div>
                            </PerfectScrollbar>
                            <div className="border-t border-white-light dark:border-white/10">
                                <button type="button" className="group group flex w-full items-center justify-center p-4 font-semibold hover:text-primary">
                                    View All
                                    <svg
                                        className="h-4 w-4 transition duration-300 group-hover:translate-x-1 ltr:ml-1 rtl:mr-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="panel h-full">
                            <div className="mb-5 flex items-center justify-between dark:text-white-light">
                                <h5 className="text-lg font-semibold">Transactions</h5>
                                <div className="dropdown">
                                    <Dropdown
                                        placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                        button={
                                            <svg className="h-5 w-5 text-black/70 hover:!text-primary dark:text-white/70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        }
                                    >
                                        <ul>
                                            <li>
                                                <button type="button">View Report</button>
                                            </li>
                                            <li>
                                                <button type="button">Edit Report</button>
                                            </li>
                                            <li>
                                                <button type="button">Mark as Done</button>
                                            </li>
                                        </ul>
                                    </Dropdown>
                                </div>
                            </div>
                            <div>
                                <div className="space-y-6">
                                    <div className="flex">
                                        <span className="grid h-9 w-9 place-content-center rounded-md bg-success-light text-base text-success dark:bg-success dark:text-success-light">SP</span>
                                        <div className="flex-1 px-3">
                                            <div>Shaun Park</div>
                                            <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div>
                                        </div>
                                        <span className="whitespace-pre px-1 text-base text-success ltr:ml-auto rtl:mr-auto">+$36.11</span>
                                    </div>
                                    <div className="flex">
                                        <span className="grid h-9 w-9 place-content-center rounded-md bg-warning-light text-warning dark:bg-warning dark:text-warning-light">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2 10C2 7.17157 2 5.75736 2.87868 4.87868C3.75736 4 5.17157 4 8 4H13C15.8284 4 17.2426 4 18.1213 4.87868C19 5.75736 19 7.17157 19 10C19 12.8284 19 14.2426 18.1213 15.1213C17.2426 16 15.8284 16 13 16H8C5.17157 16 3.75736 16 2.87868 15.1213C2 14.2426 2 12.8284 2 10Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    opacity="0.5"
                                                    d="M19.0003 7.07617C19.9754 7.17208 20.6317 7.38885 21.1216 7.87873C22.0003 8.75741 22.0003 10.1716 22.0003 13.0001C22.0003 15.8285 22.0003 17.2427 21.1216 18.1214C20.2429 19.0001 18.8287 19.0001 16.0003 19.0001H11.0003C8.17187 19.0001 6.75766 19.0001 5.87898 18.1214C5.38909 17.6315 5.17233 16.9751 5.07642 16"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    d="M13 10C13 11.3807 11.8807 12.5 10.5 12.5C9.11929 12.5 8 11.3807 8 10C8 8.61929 9.11929 7.5 10.5 7.5C11.8807 7.5 13 8.61929 13 10Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path opacity="0.5" d="M16 12L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path opacity="0.5" d="M5 12L5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                        <div className="flex-1 px-3">
                                            <div>Cash withdrawal</div>
                                            <div className="text-xs text-white-dark dark:text-gray-500">04 Jan 1:00PM</div>
                                        </div>
                                        <span className="whitespace-pre px-1 text-base text-danger ltr:ml-auto rtl:mr-auto">-$16.44</span>
                                    </div>
                                    <div className="flex">
                                        <span className="grid h-9 w-9 place-content-center rounded-md bg-danger-light text-danger dark:bg-danger dark:text-danger-light">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
                                                <path
                                                    opacity="0.5"
                                                    d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                            </svg>
                                        </span>
                                        <div className="flex-1 px-3">
                                            <div>Amy Diaz</div>
                                            <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div>
                                        </div>
                                        <span className="whitespace-pre px-1 text-base text-success ltr:ml-auto rtl:mr-auto">+$66.44</span>
                                    </div>
                                    <div className="flex">
                                        <span className="grid h-9 w-9 place-content-center rounded-md bg-secondary-light text-secondary dark:bg-secondary dark:text-secondary-light">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596c2.344.058 4.85.398 4.854.398c-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"
                                                />
                                            </svg>
                                        </span>
                                        <div className="flex-1 px-3">
                                            <div>Netflix</div>
                                            <div className="text-xs text-white-dark dark:text-gray-500">04 Jan 1:00PM</div>
                                        </div>
                                        <span className="whitespace-pre px-1 text-base text-danger ltr:ml-auto rtl:mr-auto">-$32.00</span>
                                    </div>
                                    <div className="flex">
                                        <span className="grid h-9 w-9 place-content-center rounded-md bg-info-light text-base text-info dark:bg-info dark:text-info-light">DA</span>
                                        <div className="flex-1 px-3">
                                            <div>Daisy Anderson</div>
                                            <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div>
                                        </div>
                                        <span className="whitespace-pre px-1 text-base text-success ltr:ml-auto rtl:mr-auto">+$10.08</span>
                                    </div>
                                    <div className="flex">
                                        <span className="grid h-9 w-9 place-content-center rounded-md bg-primary-light text-primary dark:bg-primary dark:text-primary-light">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.926 9.70541C13.5474 9.33386 13.5474 8.74151 13.5474 7.55682V7.24712C13.5474 3.96249 13.5474 2.32018 12.6241 2.03721C11.7007 1.75425 10.711 3.09327 8.73167 5.77133L5.66953 9.91436C4.3848 11.6526 3.74244 12.5217 4.09639 13.205C4.10225 13.2164 4.10829 13.2276 4.1145 13.2387C4.48945 13.9117 5.59888 13.9117 7.81775 13.9117C9.05079 13.9117 9.6673 13.9117 10.054 14.2754"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    opacity="0.5"
                                                    d="M13.9259 9.70557L13.9459 9.72481C14.3326 10.0885 14.9492 10.0885 16.1822 10.0885C18.4011 10.0885 19.5105 10.0885 19.8854 10.7615C19.8917 10.7726 19.8977 10.7838 19.9036 10.7951C20.2575 11.4785 19.6151 12.3476 18.3304 14.0858L15.2682 18.2288C13.2888 20.9069 12.2991 22.2459 11.3758 21.9629C10.4524 21.68 10.4524 20.0376 10.4525 16.753L10.4525 16.4434C10.4525 15.2587 10.4525 14.6663 10.074 14.2948L10.054 14.2755"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                            </svg>
                                        </span>
                                        <div className="flex-1 px-3">
                                            <div>Electricity Bill</div>
                                            <div className="text-xs text-white-dark dark:text-gray-500">04 Jan 1:00PM</div>
                                        </div>
                                        <span className="whitespace-pre px-1 text-base text-danger ltr:ml-auto rtl:mr-auto">-$22.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="panel h-full overflow-hidden border-0 p-0">
                            <div className="min-h-[190px] bg-gradient-to-r from-[#4361ee] to-[#160f6b] p-6">
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="flex items-center rounded-full bg-black/50 p-1 font-semibold text-white ltr:pr-3 rtl:pl-3">
                                        <img className="block h-8 w-8 rounded-full border-2 border-white/50 object-cover ltr:mr-1 rtl:ml-1" src="/assets/images/profile-34.jpeg" alt="avatar" />
                                        Alan Green
                                    </div>
                                    <button type="button" className="flex h-9 w-9 items-center justify-between rounded-md bg-black text-white hover:opacity-80 ltr:ml-auto rtl:mr-auto">
                                        <svg className="m-auto h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between text-white">
                                    <p className="text-xl">Wallet Balance</p>
                                    <h5 className="text-2xl ltr:ml-auto rtl:mr-auto">
                                        <span className="text-white-light">$</span>2953
                                    </h5>
                                </div>
                            </div>
                            <div className="-mt-12 grid grid-cols-2 gap-2 px-8">
                                <div className="rounded-md bg-white px-4 py-2.5 shadow dark:bg-[#060818]">
                                    <span className="mb-4 flex items-center justify-between dark:text-white">
                                        Received
                                        <svg className="h-4 w-4 text-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 15L12 9L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <div className="btn w-full  border-0 bg-[#ebedf2] py-1 text-base text-[#515365] shadow-none dark:bg-black dark:text-[#bfc9d4]">$97.99</div>
                                </div>
                                <div className="rounded-md bg-white px-4 py-2.5 shadow dark:bg-[#060818]">
                                    <span className="mb-4 flex items-center justify-between dark:text-white">
                                        Spent
                                        <svg className="h-4 w-4 text-danger" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 9L12 15L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <div className="btn w-full  border-0 bg-[#ebedf2] py-1 text-base text-[#515365] shadow-none dark:bg-black dark:text-[#bfc9d4]">$53.00</div>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="mb-5">
                                    <span className="rounded-full bg-[#1b2e4b] px-4 py-1.5 text-xs text-white before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-white ltr:before:mr-2 rtl:before:ml-2">
                                        Pending
                                    </span>
                                </div>
                                <div className="mb-5 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-[#515365]">Netflix</p>
                                        <p className="text-base">
                                            <span>$</span> <span className="font-semibold">13.85</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-[#515365]">BlueHost VPN</p>
                                        <p className="text-base">
                                            <span>$</span> <span className="font-semibold ">15.66</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-around px-2 text-center">
                                    <button type="button" className="btn btn-secondary ltr:mr-2 rtl:ml-2">
                                        View Details
                                    </button>
                                    <button type="button" className="btn btn-success">
                                        Pay Now $29.51
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="panel h-full w-full">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Recent Orders</h5>
                            </div>
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="ltr:rounded-l-md rtl:rounded-r-md">Customer</th>
                                            <th>Product</th>
                                            <th>Invoice</th>
                                            <th>Price</th>
                                            <th className="ltr:rounded-r-md rtl:rounded-l-md">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="min-w-[150px] text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/profile-6.jpeg" alt="avatar" />
                                                    <span className="whitespace-nowrap">Luke Ivory</span>
                                                </div>
                                            </td>
                                            <td className="text-primary">Headphone</td>
                                            <td>
                                                <Link href="/apps/invoice/preview">#46894</Link>
                                            </td>
                                            <td>$56.07</td>
                                            <td>
                                                <span className="badge bg-success shadow-md dark:group-hover:bg-transparent">Paid</span>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/profile-7.jpeg" alt="avatar" />
                                                    <span className="whitespace-nowrap">Andy King</span>
                                                </div>
                                            </td>
                                            <td className="text-info">Nike Sport</td>
                                            <td>
                                                <Link href="/apps/invoice/preview">#76894</Link>
                                            </td>
                                            <td>$126.04</td>
                                            <td>
                                                <span className="badge bg-secondary shadow-md dark:group-hover:bg-transparent">Shipped</span>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/profile-8.jpeg" alt="avatar" />
                                                    <span className="whitespace-nowrap">Laurie Fox</span>
                                                </div>
                                            </td>
                                            <td className="text-warning">Sunglasses</td>
                                            <td>
                                                <Link href="/apps/invoice/preview">#66894</Link>
                                            </td>
                                            <td>$56.07</td>
                                            <td>
                                                <span className="badge bg-success shadow-md dark:group-hover:bg-transparent">Paid</span>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/profile-9.jpeg" alt="avatar" />
                                                    <span className="whitespace-nowrap">Ryan Collins</span>
                                                </div>
                                            </td>
                                            <td className="text-danger">Sport</td>
                                            <td>
                                                <button type="button">#75844</button>
                                            </td>
                                            <td>$110.00</td>
                                            <td>
                                                <span className="badge bg-secondary shadow-md dark:group-hover:bg-transparent">Shipped</span>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex items-center">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/profile-10.jpeg" alt="avatar" />
                                                    <span className="whitespace-nowrap">Irene Collins</span>
                                                </div>
                                            </td>
                                            <td className="text-secondary">Speakers</td>
                                            <td>
                                                <Link href="/apps/invoice/preview">#46894</Link>
                                            </td>
                                            <td>$56.07</td>
                                            <td>
                                                <span className="badge bg-success shadow-md dark:group-hover:bg-transparent">Paid</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="panel h-full w-full">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold dark:text-white-light">Top Selling Product</h5>
                            </div>
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr className="border-b-0">
                                            <th className="ltr:rounded-l-md rtl:rounded-r-md">Product</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Sold</th>
                                            <th className="ltr:rounded-r-md rtl:rounded-l-md">Source</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="min-w-[150px] text-black dark:text-white">
                                                <div className="flex">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/product-headphones.jpg" alt="avatar" />
                                                    <p className="whitespace-nowrap">
                                                        Headphone
                                                        <span className="block text-xs text-primary">Digital</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td>$168.09</td>
                                            <td>$60.09</td>
                                            <td>170</td>
                                            <td>
                                                <button type="button" className="flex items-center text-danger">
                                                    <svg className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            opacity="0.5"
                                                            d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    Direct
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/product-shoes.jpg" alt="avatar" />
                                                    <p className="whitespace-nowrap">
                                                        Shoes <span className="block text-xs text-warning">Faishon</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td>$126.04</td>
                                            <td>$47.09</td>
                                            <td>130</td>
                                            <td>
                                                <button type="button" className="flex items-center text-success">
                                                    <svg className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            opacity="0.5"
                                                            d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    Google
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/product-watch.jpg" alt="avatar" />
                                                    <p className="whitespace-nowrap">
                                                        Watch <span className="block text-xs text-danger">Accessories</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td>$56.07</td>
                                            <td>$20.00</td>
                                            <td>66</td>
                                            <td>
                                                <button type="button" className="flex items-center text-warning">
                                                    <svg className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            opacity="0.5"
                                                            d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    Ads
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/product-laptop.jpg" alt="avatar" />
                                                    <p className="whitespace-nowrap">
                                                        Laptop <span className="block text-xs text-primary">Digital</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td>$110.00</td>
                                            <td>$33.00</td>
                                            <td>35</td>
                                            <td>
                                                <button type="button" className="flex items-center text-secondary">
                                                    <svg className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            opacity="0.5"
                                                            d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    Email
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                            <td className="text-black dark:text-white">
                                                <div className="flex">
                                                    <img className="h-8 w-8 rounded-md object-cover ltr:mr-3 rtl:ml-3" src="/assets/images/product-camera.jpg" alt="avatar" />
                                                    <p className="whitespace-nowrap">
                                                        Camera <span className="block text-xs text-primary">Digital</span>
                                                    </p>
                                                </div>
                                            </td>
                                            <td>$56.07</td>
                                            <td>$26.04</td>
                                            <td>30</td>
                                            <td>
                                                <button type="button" className="flex items-center text-primary">
                                                    <svg className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12.6644 5.47875L16.6367 9.00968C18.2053 10.404 18.9896 11.1012 18.9896 11.9993C18.9896 12.8975 18.2053 13.5946 16.6367 14.989L12.6644 18.5199C11.9484 19.1563 11.5903 19.4746 11.2952 19.342C11 19.2095 11 18.7305 11 17.7725V15.4279C7.4 15.4279 3.5 17.1422 2 19.9993C2 10.8565 7.33333 8.57075 11 8.57075V6.22616C11 5.26817 11 4.78917 11.2952 4.65662C11.5903 4.52407 11.9484 4.8423 12.6644 5.47875Z"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            opacity="0.5"
                                                            d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                    Referral
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
