import React from 'react'
import '../styles/ResultTable.scss'
import moment from 'moment'

const ResultTable = ({data}) => {
    const formatDate = (time) => moment(time).format('YYYY-MM-DD HH:mm:ss');

    return (
        !data || data.length <= 0 ? <></> : (
            <div className="table-container">
                <p className="history-title">历史记录</p>
                <table>
                    <thead>
                    <tr>
                        <th>生成时间</th>
                        <th>选择英雄组合</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(rowData => (
                        <tr>
                            <td className="table-divider">{formatDate(rowData.time)}</td>
                            <td className="table-divider">{rowData.pickGroup}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>))
}

export default ResultTable
