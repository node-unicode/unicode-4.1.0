import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEzWQyw1EIQwDG/KBfIFarNd/G6uszG0GHBJC7nIHbdX3YSRAs5TkyJbUyJE0eLMle+TFDnjbJHdEsVgj/9gJX2AesYF5xQ7WEgdYJk6wXFxghbjBSvEGq8QHrBZfsNR3hkjVhoFnu14NB1vdIsDUFJFgvvP59ntpz9rexZnlPLmgucpzgT2x7wcNFI+qbAEAAA==', 'base64'))));
