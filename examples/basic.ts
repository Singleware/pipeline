/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the pipeline package for generic
 * purposes.
 */
import * as Pipeline from '../source';

/**
 * Create a subject.
 */
const tickEvents = new Pipeline.Subject<number>();

/**
 * Subscribe the first observer.
 */
tickEvents.subscribe((count: number) => {
  console.log(`Tick A: ${count}`);
});

/**
 * Subscribe the second observer.
 */
tickEvents.subscribe((count: number) => {
  console.log(`Tick B: ${count}`);
});

console.log(`Notify all: ${tickEvents.length}`);
for (let i = 0; tickEvents.length; ++i) {
  tickEvents.notifyFirst(i);
}
