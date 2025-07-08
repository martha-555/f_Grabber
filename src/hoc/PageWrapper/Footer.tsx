import AboutLink from './AboutLink'
import Section from './Section'

const Footer = () => {
  return (
    <div className="bg-primary-900">
      <div className="flex justify-between p-[7.5rem] text-[#FFFFFF]">
        <Section className="justify-between">
          <h1 className="text-h2 font-medium">Grabber</h1>
          <div>
            <p>
              <a className="text-b3" href="tel:+380 67 56 12 530">
                +380 67 56 12 530
              </a>
            </p>
            <p>
              <a href="mailto:info@grabber.ua">info@grabber.ua</a>
            </p>
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
        </Section>
        <Section>
          <p className="text-s1">ДОПОМОГА</p>
          <AboutLink text="Клієнтська підтримка" />
          <AboutLink text="Terms & Conditions" />
          <AboutLink text="Privacy Policy" />
        </Section>
        <Section className="pt-[12px]">
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
