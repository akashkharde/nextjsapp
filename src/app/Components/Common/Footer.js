"use client"

import Container from "../Ui/Container"
import gmail from '../../../../public/Assets/images/gmail.svg';
import linkedin from '../../../../public/Assets/images/linkedin.svg';
import Image from "next/image";
import logo from '../../../../public/Assets/images/logo.svg';


export default function Footer() {
    const openLinkedInProfile = () => {
        const linkedinProfileUrl = 'https://www.linkedin.com/in/your-linkedin-profile';
        window.open(linkedinProfileUrl, '_blank');
      };
    return (
        <Container className="border-t-2 borderColor">
            <div className="flex items-center justify-between py-8">
                <div> <Image src={logo} alt='devitglobe logo' className='logo' /></div>
                <div className="flex gap-4">
                    <button onClick={() => window.location = 'mailto:yourmail@domain.com'}  ><Image src={gmail} aria-label="Phone Number" alt="gmail" className="h-6 w-6 md:h-8 md:w-8" /></button>
                    <button onClick={openLinkedInProfile} ><Image src={linkedin} aria-label="Phone Number" alt="linkedin" className="h-6 w-6 md:h-8 md:w-8 " /></button>
                </div>
                <div>
                    &copy; Copyright 2023
                </div>
            </div>
        </Container>
    )
}