import { System } from '../utils/System'
import { Theme } from "../base/Theme";

export class DefaultTheme extends Theme {
	constructor() {
		super();
		this.room = super.room;
	}

	name = "default";//theme's name
	background = "#F2F2F2"; //background color

	//building's style
	building = {
		color: "#000000",
		opacity: 0.1,
		transparent: true,
		depthTest: false
	}

	//floor's style
	floor = {
		color: "#E0E0E0",
		opacity: 1,
		transparent: false
	}

	//selected room's style
	selected = "#ffff55";

	//room wires' style
	strokeStyle = {
		color: "#5C4433",
		opacity: 0.5,
		transparent: true,
		linewidth: 1
	}

	fontStyle = {
		color: "#231815",
		fontsize: 40,
		fontface: "Helvetica, MicrosoftYaHei "
	}

	pubPointImg = {
		"11001": System.imgPath + "/toilet.png",
		"11002": System.imgPath + "/ATM.png",
		"21001": System.imgPath + "/stair.png",
		"22006": System.imgPath + "/entry.png",
		"21002": System.imgPath + "/escalator.png",
		"21003": System.imgPath + "/lift.png"
	}
}