import {
  repository,
} from '@loopback/repository';
import {
  post,
  get,
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
  async find(): Promise<Ticket[]> {
    return this.ticketRepository.find();
  }
}
