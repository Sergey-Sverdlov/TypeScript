import React from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = React.useState<string>('')
    const handleClick = (e: React.ChangeEvent<HTMLInputElement >) => {
        e.preventDefault()
        setValue(e.target.value)
    }
    const clickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(value)
    }
    const dragHangler = (e:React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleClick}/>
            <button onClick={clickHandler}>вапвапвап</button>
            <div style={{width: 200, height: 200, background: 'red'}} onDrag={dragHangler}></div>
            <div style={{width: 200, height: 200, background: 'red', marginTop: 15}}></div>
        </div>
    );
};

export default EventsExample
