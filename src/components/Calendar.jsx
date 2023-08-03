import React from 'react'
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import "../styles/calendar.css";

export const Calendar = () => {
    return (
        <>
            <Space direction="vertical" size={"small"} >
                <RangePicker size={"small"} />
            </Space>
        </>
    )
}
