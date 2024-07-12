"use client"

import bmptec from '@/assets/images/bmptec.jpg';
import wtti from '@/assets/images/wtti.jpg';
import catolica from '@/assets/images/catolicasc.jpg';
import senai from '@/assets/images/senai.jpg';
import { ItemList } from "@/components/ItemList";
import { List } from "@/components/List";
import { Header } from "@/components/Header";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [open, setOpen] = useState(false);

  async function copyToClipboard() {
    setOpen(true)

    navigator.clipboard.writeText("dev.matheustambosi@gmail.com");

    await sleep(1000)
    setOpen(false)
  }

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <div className="flex bg-black gap-2">
      <main className="h-screen w-4/5 rounded-xl">
        <Header />

        <section className="bg-fundo h-3/4 px-16 py-10 overflow-y-scroll">
          <div className="pb-10 flex gap-6">
            <button className="rounded-full px-10 py-2 bg-[#1DB954]">ABOUT ME</button>

            <button className="border rounded-full px-10 py-2">PROJECTS</button>

            <Dialog>
              <DialogTrigger asChild>
                <button className="border rounded-full px-10 py-2">CONTACT</button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-[#191414] border-0">
                <DialogHeader>
                  <DialogTitle>Contact</DialogTitle>
                </DialogHeader>

                <div className='flex gap-2'>
                  <span>LinkedIn: </span>
                  <a href="https://www.linkedin.com/in/matheushhtambosi/">
                    <h1>Matheus Tambosi</h1>
                  </a>
                </div>

                <TooltipProvider>
                  <Tooltip open={open}>
                    <TooltipTrigger asChild>
                      <div className='flex gap-2'>
                        <span>Email: </span>
                        <h1 onClick={copyToClipboard} className='cursor-pointer'>dev.matheustambosi@gmail.com</h1>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent hideWhenDetached={true}>
                      <p>Copied to clipboard!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" className='bg-[#1DB954] hover:bg-[#1DB954]'>Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <section className="flex w-full gap-24">
            <div className='flex flex-col w-1/2'>
              <List label={'Experience'}>
                <ItemList
                  src={bmptec}
                  alt={'bmptec'}
                  label={'Full Stack Developer'}
                  sublabel={'BMPTEC'}
                  period={'Dec 2020 - Feb 2024'}
                >
                  <h1 className="pt-6">
                    BMP TEC is a Fintech collaborating with BMP Money Plus, a digital bank in São Paulo, Brazil,
                    that focuses on developing financial solutions for businesses. As a Fullstack Developer,
                    I enhanced and maintained features, developed new functionalities, improved security and performance,
                    and created onboarding software for new team members of the company.
                  </h1>
                </ItemList>

                <ItemList
                  src={wtti}
                  alt={'wtti'}
                  label={'Software Developer'}
                  sublabel={'WTTI'}
                  period={'Jul 2020 - Nov 2020'}
                >
                  <h1 className="pt-6">
                    WTTI is a business management company focused on developing ERP systems.
                    My first professional experience with software development was in this company.
                    I was responsible for helping the team with new system features and maintaining them.
                  </h1>
                </ItemList>
              </List>

              <List label={'Education'}>
                <ItemList
                  src={catolica}
                  alt={'catolica'}
                  label={'Bachelor of Software Engineering'}
                  sublabel={'University Centre Catholic of Santa Catarina'}
                  period={'Jan 2020 - Dec 2023'}
                />

                <ItemList
                  src={senai}
                  alt={'senai'}
                  label={'Web Development Certificate'}
                  sublabel={'SENAI/SC'}
                  period={'Jan 2018 - Dec 2019'}
                />
              </List>
            </div>

            <div className='w-1/2'>
              <List label={'About Me'}>
                <h1 className="pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                  <br />
                  <br />

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                  <br />
                  <br />

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                  <br />
                  <br />

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                  <br />
                  <br />

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h1>
              </List>
            </div>
          </section>
        </section>
      </main>

      <section className='w-1/5 bg-sidebar px-8 py-10'>
        <div className='w-full'>
          <List label={'Skills'}>
          </List>
        </div>
      </section>
    </div >
  );
}
