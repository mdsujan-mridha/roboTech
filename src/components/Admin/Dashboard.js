import { Typography } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';
import MetaData from '../Layout/MetaData';
import "./Dashboard.css";
import { Doughnut, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const dispatch = useDispatch();
    const lineState = {
        labels: ["Initial Amount", "Amount Earned"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["tomato"],
                borderColor: 'orange',
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
                data: [0, 2000],


            },
        ],
    };
    const doughnutState = {
        labels: ["Out of Stock", "InStock"],
        datasets: [
            {
                backgroundColor: ["#00A6B4", "#6800B4"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [2, 4],

            },
        ],
    };
    return (
        <div className="dashboard min-h-screen">
            <MetaData title="Dashboard - Admin Panel" />
            <Sidebar />

            <div className="dashboardContainer">
                <Typography component="h1"> Dashboard </Typography>
                <div className="dashboardSummary">
                    <div>
                        <p>
                            {/* Total Amount <br /> {totalAmount} */}
                            Total Amount <br />  20,000
                        </p>
                    </div>
                    <div className="dashboardSummaryBox2">
                        <Link to="/admin/products">
                            <p>Product</p>
                            {/* <p>{products && products?.length}</p> */}
                            20
                        </Link>
                        <Link to="/admin/orders">
                            <p>Orders</p>
                            {/* <p>{orders && orders.length}</p> */}
                            10
                        </Link>
                        <Link to="/admin/users">
                            <p>Users</p>
                            {/* <p>{users && users.length}</p> */}
                            200
                        </Link>
                    </div>
                </div>

                {/* chart  */}

                <div className="lineChart" style={{ backgroundColor: 'var(--secondary)' }}>
                    <Line data={lineState}
                        options={{
                            plugins: {
                                legend: {
                                    labels: {
                                        color: 'white', // Set legend label color to white
                                    },
                                },
                            },
                            scales: {
                                x: {
                                    ticks: {
                                        color: 'white', // Set x-axis tick color to white
                                    },
                                },
                                y: {
                                    ticks: {
                                        color: 'white', // Set y-axis tick color to white
                                    },
                                },
                            },
                        }}
                    />
                </div>
                <div className="doughnutChart">
                    <Doughnut data={doughnutState} />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;