import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEy3HPXIBAQCG4bu8VTL5CkkEKZxkZ4sUCpWZzDBKS9gNYViatIn/knEIDWfgJGbN1z1PEHA5/CGqhMr8j/i054i6vUA07CXitHNWWfbOGnGOnE2WnrPNEt9zbbcQOTtCPNttxIvdQbzaX4i83UW82T1EwY4RRTtBlOxvxLvdRzzZA8Q1Sb0fRNkeIh7sEeLRHiM+7AmiYqeImj1FNO0Z4vhLGN4AOSnLbGUBAAA=', 'base64'))));
