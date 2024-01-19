import { Logger } from '../../Types/Debug';
import handlePayload from './handlePayload';

const actionToString: Logger['mapper'] = (action) => `[${new Date().toJSON()}] - ${action.type}${handlePayload(action)}`;
export default actionToString;
