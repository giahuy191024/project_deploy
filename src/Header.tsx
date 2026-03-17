import './Header.css';
import {useState} from "react";
const Header = ()=> {
    const [name] = useState<string>('123');
    const [email] = useState<string>('Dokimngan@gmail.com');
    const [countnumber,setCountnumber] = useState<number>(0);
    const [text] = useState<String>('');
    function demo(){
        setCountnumber(countnumber + 1);
    }

    return(
        <>
            <header><h1>Welcome {name}</h1></header>
            <div>{email}</div>
            <div>{countnumber}</div>
            <button onClick={demo}>Click me now</button>
            <div>
                <p>{text}</p>
            </div>
        </>
    );
}
export default Header;
