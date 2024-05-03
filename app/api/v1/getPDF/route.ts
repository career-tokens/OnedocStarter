
import OnedocComponent from "@/components/OnedocComponent";
import { Onedoc } from "@onedoc/client";
import { compile } from "@onedoc/react-print";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { JSXElementConstructor, ReactElement, ReactNode } from "react";

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY as string);
//go to the OneDoc website and grab your API key

export async function GET(){
  const { file, error } = await onedoc.render({
      html: await compile(OnedocComponent() as ReactElement<any, string | JSXElementConstructor<any>>)
      //we are using the JSX returned by the OneDocComponent and converting it into html
      ,
    test: false,
    assets: [
      {
            path: "./util/util.css",//you can have a util folder in parent folder 
          //with a util.css file for some specific styles like for fonts
        content: readFileSync(join(process.cwd(), "./util/util.css")).toString(),
      },
    ],
  });

  if (error) {
    throw error;
  }

  const pdfBuffer = Buffer.from(file);

  // Return the PDF
  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}