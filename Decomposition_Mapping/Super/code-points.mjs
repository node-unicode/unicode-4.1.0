import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H7cCIGSZzvPqTM4lU8VmBtQc3//9Vrd9vftObByStk7G9zBJgUwoxGgCtU2vr0VoEc0auuKcQO13oO9o91dgbxEUyWLIDz7E2YsEJutiQ8E239+xvrxN7W1+DJAPkY/qU+Q5/O+F/IPxCBr0uuaxUYD4TLv1GI9igeB19V4iIiaEhxnznJqCOY6nKJPh7+gtRw08Xv6XScz6c9kNK+OdwBtT82AYed5kwuWaxGRlrv5TMPO6nIB57h1BYc8tcF54jhEYfQ4ZVHTrmibZXnJSkLmwfn1Iu1FTTCjxP2ZCOLvJ+AVCaBbs326dEwU1uCPUBttJci4xflycSvrjgCsD6SDWJmI5WievdaGe8Mr/BPoNr4x1WNXCFbQPO461u23N3h3mWFLdo0VV63GL7YrzGw==', 'base64')).toString());
