import './Group2.css'

const Group2 = ()=> {
    return (
        <div className="input-group">
            <p>
                <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                </label>
                <input type="number" id="expected-return" />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input type="number" id="duration" />
            </p>
        </div>
    );
}

export default Group2;