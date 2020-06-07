import { container } from 'tsyringe';

import '@modules/Users/providers';
import './providers';

import IAppointmentsRepository from '@modules/Appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/Appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/Users/repositories/IUsersRepository';
import UsersRepository from '@modules/Users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/Users/repositories/IUsersTokenRepository';
import UserTokensRepository from '@modules/Users/infra/typeorm/repositories/UsersTokenRepository';

import INotificationsRepository from '@modules/Notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/Notifications/infra/typeorm/repositories/NotificationsRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);
