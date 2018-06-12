import {addParagraph} from './helpers';
import SuperPerson from './person';

const Daniel = new SuperPerson ('Daniel', 'Stop Time');

addParagraph (Daniel.talk('I like good wings, but todays wings weren\'t that good.'))
addParagraph(Daniel.saySuperPower());