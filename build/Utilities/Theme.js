export const addAlphaToHexColor = (color, alpha = 0) => {
    let newColor = color;
    if (color.length === 4) {
        newColor = color[0];
        newColor += color[1] + color[1];
        newColor += color[2] + color[2];
        newColor += color[3] + color[3];
    }
    if (alpha < 0) {
        alpha = 0;
    }
    else if (alpha > 1) {
        alpha = 1;
    }
    return newColor + (alpha * 255).toString(16).substring(0, 2);
};
