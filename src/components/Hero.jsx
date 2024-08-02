import Hand from "../assets/Hand.png"
import Discount from "../assets/Discount.svg"
import GetStarted from "./GetStarted";

const Hero = () => {
    return (
        <div className="flex flex-1 justify-between">
            <div>
                <div className={`bg-discount-gradient box-border border-[#000000] border-solid border-[1px] rounded-[10px] w-[410px] 
                    h-[40px] shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] flex items-center absolute top-[253px]`}>
                    <img src={Discount} alt="robot" />
                    <p className="text-dimWhite ml-3 font-poppins text-[18px]">
                        <span className="text-white">20% </span>
                        DISCOUNT FOR
                        <span className="text-white"> 1 MONTH</span> ACCOUNT</p>
                </div>

                <div className="text-white">
                    <p className="font-poppins font-semibold  text-7xl absolute top-[301px] w-[670px] h-[303px] tracking-[.01em] leading-[140%]">
                    <div className="absolute left-[467px] top-[27px]">
                            <GetStarted></GetStarted>
                        </div>
                        <p>The Next</p>
                        <span className="text-gradient">Generation</span>
                        <br />Payment Method
                    </p>
                </div>

                <div >
                    <p className="text-[rgba(255,255,255,0.7)] absolute top-[644px] font-poppins text-[18px] font-normal leading-[170%]">With the right credit card, you can improve your financial life <br /> by building credit, earning rewards and saving money. But <br /> with hundreds of credit cards on the market.</p>
                </div>


            </div>

            <div>
                <img src={Hand} alt="Robot Hand" className="w-[669px] h-[674px]" />
            </div>
        </div>
    );
};

export default Hero;