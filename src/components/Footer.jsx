import HooBank from "../assets/HoobankFooter.png";
import { footerlink } from "../constants";
import { socialMedia } from "../constants";

const Footer = () => {
    return (
        <div>
            <div className="w-full flex justify-between">
                <div>
                    <img src={HooBank} className="w-[266px] h-[72px]" alt="" />
                    <p className="mt-7 w-[312px] h-[64px] font-poppins font-normal text-[18px] leading-[32px] text-dimWhite">A new way to make the payments easy, reliable and secure.</p>
                </div>

                <div className="flex w-[60%] justify-between">
                    {footerlink.map(link => <div key={link.title} className="w-[146px] h-[219px]">
                        <p className="text-white w-[100px] h-[27px] font-poppins font-medium text-[16px] leading-[150%]">{link.title}</p>
                        {link.links.map((link, index) => <div key={link.link}>
                            <p className={`text-dimWhite ${index === 0 ? "mt-6" : "mt-3"}`}><a href={link.link} >{link.name}</a></p>
                        </div>)}
                    </div>)}
                </div>

            </div>

            <hr className="border-[1px] border-solid border-[#3F3E45] mt-10" />

            <div className="w-full flex justify-between py-9">
                <p className="text-dimWhite">Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
                <div className="w-[13%] flex justify-between">
                    {socialMedia.map(icon => <div key={icon.id}>
                        <img src={icon.icon} alt="" />
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Footer;







