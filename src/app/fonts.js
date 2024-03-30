import {Nunito_Sans} from "next/font/google";

export const nunitoSans_init = Nunito_Sans({
	subsets: ['latin'],
	display: "swap",
	variable: '--font-nunito-sans',
	weight: ['300', '600', '800']
});


export const nunitoSans = nunitoSans_init.variable;
