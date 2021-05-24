export default {
	fonts: {
		main: "Raleway, sans-serif"
	},
	colors: {
		white: "hsl(0,0%, 100%)",
		black: "hsl(0,0%, 0%)",

		/* Greyscale Dark to Light*/
		grey1: "hsl(67, 6%, 7%)", // #111113 rgba(17, 17, 19, 1) 
		grey2: "hsl(67, 6%, 35%)", // #55555F rgba(85, 85, 9, 1) 
		grey3: "hsl(67, 3%, 94%)", // #EEEEEF rgba(238, 238, 239, 1)

	  /* Shades of Purple Dark to Light*/
	  purple1: "hsl(240, 53%, 42%)", // #3232A5 
	  purple2: "hsl(245, 65%, 59%)", // #5E52DA rgba(94, 82, 218, 1)
	  purple3: "hsl(245, 80%, 74%)", // #9088F2 rgba(144, 136, 242, 1)
	  purple4: "hsl(245, 94%, 87%)", // #C4BFFD rgba(196, 191, 253, 1) 
		purple5: "hsl(240, 5%, 96%)", // #EAEAF6 rgba(234, 234, 246, 1)
	},
	breakpoints: {
		xSmall: "only screen and (max-width: 40rem)",
		small: "only screen and (max-width: 50rem)",
		medium: "only screen and (max-width: 65rem)",
		large: "only screen and (max-width: 75rem)",
	},
	fontweight: {
		default: "300",
		medium: "400",
		bold:"600",
	},
	lineheight: {

	},
	sizes: {
		maxWidth: "35rem",
		maxTitle: "30rem",
		maxText: "23rem",
		maxCode: "23rem",
		xsWidth: "15rem",
		smWidth: "20rem",
		medWidth: "25rem",
		largeWidth: "30rem",
	},
	spacings: {
		xxSmall: ".25rem",
		xSmall: ".5rem",
		small: "1rem",
		medium: "2rem",
		large: "3rem",
	},
	shadows: {
		shadow1: "0 2px 10px rgba(0,0,0,.1), 3px 5px 20px rgba(0,0,0,.1)",
		shadowpurple: "0 2px 5px rgba(67, 55, 200, .1), 3px 5px 10px rgba(67, 55, 200, .2)"
	}
}