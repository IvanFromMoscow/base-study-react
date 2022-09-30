import React from 'react'

const SelectStyle = ({ defaultValue, options, value, onChange }) => {
    return (
        <div>
            <label>
                Sort your posts:
                <select value={value} onChange={(event) => onChange(event.target.value)}>
                    <option disabled value=''>{defaultValue}</option>
                    {
                        options.map(opt => 
                            <option key={opt.value} value={opt.value}>{opt.name}</option>
                        )
                    }
                </select>
            </label>
        </div>
    )
}

export default SelectStyle