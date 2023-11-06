"use client"
import Image from "next/image";
import Title from "../Common/Title";
import Container from "../Ui/Container";
import trusted from '../../../../public/Assets/images/trusted.svg';
import gmail from '../../../../public/Assets/images/gmail.svg';
import linkedin from '../../../../public/Assets/images/linkedin.svg';
import phone from '../../../../public/Assets/images/phone.svg';
import Button from "../Ui/Button";


export default function HomeContact() {
    return (
        <Container>
            <div className="mt-20">
                <Title name={"Contact Us"} />
            </div>
            <div className="grid md:grid-cols-2 gap-12 my-12">
                <div className="flex items-center justify-center flex-col">
                    <input type="text" className="w-full border borderColor bg-transparent px-3 rounded-full h-8 mb-8 focus:none" placeholder="name (required)*" />
                    <input type="email" className="w-full border borderColor bg-transparent px-3 rounded-full h-8 mb-8" placeholder="E-mail (required)*" />
                    <input type="text" className="w-full border borderColor bg-transparent px-3 rounded-full h-8 mb-8" placeholder="Contact No (required)*" />
                    <textarea type="textarea " className="w-full border borderColor bg-transparent px-3 rounded-full mb-8" placeholder="massege" />
                    <div className="w-full">
                    < Button className="hover:scale-x-125 hover:transform-gpu " background="primary" size="medium" onClick={() => handlePrjectAddress()} >Contact Us</Button>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <div className="flex  flex-col items-center">
                            <Image src={phone} aria-label="Phone Number" alt="phone" className="h-10 w-10" />
                            <div className="text-center">
                                <p>Phone Call</p>
                                <p>+91 7719832542</p>
                            </div>
                        </div>
                        <div className="flex  flex-col items-center">
                            <Image src={gmail} alt="gmail" className="h-10 w-10" />
                            <div className="text-center">
                                <p>Email Us</p>
                                <p>akashkharde111@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex  flex-col items-center">
                            <Image src={linkedin} alt="linkedin" className="h-10 w-10" />
                            <div className="text-center">
                                <p>linkedin</p>
                                <p>akashkjhgjhj.com</p>
                            </div>
                        </div>
                        <div className="flex  flex-col items-center">
                            <Image src={trusted} alt="trusted" className="h-10 w-10" />
                            <div className="text-center">
                                <p>100%  Trusted</p>
                                <p>akashkharde111@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}