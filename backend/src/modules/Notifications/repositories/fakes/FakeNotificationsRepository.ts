import { ObjectID } from 'mongodb';

import INotificationsRepository from '@modules/Notifications/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/Notifications/dtos/ICreateNotificationDTO';

import Notification from '../../infra/typeorm/schemas/Notification';

export default class NotificationsRepository
  implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, { id: new ObjectID(), content, recipient_id });

    this.notifications.push(notification);

    return notification;
  }
}
