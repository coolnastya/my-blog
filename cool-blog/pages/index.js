import {Section, Cover, SocialNetworks, BuyMeCoffee, Title,} from "../components";


export default function Home() {
  return (
    <div>
    <Section>
      <Cover title="Anastasiia Cherkashina"/>
      <SocialNetworks />
      <BuyMeCoffee />
    </Section>
    <Section>
      <Title>New Post</Title>
    </Section>
    </div>
  )
}
