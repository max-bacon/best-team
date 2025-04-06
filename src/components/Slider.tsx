import React, { useState } from 'react';

interface SliderProps {
    onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ onChange }) => {
    const [value, setValue] = useState(5);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10);
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <label htmlFor="slider" style={{ display: 'block', marginBottom: '10px' }}>
                Rank: {value}
            </label>
            <input
                id="slider"
                type="range"
                min="1"
                max="10"
                value={value}
                onChange={handleChange}
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default Slider;