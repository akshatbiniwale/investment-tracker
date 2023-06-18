import styles from './InvestmentTable.module.css'

const InvestmentTable = (props)=> {
    return(
        <table className={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.dataTable.map((data)=> {
                    return(
                        <tr>
                            <td>{data.year}</td>
                            <td>${data.totalSavingsEndOfYear}</td>
                            <td>${data.interestGainedInYear}</td>
                            <td>${data.totalInterestGained}</td>
                            <td>${data.totalInvestedCapital}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default InvestmentTable;