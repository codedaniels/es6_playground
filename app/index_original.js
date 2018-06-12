import { addHeader, addParagraph } from './helpers';
import add, {multiply} from './add';


addHeader ('This function is from a different file!');
addHeader ('This is amazing! I know React now!');
addHeader ('Hi Paul!');

addHeader (`54 + 67 = ${add(54,67)}`);

addParagraph (`this is a new paragraph function imported in from helpers.js`)
addParagraph (`testing multiply ${multiply(5,2)}`)