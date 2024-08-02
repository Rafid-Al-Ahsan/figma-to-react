import airbnb from '../assets/airbnb.png';
import binance from "../assets/binance.png";
import coinbase from "../assets/coinbase.png";
import dropbox from "../assets/dropbox.png"

const Clients = () => {
    return (
        <div className='flex w-[1066px] h-[60px] gap-[100px]'>
            <img src={airbnb}  className="w-[192px] h-[60px]" alt="" />
            <img src={binance} className="w-[189px] h-[38.67px]" alt="" />
            <img src={coinbase} className="w-[192px] h-[41.12px]" alt="" />
            <img src={dropbox} className="w-[192px] h-[37.86px]" alt="" />
        </div>
    );
};

export default Clients;