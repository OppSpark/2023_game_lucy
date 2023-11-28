export class KeyboardBuilder{
    constructor(){
        this.input = {};
    }
    setKey(input, content ){
        this.input[input] = content;
        return this;
    }
    build(){
        document.addEventListener('keydown', (event) => {
            const KeyInput = event.key;
            if(this.input[KeyInput]){
                this.input[KeyInput]();
            }
        });
        return this;
    }
}
