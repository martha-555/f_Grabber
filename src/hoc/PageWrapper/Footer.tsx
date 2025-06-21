const Footer = () => {
  return (
    <div className="bg-[#2D336B]">
      <div className="flex justify-between p-[7.5rem] text-[#FFFFFF]">
        <section className="gap -[1.5rem] flex flex-col justify-between">
          <h1 className="text-[48px] font-medium">Grabber</h1>
          <div>
            <p className="text-[18px]">+48 71 757 53 26</p>
            <p className="text-[18px]">+48 795 955 519 - emergency</p>
          </div>
        </section>
        <section className="flex flex-col gap-[1.5rem]">
          <p className="text-[24px]">ОФІС</p>
          <p>
            вул. Івана Франка 23 <br /> 56 600 Київ
          </p>
          <p>
            ПН - ПТ <br />
            8:00 - 20:00
          </p>
          <p>info@grabber.ua</p>
        </section>
        <section className="flex flex-col gap-[1.5rem]">
          <p className="text-[24px]">ДОПОМОГА</p>
          <p>Клієнтська підтримка</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </section>
        <section className="flex flex-col justify-end gap-[1.5rem]">
          <p>Про нас</p>
          <p>Категорії</p>
          <p>Контакти</p>
          <p>FAQ</p>
        </section>
      </div>
    </div>
  )
}

export default Footer
