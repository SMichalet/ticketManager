import {DefaultCrudRepository} from '@loopback/repository';
import {Ticket, TicketRelations} from '../models';
import {TicketDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TicketRepository extends DefaultCrudRepository<
  Ticket,
  typeof Ticket.prototype.id,
  TicketRelations
> {
  constructor(
    @inject('datasources.ticket') dataSource: TicketDataSource,
  ) {
    super(Ticket, dataSource);
  }
}
