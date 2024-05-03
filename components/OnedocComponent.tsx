import React from 'react'
import { CSS, Tailwind } from '@onedoc/react-print';
import Main from "../app/page"
const OnedocComponent = () => {
  return (
    <Tailwind>
      <CSS>
      {
        String.raw`@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
        @page{
          size:8in 21in;
          margin:0;
        }`
      }
      </CSS>
      <Main/>
    </Tailwind>
  )
}

export default OnedocComponent;