import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from '../components/Dropdown';
import { setPageTitle } from '../store/themeConfigSlice';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const Widgets = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Widgets'));
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
                        show: true,
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

    // totalVisitOptions
    const totalVisit: any = {
        series: [{ data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#009688',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#009688'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // paidVisitOptions
    const paidVisit: any = {
        series: [{ data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#e2a03f',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#e2a03f'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // uniqueVisitorSeriesOptions
    const uniqueVisitorSeries: any = {
        series: [
            {
                name: 'Direct',
                data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63],
            },
            {
                name: 'Organic',
                data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70],
            },
        ],
        options: {
            chart: {
                height: 360,
                type: 'bar',
                fontFamily: 'Nunito, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                colors: ['transparent'],
            },
            colors: ['#5c1ac3', '#ffbb44'],
            dropShadow: {
                enabled: true,
                blur: 3,
                color: '#515365',
                opacity: 0.4,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 8,
                    borderRadiusApplication: 'end',
                },
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                itemMargin: {
                    horizontal: 8,
                    vertical: 8,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                padding: {
                    left: 20,
                    right: 20,
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: true,
                    color: isDark ? '#3b3f5c' : '#e0e6ed',
                },
            },
            yaxis: {
                tickAmount: 6,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: isDark ? 'dark' : 'light',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100],
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
            },
        },
    };
    // followersOptions
    const followers: any = {
        series: [
            {
                data: [38, 60, 38, 52, 36, 40, 28],
            },
        ],
        options: {
            chart: {
                height: 160,
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
            colors: ['#4361ee'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // referralOptions
    const referral: any = {
        series: [
            {
                data: [60, 28, 52, 38, 40, 36, 38],
            },
        ],
        options: {
            chart: {
                height: 160,
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
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // engagementOptions
    const engagement: any = {
        series: [
            {
                name: 'Sales',
                data: [28, 50, 36, 60, 38, 52, 38],
            },
        ],
        options: {
            chart: {
                height: 160,
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
            colors: ['#1abc9c'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    return (
        <div>
            <div>
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

                                    <span className="badge badge-outline-danger absolute bg-danger-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">Pending</span>
                                </div>
                                <div className="group relative flex items-center py-1.5">
                                    <div className="h-1.5 w-1.5 rounded-full bg-black ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Collect documents from Sara</div>
                                    <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">16:00</div>

                                    <span className="badge badge-outline-dark absolute bg-dark-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">Completed</span>
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

                                    <span className="badge badge-outline-info absolute bg-info-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">Completed</span>
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

                                    <span className="badge badge-outline-danger absolute bg-danger-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">Pending</span>
                                </div>
                                <div className="group relative flex items-center py-1.5">
                                    <div className="h-1.5 w-1.5 rounded-full bg-black ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Collect documents from Sara</div>
                                    <div className="text-xs text-white-dark ltr:ml-auto rtl:mr-auto dark:text-gray-500">16:00</div>

                                    <span className="badge badge-outline-dark absolute bg-dark-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">Completed</span>
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

                                    <span className="badge badge-outline-info absolute bg-info-light text-xs opacity-0 group-hover:opacity-100 ltr:right-0 rtl:left-0 dark:bg-black">Completed</span>
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

            <div className="mt-6">
                <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="panel h-full sm:col-span-2 lg:col-span-1">
                        {/* statistics */}
                        <div className="mb-5 flex justify-between dark:text-white-light">
                            <h5 className="text-lg font-semibold ">Statistics</h5>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
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
                                            <button type="button">This Week</button>
                                        </li>
                                        <li>
                                            <button type="button">Last Week</button>
                                        </li>
                                        <li>
                                            <button type="button">This Month</button>
                                        </li>
                                        <li>
                                            <button type="button">Last Month</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="grid gap-8 text-sm font-bold text-[#515365] sm:grid-cols-2">
                            <div>
                                <div>
                                    <div>Total Visits</div>
                                    <div className="text-lg text-[#f8538d]">423,964</div>
                                </div>
                                {isMounted && <ReactApexChart series={totalVisit.series} options={totalVisit.options} type="line" height={58} width={'100%'} />}
                            </div>

                            <div>
                                <div>
                                    <div>Paid Visits</div>
                                    <div className="text-lg text-[#f8538d]">7,929</div>
                                </div>

                                {isMounted && <ReactApexChart series={paidVisit.series} options={paidVisit.options} type="line" height={58} width={'100%'} />}
                            </div>
                        </div>
                    </div>

                    <div className="panel h-full">
                        <div className="mb-5 flex justify-between dark:text-white-light">
                            <h5 className="text-lg font-semibold ">Expenses</h5>

                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
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
                                            <button type="button">This Week</button>
                                        </li>
                                        <li>
                                            <button type="button">Last Week</button>
                                        </li>
                                        <li>
                                            <button type="button">This Month</button>
                                        </li>
                                        <li>
                                            <button type="button">Last Month</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className=" my-10 text-3xl font-bold text-[#e95f2b]">
                            <span>$ 45,141 </span>
                            <span className="text-sm text-black ltr:mr-2 rtl:ml-2 dark:text-white-light">this week</span>
                            <svg className="inline text-success" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    opacity="0.5"
                                    d="M22 7L14.6203 14.3347C13.6227 15.3263 13.1238 15.822 12.5051 15.822C11.8864 15.8219 11.3876 15.326 10.3902 14.3342L10.1509 14.0962C9.15254 13.1035 8.65338 12.6071 8.03422 12.6074C7.41506 12.6076 6.91626 13.1043 5.91867 14.0977L2 18"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M22.0001 12.5458V7H16.418" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="h-5 w-full overflow-hidden rounded-full bg-dark-light p-1 shadow-3xl dark:bg-dark-light/10 dark:shadow-none">
                                <div
                                    className="relative h-full w-full rounded-full bg-gradient-to-r from-[#4361ee] to-[#805dca] before:absolute before:inset-y-0 before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-white ltr:before:right-0.5 rtl:before:left-0.5"
                                    style={{ width: '65%' }}
                                ></div>
                            </div>
                            <span className="ltr:ml-5 rtl:mr-5 dark:text-white-light">57%</span>
                        </div>
                    </div>

                    <div
                        className="panel grid h-full grid-cols-1 content-between overflow-hidden before:absolute before:-right-44 before:top-0 before:bottom-0 before:m-auto before:h-96 before:w-96 before:rounded-full before:bg-[#1937cc]"
                        style={{
                            background: 'linear-gradient(0deg,#00c6fb -227%,#005bea)',
                        }}
                    >
                        <div className="z-[7] mb-16 flex items-start justify-between text-white-light">
                            <h5 className="text-lg font-semibold">Total Balance</h5>

                            <div className="relative whitespace-nowrap text-xl">
                                $ 41,741.42
                                <span className="mt-1 table rounded bg-[#4361ee] p-1 text-xs text-[#d3d3d3] ltr:ml-auto rtl:mr-auto">+ 2453</span>
                            </div>
                        </div>
                        <div className="z-10 flex items-center justify-between">
                            <div className="flex items-center justify-between">
                                <button type="button" className="place-content-center rounded p-1 text-white-light shadow-[0_0_2px_0_#bfc9d4] hover:bg-[#1937cc] ltr:mr-2 rtl:ml-2">
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </button>
                                <button type="button" className="grid place-content-center rounded p-1 text-white-light shadow-[0_0_2px_0_#bfc9d4] hover:bg-[#1937cc]">
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
                                </button>
                            </div>
                            <button type="button" className="z-10 rounded p-1 text-white-light shadow-[0_0_2px_0_#bfc9d4] hover:bg-[#4361ee]">
                                Upgrade
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-6 grid gap-6 lg:grid-cols-3">
                    <div className="panel h-full p-0 lg:col-span-2">
                        <div className="mb-5 flex items-start justify-between border-b border-white-light p-5  dark:border-[#1b2e4b] dark:text-white-light">
                            <h5 className="text-lg font-semibold ">Unique Visitors</h5>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
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
                                            <button type="button">View</button>
                                        </li>
                                        <li>
                                            <button type="button">Update</button>
                                        </li>
                                        <li>
                                            <button type="button">Delete</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>

                        {isMounted && <ReactApexChart options={uniqueVisitorSeries.options} series={uniqueVisitorSeries.series} type="bar" height={360} width={'100%'} />}
                    </div>

                    <div className="panel h-full">
                        <div className="-mx-5 mb-5 flex items-start justify-between border-b border-white-light p-5 pt-0  dark:border-[#1b2e4b] dark:text-white-light">
                            <h5 className="text-lg font-semibold ">Activity Log</h5>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
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
                                            <button type="button">View All</button>
                                        </li>
                                        <li>
                                            <button type="button">Mark as Read</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <PerfectScrollbar className="perfect-scrollbar relative -mr-3 h-[360px] pr-3">
                            <div className="space-y-7">
                                <div className="flex">
                                    <div className="relative z-10 before:absolute before:top-10 before:left-4 before:h-[calc(100%-24px)] before:w-[2px] before:bg-white-dark/30 ltr:mr-2 rtl:ml-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white shadow shadow-secondary">
                                            <svg className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">
                                            New project created :{' '}
                                            <button type="button" className="text-success">
                                                [VRISTO Admin Template]
                                            </button>
                                        </h5>
                                        <p className="text-xs text-white-dark">27 Feb, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="relative z-10 before:absolute before:top-10 before:left-4 before:h-[calc(100%-24px)] before:w-[2px] before:bg-white-dark/30 ltr:mr-2 rtl:ml-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success text-white shadow-success">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.5"
                                                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">
                                            Mail sent to{' '}
                                            <button type="button" className="text-white-dark">
                                                HR
                                            </button>{' '}
                                            and{' '}
                                            <button type="button" className="text-white-dark">
                                                Admin
                                            </button>
                                        </h5>
                                        <p className="text-xs text-white-dark">28 Feb, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="relative z-10 before:absolute before:top-10 before:left-4 before:h-[calc(100%-24px)] before:w-[2px] before:bg-white-dark/30 ltr:mr-2 rtl:ml-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.5" d="M4 12.9L7.14286 16.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M20.0002 7.5625L11.4286 16.5625L11.0002 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">Server Logs Updated</h5>
                                        <p className="text-xs text-white-dark">27 Feb, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="relative z-10 before:absolute before:top-10 before:left-4 before:h-[calc(100%-24px)] before:w-[2px] before:bg-white-dark/30 ltr:mr-2 rtl:ml-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-danger text-white">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.5" d="M4 12.9L7.14286 16.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M20.0002 7.5625L11.4286 16.5625L11.0002 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">
                                            Task Completed :
                                            <button type="button" className="ml-1 text-success">
                                                [Backup Files EOD]
                                            </button>
                                        </h5>
                                        <p className="text-xs text-white-dark">01 Mar, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="relative z-10 before:absolute before:top-10 before:left-4 before:h-[calc(100%-24px)] before:w-[2px] before:bg-white-dark/30 ltr:mr-2 rtl:ml-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warning text-white">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.3929 4.05365L14.8912 4.61112L15.3929 4.05365ZM19.3517 7.61654L18.85 8.17402L19.3517 7.61654ZM21.654 10.1541L20.9689 10.4592V10.4592L21.654 10.1541ZM3.17157 20.8284L3.7019 20.2981H3.7019L3.17157 20.8284ZM20.8284 20.8284L20.2981 20.2981L20.2981 20.2981L20.8284 20.8284ZM14 21.25H10V22.75H14V21.25ZM2.75 14V10H1.25V14H2.75ZM21.25 13.5629V14H22.75V13.5629H21.25ZM14.8912 4.61112L18.85 8.17402L19.8534 7.05907L15.8947 3.49618L14.8912 4.61112ZM22.75 13.5629C22.75 11.8745 22.7651 10.8055 22.3391 9.84897L20.9689 10.4592C21.2349 11.0565 21.25 11.742 21.25 13.5629H22.75ZM18.85 8.17402C20.2034 9.3921 20.7029 9.86199 20.9689 10.4592L22.3391 9.84897C21.9131 8.89241 21.1084 8.18853 19.8534 7.05907L18.85 8.17402ZM10.0298 2.75C11.6116 2.75 12.2085 2.76158 12.7405 2.96573L13.2779 1.5653C12.4261 1.23842 11.498 1.25 10.0298 1.25V2.75ZM15.8947 3.49618C14.8087 2.51878 14.1297 1.89214 13.2779 1.5653L12.7405 2.96573C13.2727 3.16993 13.7215 3.55836 14.8912 4.61112L15.8947 3.49618ZM10 21.25C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981L2.64124 21.3588C3.38961 22.1071 4.33855 22.4392 5.51098 22.5969C6.66182 22.7516 8.13558 22.75 10 22.75V21.25ZM1.25 14C1.25 15.8644 1.24841 17.3382 1.40313 18.489C1.56076 19.6614 1.89288 20.6104 2.64124 21.3588L3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14H1.25ZM14 22.75C15.8644 22.75 17.3382 22.7516 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588L20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25V22.75ZM21.25 14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981L21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.7516 17.3382 22.75 15.8644 22.75 14H21.25ZM2.75 10C2.75 8.09318 2.75159 6.73851 2.88976 5.71085C3.02502 4.70476 3.27869 4.12511 3.7019 3.7019L2.64124 2.64124C1.89288 3.38961 1.56076 4.33855 1.40313 5.51098C1.24841 6.66182 1.25 8.13558 1.25 10H2.75ZM10.0298 1.25C8.15538 1.25 6.67442 1.24842 5.51887 1.40307C4.34232 1.56054 3.39019 1.8923 2.64124 2.64124L3.7019 3.7019C4.12453 3.27928 4.70596 3.02525 5.71785 2.88982C6.75075 2.75158 8.11311 2.75 10.0298 2.75V1.25Z"
                                                    fill="currentColor"
                                                />
                                                <path opacity="0.5" d="M13 2.5V5C13 7.35702 13 8.53553 13.7322 9.26777C14.4645 10 15.643 10 18 10H22" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">
                                            Documents Submitted from <button type="button">Sara</button>
                                        </h5>
                                        <p className="text-xs text-white-dark">10 Mar, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="ltr:mr-2 rtl:ml-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dark text-white">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.5"
                                                    d="M2 17C2 15.1144 2 14.1716 2.58579 13.5858C3.17157 13 4.11438 13 6 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H6C4.11438 21 3.17157 21 2.58579 20.4142C2 19.8284 2 18.8856 2 17Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    opacity="0.5"
                                                    d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6C22 7.88562 22 8.82843 21.4142 9.41421C20.8284 10 19.8856 10 18 10H6C4.11438 10 3.17157 10 2.58579 9.41421C2 8.82843 2 7.88562 2 6Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                />
                                                <path d="M11 6H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M6 6H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M11 17H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M6 17H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">Server rebooted successfully</h5>
                                        <p className="text-xs text-white-dark">06 Apr, 2020</p>
                                    </div>
                                </div>
                            </div>
                        </PerfectScrollbar>
                    </div>
                </div>

                <div className="mb-6 grid gap-6 sm:grid-cols-3 xl:grid-cols-5">
                    <div className="panel h-full sm:col-span-3 xl:col-span-2">
                        <div className="mb-5 flex items-start justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Visitors by Browser</h5>
                        </div>
                        <div className="flex flex-col space-y-5">
                            <div className="flex items-center">
                                <div className="h-9 w-9">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary dark:text-white-light">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <circle opacity="0.5" cx="12" cy="12" r="4"></circle>
                                            <line opacity="0.5" x1="21.17" y1="8" x2="12" y2="8"></line>
                                            <line opacity="0.5" x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                                            <line opacity="0.5" x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full flex-initial px-3">
                                    <div className="w-summary-info mb-1 flex justify-between font-semibold text-white-dark">
                                        <h6>Chrome</h6>
                                        <p className="text-xs ltr:ml-auto rtl:mr-auto">65%</p>
                                    </div>
                                    <div>
                                        <div className="h-5 w-full overflow-hidden rounded-full bg-dark-light p-1 shadow-3xl dark:bg-dark-light/10 dark:shadow-none">
                                            <div
                                                className="relative h-full w-full rounded-full bg-gradient-to-r from-[#009ffd] to-[#2a2a72] before:absolute before:inset-y-0 before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-white ltr:before:right-0.5 rtl:before:left-0.5"
                                                style={{ width: '65%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="h-9 w-9">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-danger/10 text-danger dark:bg-danger dark:text-white-light">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                            <path
                                                d="M13.024 14.5601C10.7142 15.484 9.5593 15.946 8.89964 15.4977C8.74324 15.3914 8.60834 15.2565 8.50206 15.1001C8.0538 14.4405 8.51575 13.2856 9.43967 10.9758C9.63673 10.4831 9.73527 10.2368 9.90474 10.0435C9.94792 9.99429 9.99429 9.94792 10.0435 9.90474C10.2368 9.73527 10.4831 9.63673 10.9758 9.43966C13.2856 8.51575 14.4405 8.0538 15.1001 8.50206C15.2565 8.60834 15.3914 8.74324 15.4977 8.89964C15.946 9.5593 15.484 10.7142 14.5601 13.024C14.363 13.5166 14.2645 13.763 14.095 13.9562C14.0518 14.0055 14.0055 14.0518 13.9562 14.095C13.763 14.2645 13.5166 14.363 13.024 14.5601Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full flex-initial px-3">
                                    <div className="w-summary-info mb-1 flex justify-between font-semibold text-white-dark">
                                        <h6>Safari</h6>
                                        <p className="text-xs ltr:ml-auto rtl:mr-auto">40%</p>
                                    </div>
                                    <div>
                                        <div className="h-5 w-full overflow-hidden rounded-full bg-dark-light p-1 shadow-3xl dark:bg-dark-light/10 dark:shadow-none">
                                            <div
                                                className="relative h-full w-full rounded-full bg-gradient-to-r from-[#a71d31] to-[#3f0d12] before:absolute before:inset-y-0 before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-white ltr:before:right-0.5 rtl:before:left-0.5"
                                                style={{ width: '40%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="h-9 w-9">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-warning/10 text-warning dark:bg-warning dark:text-white-light">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    </div>
                                </div>
                                <div className="w-full flex-initial px-3">
                                    <div className="w-summary-info mb-1 flex justify-between font-semibold text-white-dark">
                                        <h6>Others</h6>
                                        <p className="text-xs ltr:ml-auto rtl:mr-auto">25%</p>
                                    </div>
                                    <div>
                                        <div className="h-5 w-full overflow-hidden rounded-full bg-dark-light p-1 shadow-3xl dark:bg-dark-light/10 dark:shadow-none">
                                            <div
                                                className="relative h-full w-full rounded-full bg-gradient-to-r from-[#fe5f75] to-[#fc9842] before:absolute before:inset-y-0 before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-white ltr:before:right-0.5 rtl:before:left-0.5"
                                                style={{ width: '25%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel h-full p-0">
                        <div className="flex p-5">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary dark:text-white-light">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
                                    <path opacity="0.5" d="M18 9C19.6569 9 21 7.88071 21 6.5C21 5.11929 19.6569 4 18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path opacity="0.5" d="M6 9C4.34315 9 3 7.88071 3 6.5C3 5.11929 4.34315 4 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <ellipse cx="12" cy="17" rx="6" ry="4" stroke="currentColor" strokeWidth="1.5" />
                                    <path opacity="0.5" d="M20 19C21.7542 18.6153 23 17.6411 23 16.5C23 15.3589 21.7542 14.3847 20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path opacity="0.5" d="M4 19C2.24575 18.6153 1 17.6411 1 16.5C1 15.3589 2.24575 14.3847 4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="font-semibold ltr:ml-3 rtl:mr-3">
                                <p className="text-xl dark:text-white-light">31.6K</p>
                                <h5 className="text-xs text-[#506690]">Followers</h5>
                            </div>
                        </div>
                        <div className="h-40">
                            {isMounted && <ReactApexChart series={followers.series} options={followers.options} type="area" height={160} width={'100%'} className="absolute bottom-0 w-full" />}
                        </div>
                    </div>

                    <div className="panel h-full p-0">
                        <div className="flex p-5">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-danger/10 text-danger dark:bg-danger dark:text-white-light">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        opacity="0.5"
                                        d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="font-semibold ltr:ml-3 rtl:mr-3">
                                <p className="text-xl dark:text-white-light">1,900</p>
                                <h5 className="text-xs text-[#506690]">Referral</h5>
                            </div>
                        </div>
                        <div className="h-40">
                            {isMounted && <ReactApexChart series={referral.series} options={referral.options} type="area" height={160} width={'100%'} className="absolute bottom-0 w-full" />}
                        </div>
                    </div>

                    <div className="panel h-full p-0">
                        <div className="flex p-5">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success dark:bg-success dark:text-white-light">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        <path d="M11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14Z" fill="currentColor" />
                                        <path
                                            d="M14.5 14C14.5 14.5523 14.0523 15 13.5 15C12.9477 15 12.5 14.5523 12.5 14C12.5 13.4477 12.9477 13 13.5 13C14.0523 13 14.5 13.4477 14.5 14Z"
                                            fill="currentColor"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div className="font-semibold ltr:ml-3 rtl:mr-3">
                                <p className="text-xl dark:text-white-light">18.2%</p>
                                <h5 className="text-xs text-[#506690]">Engagement</h5>
                            </div>
                        </div>
                        <div className="h-40">
                            {isMounted && <ReactApexChart series={engagement.series} options={engagement.options} type="area" height={160} width={'100%'} className="absolute bottom-0 w-full" />}
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <div className="panel h-full">
                        <div className="-m-5 mb-5 flex  items-start border-b border-white-light p-5 dark:border-[#1b2e4b]">
                            <div className="rounded-full ring-2 ring-white-light ltr:mr-4 rtl:ml-4 dark:ring-dark">
                                <img src="/assets/images/profile-1.jpeg" alt="profile1" className="h-10 w-10 rounded-full object-cover" />
                            </div>
                            <div className="font-semibold">
                                <h6>Jimmy Turner</h6>
                                <p className="mt-1 text-xs text-white-dark">Monday, Nov 18</p>
                            </div>
                        </div>
                        <div>
                            <div className="pb-8 text-white-dark">
                                {`"Duis aute irure dolor" in reprehenderit in voluptate velit esse
                cillum "dolore eu fugiat" nulla pariatur. Excepteur sint
                occaecat cupidatat non proident.`}
                            </div>
                            <div className="absolute bottom-0 -mx-5 flex w-full items-center justify-between p-5">
                                <div className="flex items-center">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative -top-1 inline text-info ltr:mr-1.5 rtl:ml-1.5">
                                        <path
                                            d="M20.9751 12.1852L20.2361 12.0574L20.9751 12.1852ZM20.2696 16.265L19.5306 16.1371L20.2696 16.265ZM6.93776 20.4771L6.19055 20.5417H6.19055L6.93776 20.4771ZM6.1256 11.0844L6.87281 11.0198L6.1256 11.0844ZM13.9949 5.22142L14.7351 5.34269V5.34269L13.9949 5.22142ZM13.3323 9.26598L14.0724 9.38725V9.38725L13.3323 9.26598ZM6.69813 9.67749L6.20854 9.10933H6.20854L6.69813 9.67749ZM8.13687 8.43769L8.62646 9.00585H8.62646L8.13687 8.43769ZM10.518 4.78374L9.79207 4.59542L10.518 4.78374ZM10.9938 2.94989L11.7197 3.13821L11.7197 3.13821L10.9938 2.94989ZM12.6676 2.06435L12.4382 2.77841L12.4382 2.77841L12.6676 2.06435ZM12.8126 2.11093L13.0419 1.39687L13.0419 1.39687L12.8126 2.11093ZM9.86194 6.46262L10.5235 6.81599V6.81599L9.86194 6.46262ZM13.9047 3.24752L13.1787 3.43584V3.43584L13.9047 3.24752ZM11.6742 2.13239L11.3486 1.45675L11.3486 1.45675L11.6742 2.13239ZM20.2361 12.0574L19.5306 16.1371L21.0086 16.3928L21.7142 12.313L20.2361 12.0574ZM13.245 21.25H8.59634V22.75H13.245V21.25ZM7.68497 20.4125L6.87281 11.0198L5.37839 11.149L6.19055 20.5417L7.68497 20.4125ZM19.5306 16.1371C19.0238 19.0677 16.3813 21.25 13.245 21.25V22.75C17.0712 22.75 20.3708 20.081 21.0086 16.3928L19.5306 16.1371ZM13.2548 5.10015L12.5921 9.14472L14.0724 9.38725L14.7351 5.34269L13.2548 5.10015ZM7.18772 10.2456L8.62646 9.00585L7.64728 7.86954L6.20854 9.10933L7.18772 10.2456ZM11.244 4.97206L11.7197 3.13821L10.2678 2.76157L9.79207 4.59542L11.244 4.97206ZM12.4382 2.77841L12.5832 2.82498L13.0419 1.39687L12.897 1.3503L12.4382 2.77841ZM10.5235 6.81599C10.8354 6.23198 11.0777 5.61339 11.244 4.97206L9.79207 4.59542C9.65572 5.12107 9.45698 5.62893 9.20041 6.10924L10.5235 6.81599ZM12.5832 2.82498C12.8896 2.92342 13.1072 3.16009 13.1787 3.43584L14.6306 3.05921C14.4252 2.26719 13.819 1.64648 13.0419 1.39687L12.5832 2.82498ZM11.7197 3.13821C11.7547 3.0032 11.8522 2.87913 11.9998 2.80804L11.3486 1.45675C10.8166 1.71309 10.417 2.18627 10.2678 2.76157L11.7197 3.13821ZM11.9998 2.80804C12.1345 2.74311 12.2931 2.73181 12.4382 2.77841L12.897 1.3503C12.3872 1.18655 11.8312 1.2242 11.3486 1.45675L11.9998 2.80804ZM14.1537 10.9842H19.3348V9.4842H14.1537V10.9842ZM14.7351 5.34269C14.8596 4.58256 14.824 3.80477 14.6306 3.0592L13.1787 3.43584C13.3197 3.97923 13.3456 4.54613 13.2548 5.10016L14.7351 5.34269ZM8.59634 21.25C8.12243 21.25 7.726 20.887 7.68497 20.4125L6.19055 20.5417C6.29851 21.7902 7.34269 22.75 8.59634 22.75V21.25ZM8.62646 9.00585C9.30632 8.42 10.0391 7.72267 10.5235 6.81599L9.20041 6.10924C8.85403 6.75767 8.30249 7.30493 7.64728 7.86954L8.62646 9.00585ZM21.7142 12.313C21.9695 10.8365 20.8341 9.4842 19.3348 9.4842V10.9842C19.9014 10.9842 20.3332 11.4959 20.2361 12.0574L21.7142 12.313ZM12.5921 9.14471C12.4344 10.1076 13.1766 10.9842 14.1537 10.9842V9.4842C14.1038 9.4842 14.0639 9.43901 14.0724 9.38725L12.5921 9.14471ZM6.87281 11.0198C6.84739 10.7258 6.96474 10.4378 7.18772 10.2456L6.20854 9.10933C5.62021 9.61631 5.31148 10.3753 5.37839 11.149L6.87281 11.0198Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            opacity="0.5"
                                            d="M3.9716 21.4709L3.22439 21.5355L3.9716 21.4709ZM3 10.2344L3.74721 10.1698C3.71261 9.76962 3.36893 9.46776 2.96767 9.48507C2.5664 9.50239 2.25 9.83274 2.25 10.2344L3 10.2344ZM4.71881 21.4063L3.74721 10.1698L2.25279 10.299L3.22439 21.5355L4.71881 21.4063ZM3.75 21.5129V10.2344H2.25V21.5129H3.75ZM3.22439 21.5355C3.2112 21.383 3.33146 21.2502 3.48671 21.2502V22.7502C4.21268 22.7502 4.78122 22.1281 4.71881 21.4063L3.22439 21.5355ZM3.48671 21.2502C3.63292 21.2502 3.75 21.3686 3.75 21.5129H2.25C2.25 22.1954 2.80289 22.7502 3.48671 22.7502V21.2502Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="dark:text-info">551 Likes</span>
                                </div>
                                <button type="button" className="flex items-center rounded-md bg-success/30 px-1.5 py-1 text-xs text-success hover:shadow-[0_10px_20px_-10px] hover:shadow-success">
                                    Read More
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ltr:ml-1.5 rtl:mr-1.5 rtl:rotate-180">
                                        <path d="M11 19L17 12L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path opacity="0.5" d="M6.99976 19L12.9998 12L6.99976 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="panel h-full">
                        <div className="-m-5 mb-5 flex items-center  justify-between border-b border-white-light p-5 dark:border-[#1b2e4b]">
                            <div className="flex">
                                <div className="media-aside align-self-start">
                                    <div className="rounded-full ring-2 ring-white-light ltr:mr-4 rtl:ml-4 dark:ring-dark">
                                        <img src="/assets/images/g-8.png" alt="profile2" className="h-10 w-10 rounded-full object-cover" />
                                    </div>
                                </div>
                                <div className="font-semibold">
                                    <h6>Dev Summit - New York</h6>
                                    <p className="mt-1 text-xs text-white-dark">Bronx, NY</p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-8 text-center font-semibold">
                            <div className="mb-4 text-primary">4 Members Going</div>
                            <div className="flex items-center justify-center gap-3 pb-8">
                                <img className="h-10 w-10 overflow-hidden rounded-lg object-cover ring-2 ring-white-light dark:ring-dark" src="/assets/images/profile-1.jpeg" alt="profile1" />
                                <img className="h-10 w-10 overflow-hidden rounded-lg object-cover ring-2 ring-white-light dark:ring-dark" src="/assets/images/profile-2.jpeg" alt="profile2" />
                                <img className="h-10 w-10 overflow-hidden rounded-lg object-cover ring-2 ring-white-light dark:ring-dark" src="/assets/images/profile-3.jpeg" alt="profile3" />
                                <img className="h-10 w-10 overflow-hidden rounded-lg object-cover ring-2 ring-white-light dark:ring-dark" src="/assets/images/profile-4.jpeg" alt="profile4" />
                            </div>

                            <div className="absolute bottom-0 -mx-5 flex w-full items-center justify-between p-5">
                                <button type="button" className="btn btn-secondary btn-lg w-full border-0 bg-gradient-to-r from-[#3d38e1] to-[#1e9afe]">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="panel h-full">
                        <div className="-m-5 mb-5 flex items-center justify-between border-b border-white-light p-5 dark:border-[#1b2e4b]">
                            <button type="button" className="flex font-semibold">
                                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-white ltr:mr-4 rtl:ml-4">
                                    <span>FD</span>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <h6>Figma Design</h6>
                                    <p className="mt-1 text-xs text-white-dark">Design Reset</p>
                                </div>
                            </button>

                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
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
                                            <button type="button">View Project</button>
                                        </li>
                                        <li>
                                            <button type="button">Edit Project</button>
                                        </li>
                                        <li>
                                            <button type="button">Mark as Done</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="group">
                            <div className="mb-5 text-white-dark">Doloribus nisi vel suscipit modi, optio ex repudiandae voluptatibus officiis commodi. Nesciunt quas aut neque incidunt!</div>
                            <div className="mb-2 flex items-center justify-between font-semibold">
                                <div className="flex items-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-success">
                                        <path
                                            opacity="0.5"
                                            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                        <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="text-xs ltr:ml-2 rtl:mr-2">5 Tasks</div>
                                </div>
                                <p className="text-primary">65%</p>
                            </div>
                            <div className="mb-5 h-2.5 rounded-full bg-dark-light p-0.5 dark:bg-dark-light/10">
                                <div className="h-full rounded-full bg-gradient-to-r from-[#1e9afe] to-[#60dfcd]" style={{ width: '65%' }}></div>
                            </div>
                            <div className="flex items-end justify-between">
                                <div className="flex items-center rounded-full bg-danger/20 px-2 py-1 text-xs font-semibold text-danger">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr:mr-1 rtl:ml-1">
                                        <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M12 8V12L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    3 Days Left
                                </div>
                                <div className="flex items-center justify-center group-hover:-space-x-2 rtl:space-x-reverse rtl:group-hover:space-x-reverse">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#bfc9d4] font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-dark">
                                        +6
                                    </span>
                                    <img
                                        className="h-9 w-9 rounded-full border-2 border-white object-cover transition-all duration-300 dark:border-dark"
                                        src="/assets/images/profile-6.jpeg"
                                        alt="profile6"
                                    />
                                    <img
                                        className="h-9 w-9 rounded-full border-2 border-white object-cover transition-all duration-300 dark:border-dark"
                                        src="/assets/images/profile-7.jpeg"
                                        alt="profile7"
                                    />
                                    <img
                                        className="h-9 w-9 rounded-full border-2 border-white object-cover transition-all duration-300 dark:border-dark"
                                        src="/assets/images/profile-8.jpeg"
                                        alt="profile8"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Widgets;
