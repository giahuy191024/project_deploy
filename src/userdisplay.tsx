interface userdisplay1{
    displayName:string;
    clickcount :number;
    onUpdateclick :()=>void;
}

const userdisplay=({displayName,clickcount,onUpdateclick}:userdisplay1)=>{
    return(
        <>
            <h1>User display</h1>
            <div>{displayName}</div>
            <div>{clickcount}</div>
            <button onClick={onUpdateclick}>Click me please</button>
        </>
    );
}
export default userdisplay;