import { compare, hash } from 'bcrypt';
import config from '~/config';
import { Session } from '~/models/session';
import { User } from '~/models/user';

import { Resolvers } from '~/types/resolvers';
import { badRequest, internalServerError, unathorized } from '~/utils/errors';

export const resolvers: Resolvers = {
  Mutation: {
    async login(_parent, { input }, { log, accessor, response }) {
      /**
       * Make input acccessible */
      const { email, password } = input;

      if (password.length > 70) {
        /**
         * Password is too long to be valid bcrypt. */
        log.warn('Password is too long');
        throw badRequest('Password is too long.');
      }

      /**
       * Get repository and user by email */
      const users = accessor.getRepository(User);
      const user = await users.findOneBy({ email });

      if (!user) {
        log.debug(`User with email ${email} not found`);
        throw badRequest('Ivalid credentials.');
      }

      /**
       * Check password */
      const isValid = await compare(password, user.password);
      if (!isValid) {
        log.debug(`Password for user ${email} is invalid`);
        throw unathorized('Invalid credentials.');
      }

      /**
       * Create token */
      const sessions = accessor.getRepository(Session);
      const session  = sessions.create({ user });

      return sessions.save(session).then(
        res => {
          response.cookie.set('session', {
            value: res.id,
            maxAge: 1000 * 60 * 60 * 24, // 24-hours
            path:     '/',
            domain:   config.domain,
            sameSite: 'strict',
            httpOnly: false
          });

          return { result: res.id }
        },
        _err => {
          throw internalServerError('Failed to save Session');
        },
      );
    },

    async register(_parent, { input }, { log, accessor, response }) {
      /**
       * Make input acccessible */
      const { name, email, password } = input;

      if (password.length < 6) {
        /**
         * Password is too long to be valid bcrypt. */
        log.warn('Password is too short');
        throw badRequest('Password is too short.');
      }

      if (password.length > 70) {
        /**
         * Password is too long to be valid bcrypt. */
        log.warn('Password is too long');
        throw badRequest('Password is too long.');
      }

      /**
       * Get repository and check if user with
       * email already exists. */
      const users = accessor.getRepository(User);
      const existing = await users.findOneBy({ email });
      if (existing) {
        log.warn(`User with email ${email} already exists`);
        throw badRequest('User with this email already exists.');
      }

      /**
       * Create a new user entry */
      const hashed = await hash(password, 10);
      const user = users.create({ name, email, password: hashed });
      await users.save(user);

      /**
       * Create token */
      const sessions = accessor.getRepository(Session);
      const session  = sessions.create({ user });

      return sessions.save(session).then(
        res => {
          response.cookie.set('session', {
            value: res.id,
            maxAge: 1000 * 60 * 60 * 24, // 24-hours
            path:     '/',
            domain:   config.domain,
            sameSite: 'strict',
            httpOnly: false
          });

          return { result: res.id }
        },
        _err => {
          throw internalServerError('Failed to save Token');
        },
      );
    },
  },
};
