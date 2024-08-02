import arrowup from '../assets/arrow-up.svg'

const GetStarted = () => {
    return (
        <div className="w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer">
            <div className="bg-primary w-[100%] h-[100%] rounded-full flex flex-col justify-center items-center">

                <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2 text-gradient flex gap-3">Get 
                    <img src={arrowup} alt="" />
                </p>
                <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2 text-gradient">Started</p>

            </div>
        </div>
    );
};

export default GetStarted;