import localFont from "next/font/local";
import { Libre_Caslon_Display } from "next/font/google";

export const myFont = localFont({
  src: "./MendlSans_DawnBd.ttf",
  display: "swap",
});
export const libreCaslonDisplay = Libre_Caslon_Display({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
