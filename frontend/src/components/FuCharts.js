import React, { useRef } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const FuCharts = ({ data }) => {
    const chartRef = useRef();
    const dataExemple = {
        labels: ['Jun', 'Jul', 'Aug'],
        datasets: [
            {
                id: 1,
                label: 'Test 1',
                data: [5, 6, 7],
            },
            {
                id: 2,
                label: 'Test 2',
                data: [3, 2, 1],
            },
        ],
    }
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const exdata = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => Math.random()),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => Math.random()),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <>
            <div className='fu-charts'>
                <Line
                    ref={chartRef}
                    datasetIdKey='id'
                    data={exdata}
                />
            </div>
        </>
    )
}

export default FuCharts