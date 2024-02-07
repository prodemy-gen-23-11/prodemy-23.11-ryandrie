import toRupiah from "../util/formatter";
import Badge from "./Badge";

function Card({ data }) {
    return (
        <div className='product-card overflow-hidden w-[300px] flex flex-col justify-evenly gap-2 border border-gainsboro rounded-3xl shadow-md shrink-0 product-hover my-2'>
            <div className='w-[90%] self-center border-2 border-gainsboro mt-4 rounded-2xl bg-[#dcdcdc25]'>
                <img
                    className='mx-auto p-2 m-2 mix-blend-multiply scale-115 -mt-12 '
                    src={data.imageUrl[0]}
                    alt=''
                />
            </div>
            <p className='text-center text-[15px] font-mono mx-4 mt-4 '>
                {data.name}
            </p>
            <p className='text-center font-couriernew font-bold p-2'>
                {toRupiah(data.price)}
            </p>
            <div className='product-quantity flex justify-between px-4 mb-4 text-[14px] font-mono'>
                <Badge>Stock : {data.stock} </Badge>
                <Badge>Sold : {data.sold} </Badge>
            </div>
        </div>
    );
}

export default Card;
