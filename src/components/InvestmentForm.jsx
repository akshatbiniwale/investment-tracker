import { useState } from 'react';
import './InvestmentForm.css'

const InvestmentForm = (props) => {
    const [currSav, setCurrSav] = useState('');

    const currSavHandler = (event)=> {
        setCurrSav(event.target.value);
    }

    const [yrSav, setYrSav] = useState('');

    const yrSavHandler = (event)=> {
        setYrSav(event.target.value);
    }

    const [ret, setRet] = useState('');

    const retHandler = (event)=> {
        setRet(event.target.value);
    }

    const [dur, setDur] = useState('');

    const durHandler = (event)=> {
        setDur(event.target.value);
    }


    const formSubmitHandler = (event) => {
        event.preventDefault();

        const formData = {
            cSavings: +currSav,
            yrSavings: +yrSav,
            expectedRet: +ret,
            investmentDur: +dur
        }

        props.onCalcForm(formData);

        setCurrSav('');
        setYrSav('');
        setRet('');
        setDur('');
    };

    return (
        <form className="form" onSubmit={formSubmitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" value={currSav} onChange={currSavHandler} id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" value={yrSav} onChange={yrSavHandler} id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" value={ret} onChange={retHandler} id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" value={dur} onChange={durHandler} id="duration" />
                </p>
            </div>
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