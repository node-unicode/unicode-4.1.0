import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H3EMAEQtmY5zsO2oV30OINgfBKu/V937dd9PMh6xAD+QjMesaisgmQ+Y1o3jYavKwacBjGVCpcL/ZvMJYzBPn1LXZdG1q4/Edmp/1ZJ49arWfcziUsP4MSFI4VhbGu3OjdfzSps49/K3kUc5rohcT+w1j51oX75YOiEXW7dXESRABNoiIi3CVzEYnXtIfhwM3I9maPvAITK4EDUgRFrsFDlQroo0qn0ZKmdeu+qrUoSoN1GtJwQ/IpsIP8UqrESvYICcxBX8edrc+oPwh3znueLS18PTIvwKNqGqwqcK9OHaBdspSZpvRh3SPh0xTd9nqfflqfEdbMPxcvn+JxGEZhmW4NyDkLKKOtHUcOlu9eA59LPiA3dWvc3Q3KIxH90hFrfW70K65+hzGwXNLr5WKKI5x14fszyqSzSvWWwo9/01d2y/HM/xK1uFbWg3xhRBeJa3WXx9ynkJ6Xk9/R1+rl6HJaxGBQ==', 'base64')).toString());
