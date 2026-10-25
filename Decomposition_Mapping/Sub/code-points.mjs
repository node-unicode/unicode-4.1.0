import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H5MA+MXqVqxE0S6CQKXf/Hy68MKb1cnp/0tb0BIMQCIIFIoCfn0V8kvIX0JuNVzDbem/DwIfIs0ziUDL0lEbRi22yPF0Iw==', 'base64')).toString());
