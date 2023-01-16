import Logo from "@/assets/Logo.png"
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-between gap-16 hover:cursor-pointer md:flex">
        <div className="mt-16 basis-1/2 font-light md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            inventore quam dolor iure dolores minima corrupti.
          </p>
          <p>&copy; Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 font-light md:mt-0">
          <h4 className="mb-5 font-bold">Links</h4>
          <p>Massa oric senectus</p>
          <p className="my-5"> Et gravida id et etiam</p>
          <p className="my-5"> Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 font-light md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6852</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
