/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Observable from '@singleware/observable';

/**
 * Generic subject class.
 */
@Class.Describe()
export class Subject<T> extends Observable.Subject<T> {
  /**
   * Notify the first registered observer and remove it.
   * @param value Notification value.
   * @returns Returns the own instance.
   */
  @Class.Public()
  public notifyFirstSync(value: T): Subject<T> {
    const observer = this.observers.shift();
    if (observer) {
      Class.call(observer, value);
    }
    return this;
  }

  /**
   * Notify the first registered observer asynchronously and remove it.
   * @param value Notification value.
   * @returns Returns a promise to get the own instance.
   */
  @Class.Public()
  public async notifyFirst(value: T): Promise<Subject<T>> {
    const observer = this.observers.shift();
    if (observer) {
      await Class.call(observer, value);
    }
    return this;
  }

  /**
   * Notify the last registered observer and remove it.
   * @param value Notification value.
   * @returns Returns the own instance.
   */
  @Class.Public()
  public notifyLastSync(value: T): Subject<T> {
    const observer = this.observers.pop();
    if (observer) {
      Class.call(observer, value);
    }
    return this;
  }

  /**
   * Notify the last registered observer asynchronously and remove it.
   * @param value Notification value.
   * @returns Returns a promise to get the own instance.
   */
  @Class.Public()
  public async notifyLast(value: T): Promise<Subject<T>> {
    const observer = this.observers.pop();
    if (observer) {
      await Class.call(observer, value);
    }
    return this;
  }
}
