import constants from '../constants.js';

const rendering = {
    ctx: null,
    img: null,

    nesPallete: [
        [0x66,0x66,0x66],[0x00,0x22,0x88],[0x00,0x00,0xcc],[0x66,0x44,0xcc],[0x88,0x00,0x66],[0xaa,0x00,0x66],[0xaa,0x22,0x00],[0x88,0x44,0x00],[0x66,0x44,0x00],[0x22,0x44,0x00],[0x00,0x66,0x22],[0x00,0x88,0x00],[0x00,0x44,0x44],[0x00,0x00,0x00],[0x00,0x00,0x00],[0x00,0x00,0x00],
        [0xaa,0xaa,0xaa],[0x00,0x66,0x99],[0x00,0x44,0xff],[0x88,0x00,0xff],[0xaa,0x00,0xff],[0xff,0x00,0x88],[0xff,0x00,0x00],[0xcc,0x66,0x00],[0x88,0x66,0x00],[0x22,0x88,0x00],[0x00,0x88,0x00],[0x00,0xaa,0x66],[0x00,0x88,0x88],[0x00,0x00,0x00],[0x00,0x00,0x00],[0x00,0x00,0x00],
        // im too lazy to add the rest of the colors - TODO
        [0x66,0x66,0x66],[0x00,0x22,0x88],[0x00,0x00,0xcc],[0x66,0x44,0xcc],[0x88,0x00,0x66],[0xaa,0x00,0x66],[0xaa,0x22,0x00],[0x88,0x44,0x00],[0x66,0x44,0x00],[0x22,0x44,0x00],[0x00,0x66,0x22],[0x00,0x88,0x00],[0x00,0x44,0x44],[0x00,0x00,0x00],[0x00,0x00,0x00],[0x00,0x00,0x00],
        [0xaa,0xaa,0xaa],[0x00,0x66,0x99],[0x00,0x44,0xff],[0x88,0x00,0xff],[0xaa,0x00,0xff],[0xff,0x00,0x88],[0xff,0x00,0x00],[0xcc,0x66,0x00],[0x88,0x66,0x00],[0x22,0x88,0x00],[0x00,0x88,0x00],[0x00,0xaa,0x66],[0x00,0x88,0x88],[0x00,0x00,0x00],[0x00,0x00,0x00],[0x00,0x00,0x00],
    ],

    initCtx(canvas) {
        this.ctx = canvas.getContext('2d');
        this.img = this.ctx.createImageData(constants.screen_width, constants.screen_height);
    },

    drawPx(x, y, color) {
        var ind = 4 * (y * constants.screen_width + x);

        this.img.data[ind++] = this.nesPallete[color][0];
        this.img.data[ind++] = this.nesPallete[color][1];
        this.img.data[ind++] = this.nesPallete[color][2];
        this.img.data[ind]   = 0xff;
    },

    renderImg() {
        this.ctx.putImageData(this.img, 0, 0);
    }
    
};

export default rendering;