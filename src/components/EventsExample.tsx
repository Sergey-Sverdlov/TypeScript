import React from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = React.useState<string>('')
    const [isDrag, setIsDrag] = React.useState<boolean>(false)
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(value)
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("DRAG")
    }
    const dragWithPreventHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const dropHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleClick}/>
            <button onClick={clickHandler}>вапвапвап</button>
            <div draggable style={{width: 200, height: 200, background: 'red'}} onDrag={dragHandler}></div>
            <div
                onDragOver={dragWithPreventHandler}
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15}}>
            </div>
        </div>
    );
};

export default EventsExample
