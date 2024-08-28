self.__uv$config = {
    prefix: '/edu/',
    bare: 'https://interstellar-olive.vercel.app/ov/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/wk/wk1.js', // handler
    bundle: '/wk/wk2.js', // bundle
    config: '/wk/wk3.js', // config
    sw: '/wk/wk4.js', // sw
};