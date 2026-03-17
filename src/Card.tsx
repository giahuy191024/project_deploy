import './index.css';
export interface Card1{
    id: number;
    name: string;
    price: number;
    discount: number;
}
interface CardInformation{
    Carditem:Card1;
}
function Card({Carditem}: CardInformation) {
    return(
        <>
            <div className="
            w-full max-w-[300px]
        bg-white rounded-xl shadow-lg overflow-hidden
        transition-all duration-300
        hover:shadow-xl hover:scale-[1.03]
        border border-gray-200">
                <div className={"p-5"}>
                    <p className={"w-full font-bold text-gray-800"}>{Carditem.id}</p>
                    <h3 className={"text-lg font-semibold mb-2 text-gray-200 line-clamp-2"}>{Carditem.name}</h3>
                    <div className={"flex items-center justify-between"}>
                        <span className={"text-xl font-bold text-orange-500"}>
                            {Carditem.price.toLocaleString('vi-VN')}D
                        </span>
                        <strong><p className={"font-bold text-gray-800"}>Gia da giam :{Carditem.price-Carditem.discount}</p></strong>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;