import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H2UMQBSh0m1ls6wjVu5vGCIqcFGx+nvVvV/3pYxHLMAPJOMhDVVtBSTzQdM6eAOPhz3KwacBjGVCpWZAsLB5ddFYfmzSeGS+rj4Q+zn9VYvjM6hbf5P5ZQXDz4SoK5wbqtMOy2g5r2gT10FxEkVUY4rA/cRRiziIeqEM7fBoCexjDZGXsXfdgfDNuVLuUhwB969oB/YvnALnStSIEOmwV+ZIuSnTqI5VqFx576u/ShmivkS9HhN8PTYefgl1WIVeyQCJvSXkOG1ZOQgz5LfIDRe+h0uL8DvsAnWFzxX04doN+zmRMN8NO3akezpqmt5gafbEU+MH2I7ycvnn44gEzSos5twjQdI6mkRbw4X7a/u3YJgV7tuv6l02zSMSipEDomFvZVei5+ttOSho9/G3UhntZba3x6yI+hrtexo7dvf9s3Ts/5Tn+JOuw3akG2OKSPAs79P4+5zlEpLLZvIVfq4+pzWswQQ=', 'base64')).toString());
