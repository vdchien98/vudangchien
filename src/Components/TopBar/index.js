import React from 'react';
import './index.scss';

function index() {
    return (
        <div className="topbar">
            <div className="province">
                <lable>Tỉnh Thành</lable>
                <select className="form-select ">
                    <option selected>select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="province">
                <lable>Quận Huyện</lable>
                <select className="form-select">
                    <option selected>select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="province">
                <lable>Khoảng giá</lable>
                <select className="form-select ">
                    <option selected>select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="province">
                <lable>Diện tích</lable>
                <select className="form-select">
                    <option selected>select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="province">
                <button type="button" className="filterNews">
                    Lọc Tin
                </button>
            </div>
        </div>
    );
}

export default index;
