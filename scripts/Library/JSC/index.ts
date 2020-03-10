import Api from "./Api";

class JSC {

    public static generate = (generationComplete: () => void) => (
      Api.generate(generationComplete)
    )

    public static check = () => Api.check();

}

export default JSC;
