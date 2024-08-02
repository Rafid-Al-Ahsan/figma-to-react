import CardDetails from '../assets/CardDetails.png';
import Button from './Button';

const CardDeal = () => {
    return (
        <div className='flex justify-between flex-row-reverse w-[1170px] h-[449px]'>
            <div>
                <img src={CardDetails}  className='w-[513px] h-[449px]' alt="" />
            </div>

            <div className='w-[570px] h-[449px]'>
                <p className='text-white font-poppins font-semibold text-[48px] leading-[160%] tracking-[.01em] mt-[48px]'>Find a better card deal in few easy steps.</p>
                <p className="w-[470px] h-[87px] font-poppins font-normal text-[18px] leading-[24px] text-dimWhite mt-[24px]">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <div className=''>
                    <Button></Button>
                </div>
            </div>

        </div>
    );
};

export default CardDeal;


