"use client";
import MobileNavigation from './MobileNavigation';
import Button from '../Ui/Button';
import Container from '../Ui/Container';
import { cn } from '../Lib/Utils';
import { useState } from 'react';
import { neutralsNine, neutralsTwo, neutralsZ, red } from '../../../../public/Assets/Const/ColorConst';
import Image from 'next/image';
import close from "../../../../public/Assets/images/close.png";

import { FormProvider, useForm } from "react-hook-form"
import { Input } from "./ContactInput"
import { BsFillCheckSquareFill } from "react-icons/bs";




const links = [
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Services',
    href: '/#services',
  },
  {
    label: 'Work',
    href: '/#work',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

const GRACE_THRESHOLD = 12;

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contact, setContact] = useState("hideContact");
  
  const handleClick = () => {
    setContact("contact");
  }
  const handleCloseContact = () => {
    setContact("hideContact")
  }

  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 2000)
  })

  const name_validation = {
    name: 'name',
    label: 'name',
    type: 'text',
    id: 'name',
    placeholder: 'write your name ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }


  const email_validation = {
    name: 'email',
    label: 'email',
    type: 'email',
    id: 'email',
    placeholder: 'type email ...',
    validation: {
      required: {
        value: true,
        message: 'Email is required',
      },
      pattern: {
        // Basic email pattern, you can use a more complex one for your needs
        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        message: 'Invalid email address',
      },
    },
  };

  const phone_validation = {
    name: 'phone',
    label: 'phone',
    type: 'tel',
    id: 'phone',
    placeholder: 'type phone number ...',
    validation: {
      required: {
        value: true,
        message: 'Phone number is required',
      },
      minLength: {
        value: 10,
        message: 'Phone number should be at least 10 digits',
      },
      pattern: {
        value: /^[0-9]*$/, // Only allow numeric characters
        message: 'Invalid phone number',
      },
    },
  };


  const desc_validation = {
    name: 'desc',
    label: 'desc',
    type: 'text',
    id: 'desc',
    placeholder: 'type description ...',
    validation: {
      required: {
        value: true,
        message: 'Description is required',
      },
      minWordCount: {
        value: 3,
        message: 'Description should contain at least 3 words',
      },
    },
  };

  const websiteUrlValidation = {
    name: 'websiteUrl',
    label: 'Website URL',
    type: 'url',
    id: 'websiteUrl',
    placeholder: 'Enter website URL ...',
    validation: {
      required: {
        value: false,
        message: 'Website URL is required',
      },
      pattern: {
        value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}([\/\w-]*)*$/,
        message: 'Enter a valid website URL',
      },
    },
  };
  
  return (
    <header
      aria-label="Primary"
      className="fixed top-0 z-40 w-full"
    >
      <Container>
        <div
          className={cn(
            'mt-2 rounded-full border borderColor p-2 transition-colors duration-500',
            `bg-${neutralsNine}/90 backdrop-blur-md supports-[backdrop-filter]:bg-${neutralsNine}/50`
          )}
          style={{ backgroundColor: "#0a0b0f80" }}>
          <div className="grid grid-cols-3">
            <div className="flex items-center lg:hidden">
              <MobileNavigation.Toggle
                isOpen={isMobileMenuOpen}
                onIsOpenChange={setIsMobileMenuOpen}
                isBackgroundShown={true}
              />
            </div>
            <nav
              aria-label="Primary"
              className="ms-4 hidden items-center gap-x-6 lg:flex"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative flex h-full items-center p-1 text-sm uppercase text-${neutralsZ} after:absolute after:inset-x-0 after:bottom-[12.25%] after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-${neutralsTwo} after:to-transparent after:transition-transform hover:after:-scale-x-100 focus-visible:after:-scale-x-100`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center SvgName">
              <a
                href="/"
                title="Navigate home"
                className="hover:animate-jiggle"
              >
                <span className="font-medium SvgName">WEB DEVELOPMENT</span>
              </a>
            </div>
            <div className="flex items-center justify-end ">
              <Button
                as="a"
                href="/#contact"
                size="small"
                isGhost
                className="rounded-full text-white"
                onClick={handleClick}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>

        <div className={`my-4 mx-0  border border borderColor backdrop-blur-xl  rounded-2xl p-4`} id={contact}>
          <div className={`flex item-center justify-between  `}>
            <div className='text-xl'>CONTACT US</div>
            <div onClick={handleCloseContact} className='hover:scale-125 cursor-pointer'><Image src={close} alt='close icon' width={20} height={20} /></div>
          </div>
          <FormProvider {...methods}>
            <form
              onSubmit={e => e.preventDefault()}
              noValidate
              autoComplete="off"
              className="container"
            >
              <div className="grid gap-5 md:grid-cols-2 text-white bg-transparent">
                <Input {...name_validation} />
                <Input {...email_validation} />
                <Input {...websiteUrlValidation} />
                <Input {...phone_validation} />
                <Input {...desc_validation} className="md:col-span-2" />
              </div>
              <div className="mt-5">
                {success && (
                  <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
                    <BsFillCheckSquareFill /> Form has been submitted successfully
                  </p>
                )}
                < Button className="hover:scale-x-110 " background="primary" size="medium"   onClick={onSubmit}>Submit</Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </Container>
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={links}
      />
      <MobileNavigation.Overlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Header;
