import PaymentSuccess from '../assets/Billing.png';
import Apple from '../assets/AppleAppStore.png';
import Google from '../assets/GooglePlayStore.png';


const Billing = () => {
    return (
        <div className='flex justify-between w-[1170px] h-[455px]'>
            <div className='w-[530px] h-[455px]'>
                <img src={PaymentSuccess}   alt="" />
            </div>

            <div className='w-[470px] h-[357px]'>
                <p className='text-white font-poppins font-semibold text-[48px] leading-[160%] tracking-[.01em] mt-[48px]'>Easily control your billing & invoicing.</p>
                <p className="w-[470px] h-[87px] font-poppins font-normal text-[18px] leading-[24px] text-dimWhite mt-[24px]">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div className='flex gap-[32.14px] mt-[48px]'>
                    <img src={Apple} alt="" />
                    <img src={Google} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Billing;








