<% if (type === 'graphql-code-first') { %>import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class <%= singular(classify(name)) %>Entity {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}<% } else { %>export class <%= singular(classify(name))Entity %> {}<% } %>
