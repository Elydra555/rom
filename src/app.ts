export class Romb{
    sideInput?: HTMLInputElement | null
    alphaInput?: HTMLInputElement | null
    perimeterInput?: HTMLInputElement | null
    areaInput?: HTMLInputElement | null
    calcButton?: HTMLButtonElement | null
    
    constructor(){
        this.bindHtml()
    }
    
    bindHtml(){
        this.sideInput = document.querySelector("#side")
        this.alphaInput = document.querySelector("#alpha")
        this.perimeterInput = document.querySelector("#perimeter")
        this.areaInput = document.querySelector("#area")
        this.calcButton = document.querySelector("#calcButton")
        this.renderResult(perimeter, area)
    }

    handleEvent(){
        this.calcButton?.addEventListener('click', () => {
            this.startCalc()
        })
    }

    startCalc(){
        const side = Number(this.sideInput?.value)
        const alpha = Number(this.alphaInput?.value)
        this.calcPerimeter(side)
    }

    calcPerimeter(side: number): number{
        return side * 4
    }
    calcArea(side: number, alpha: number): number{
        const rad = alpha * Math.PI / 180
        return Math.pow(side, 2)* Math.sin(rad)
    }

    renderResult(){
        this.perimeterInput.value = String(perimeter)
    }
}