import { GraphQLScalarType } from 'graphql';
import { Context }           from '~/types/context';

export interface Resolver<Props = any, Type = any> {
  (parent: any, props: Props, context: Context): Promise<Type | null> | Type | null;
}

export type Resolvers = {
  [key: string]: Record<string, Resolver | string> | GraphQLScalarType;
}
