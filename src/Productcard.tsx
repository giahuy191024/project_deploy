export interface Product{
    id: number;
    name: string;
    price: number;
    isLiked: boolean;
}
interface ProductInformation {
    product:Product;
    onToggle: (id:number) => void;
}
const Productcard = ({product,onToggle}:ProductInformation)=>{
    return(
        <>
            <div style={{
                border: '1px solid #ddd',
                padding: '15px',
                margin: '10px',
                borderRadius: '8px',
                backgroundColor: product.isLiked ?'red':'white',
            }}>
                <h3>{product.name}</h3>
                <div>Gia : {product.price}</div>
                <button onClick={()=>onToggle(product.id)}>{product.isLiked ? 'Like' : 'Not Like'}</button>
            </div>
        </>
    );
}
export default Productcard;