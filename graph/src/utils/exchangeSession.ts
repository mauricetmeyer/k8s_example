
import { Accessor } from '@leaflytics/shared';
import { Session }  from '~/models/session';

const exchangeSession = async (accessor: Accessor, key?: string): Promise<Session | undefined> => {
  if (key) {
    /**
     * Exchange token for user */
    const sessions = accessor.getRepository(Session);
    const session  = await sessions.findOne({ 
      where: { id: key },
      relations: ['user']
    });

    return session ?? undefined;
  }

  return undefined;
};

export default exchangeSession;
