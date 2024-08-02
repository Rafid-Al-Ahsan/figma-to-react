/* eslint-disable react/prop-types */
import Button from "./Button";
import { features } from "../constants";


const Business = () => {
    return (
        <div className="flex justify-between">
            <div>
                <h2 className="text-white w-[622px] h-[154px] font-poppins font-semibold text-[48px] tracking-[.01em] leading-[160%]">You do the business, we'll handle the money</h2>
                <p className="mt-6 mb-12 w-[570px] h-[93px] font-poppins font-normal text-[18px] leading-[170%] tracking-[.01em] text-dimWhite">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <Button></Button>
            </div>

            <div>
                {features.map((feature,index) => <FeatureCard key={feature.id} feature={feature} index={index}></FeatureCard>)}
            </div>
        </div>
    );
};

export default Business;

const FeatureCard = ({ feature , index }) => {
    return (
        <div className={`flex gap-[20px] ${index === 0 ? 'mt-[35px]' : 'mt-[40px]'} `}>
            <div className="w-[64px] h-[64px] bg-dimBlue rounded-full flex justify-center items-center">
                <p><img src={feature.icon} alt="" /></p>
            </div>

            <div>
                <p className="text-white font-poppins font-semibold text-[18px] leading-[130%] tracking-[.01em] mb-[8px]">{feature.title}</p>
                <p className="w-[366px] h-[48px] font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{feature.content}</p>
            </div>
        </div>

    );
}


// /* Rectangle 14390 */

// position: absolute;
// width: 470px;
// height: 115px;
// left: 835px;
// top: 1258px;

// background: linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #14101D 95.11%);
// box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
// border-radius: 20px;




