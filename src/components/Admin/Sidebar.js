import { Add, Dashboard, ExpandMore, ImportExport, ListAlt, PostAdd, RateReview } from '@mui/icons-material';
import { List } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png"
import { TreeItem, TreeView } from '@mui/x-tree-view';
import "./Sidebar.css";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <Link to="/admin/dashboard">
                <p> <Dashboard /> Dashboard </p>
            </Link>
            <Link>
                <TreeView
                    defaultCollapseIcon={<ExpandMore />}
                    defaultExpandIcon={<ImportExport />}
                >
                    <TreeItem nodeId="1" label="Products">
                        <Link to="/admin/products">
                            <TreeItem nodeId="2" label="All" icon={<PostAdd />} />
                        </Link>

                        <Link to="/admin/product">
                            <TreeItem nodeId="3" label="Create" icon={<Add />} />
                        </Link>
                    </TreeItem>
                    <TreeItem nodeId="4" label="Offer Products">
                        <Link to="/admin/products">
                            <TreeItem nodeId="5" label="All" icon={<PostAdd />} />
                        </Link>

                        <Link to="/admin/product">
                            <TreeItem nodeId="6" label="Create" icon={<Add />} />
                        </Link>
                    </TreeItem>
                    <TreeItem nodeId="7" label="Category">
                        <Link to="/admin/products">
                            <TreeItem nodeId="8" label="All" icon={<PostAdd />} />
                        </Link>

                        <Link to="/admin/product">
                            <TreeItem nodeId="9" label="Create" icon={<Add />} />
                        </Link>
                    </TreeItem>
                </TreeView>
            </Link>
            <Link to="/admin/orders">
                <p>
                    <ListAlt /> Orders
                </p>
            </Link>
            <Link to="/admin/review">
                <p>
                    <RateReview /> Review
                </p>
            </Link>
            <Link to="/admin/review">
                <p>
                    <RateReview /> Hero
                </p>
            </Link>
            <Link to="/admin/review">
                <p>
                    <RateReview /> Footer
                </p>
            </Link>
            <Link to="/admin/review">
                <p>
                    <RateReview /> Product card
                </p>
            </Link>
        </div>
    );
};

export default Sidebar;