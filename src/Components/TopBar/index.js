import React from 'react';
import './index.scss';
const data = require('../../Common/tinh_tp.json');
const data1 = require('../../Common/quan_huyen.json');

function index() {
    const handleSelectionChange = () => {
        var selectBox = document.getElementById('selectBox');
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        console.log(data[selectedValue]);
    };
    const handleSelectionChange1 = () => {
        var selectBox = document.getElementById('selectBox1');
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        console.log(data1[selectedValue]);
    };
    return (
        <div className="topbar">
            <div className="province">
                <lable>Tỉnh Thành</lable>
                <select className="form-select " id="selectBox" onChange={handleSelectionChange}>
                    {Object.keys(data).map(function (value, index) {
                        return (
                            <option value={value} key={index}>
                                {data[value].name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="province">
                <lable>Quận Huyện</lable>
                <select className="form-select " id="selectBox1" onChange={handleSelectionChange1}>
                    {Object.keys(data1).map(function (value, index) {
                        return (
                            <option value={value} key={index}>
                                {data1[value].name}{' '}
                            </option>
                        );
                    })}
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
