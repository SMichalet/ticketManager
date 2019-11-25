import {
  Filter,
  repository,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  requestBody,
} from '@loopback/rest';
import {Ticket} from '../models';
import {TicketRepository} from '../repositories';

export class TicketController {
  constructor(
    @repository(TicketRepository)
    public ticketRepository : TicketRepository,
  ) {}

  @post('/tickets', {
    responses: {
      '200': {
        description: 'Ticket model instance',
        content: {'application/json': {schema: getModelSchemaRef(Ticket)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ticket, {
            title: 'NewTicket',
            exclude: ['id'],
          }),
        },
      },
    })
    ticket: Omit<Ticket, 'id'>,
  ): Promise<Ticket> {
    return this.ticketRepository.create(ticket);
  }

  @get('/tickets', {
    responses: {
      '200': {
        description: 'Array of Ticket model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ticket)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Ticket)) filter?: Filter<Ticket>,
  ): Promise<Ticket[]> {
    return this.ticketRepository.find(filter);
  }
}
