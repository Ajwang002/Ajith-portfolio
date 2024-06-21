// ------------------- Imports ------------------- //
import router from '@/router/index'


// ------------------- Common Functions ------------------- //
const useNavigation = (path: string) =>{
    if(path)
    {
        router.push(path)
    }
}

class useColorGenerator {
    private generatedColors:Set<string>

    constructor() {
        this.generatedColors = new Set<string>();
    }

    private getRandomInt():number {
        return Math.floor(Math.random() * 256)
    }

    public genUniRGBClr(opc: number = 1):object {
        let color: string;
        let colorWithOpc: string;

        do{
            const r = this.getRandomInt()
            const g = this.getRandomInt()
            const b = this.getRandomInt()
            color = `rgb(${r},${g},${b})`
            colorWithOpc = `rgba(${r},${g},${b},${opc})`
        }while(this.generatedColors.has(color))

        this.generatedColors.add(color);
        return {org: color, opc:colorWithOpc};
    }

    public genMulpUniColors(numColors: number, opc: number): object[] {
        const colors: object[] = [];
        for (let i = 0; i < numColors; i++) {
            colors.push(this.genUniRGBClr(opc));
        }
        return colors;
    }
}

const useGetMyColor = (opacity:number = 1) => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    var colorCode = `#${n.slice(0, 6)}`;
    return `rgba(${colorCode},${opacity})`
  };


// ------------------- Export's ------------------- //
export{
    useNavigation,
    useGetMyColor,
    useColorGenerator
}