import bmptec from '@/assets/images/bmptec.jpg';
import wtti from '@/assets/images/wtti.jpg';
import catolica from '@/assets/images/catolicasc.jpg';
import senai from '@/assets/images/senai.jpg';
import { ItemList } from "@/components/ItemList";
import { List } from "@/components/List";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex gap-2">
      <main className="h-screen w-screen">
        <Header />

        <section className="bg-fundo h-3/4 px-16 py-10 overflow-y-scroll">
          <div className="pb-10 flex gap-6">
            <button className="rounded-full px-10 py-2 bg-[#1DB954]">LINKEDIN</button>

            <button className="border rounded-full px-10 py-2">E-MAIL</button>

            <button className="border rounded-full px-10 py-2">ABOUT ME</button>
          </div>

          <section className="flex w-full gap-24">
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
                period={'2020 - 2023'}
              />

              <ItemList
                src={senai}
                alt={'senai'}
                label={'Web Development Certificate'}
                sublabel={'SENAI/SC'}
                period={'2018 - Nov 2019'}
              />
            </List>
          </section>
        </section>
      </main>
    </div >
  );
}
