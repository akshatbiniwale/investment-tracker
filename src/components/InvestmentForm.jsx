import './InvestmentForm.css'
import Group1 from './InputGroups/Group1';
import Group2 from './InputGroups/Group2';

const InvestmentForm = ()=> {
    return (
        <form className="form">
            <Group1 />
            <Group2 />
            <p className="actions">
                <button type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default InvestmentForm;