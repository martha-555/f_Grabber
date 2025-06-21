import AboutLink from './AboutLink'
import Section from './Section'

const Footer = () => {
  return (
    <div className="bg-primary-900">
      <div className="flex justify-between p-[7.5rem] text-[#FFFFFF]">
        <Section className="justify-between">
          <h1 className="text-h2 font-medium">Grabber</h1>
          <div>
            <AboutLink className="text-b3" link="tel:+48 71 757 53 26" text="+48 71 757 53 26" />
            <AboutLink text="+48 795 955 519 - emergency" link="tel:+48 795 955 519" />
          </div>
        </Section>
        <Section>
          <p className="text-s1">ОФІС</p>
          <p>
            вул. Івана Франка 23 <br /> 56 600 Київ
          </p>
          <p>
            ПН - ПТ <br />
            8:00 - 20:00
          </p>
          <AboutLink text="info@grabber.ua" link="mailto:info@grabber.ua" />
        </Section>
        <Section>
          <p className="text-s1">ДОПОМОГА</p>
          <AboutLink text="Клієнтська підтримка" />
          <AboutLink text="Terms & Conditions" />
          <AboutLink text="Privacy Policy" />
        </Section>
        <Section className="justify-end">
          <AboutLink text="Про нас" />
          <AboutLink text="Категорії" />
          <AboutLink text="Контакти" />
          <AboutLink text="FAQ" />
        </Section>
      </div>
    </div>
  )
}

export default Footer
