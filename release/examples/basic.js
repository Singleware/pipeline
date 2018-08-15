"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the pipeline package for generic
 * purposes.
 */
const Pipeline = require("../source");
/**
 * Create a subject.
 */
const tickEvents = new Pipeline.Subject();
/**
 * Subscribe the first observer.
 */
tickEvents.subscribe((count) => {
    console.log('Tick A: ', count);
});
/**
 * Subscribe the second observer.
 */
tickEvents.subscribe((count) => {
    console.log('Tick B: ', count);
});
for (let i = 0; tickEvents.length; ++i) {
    tickEvents.notifyFirst(i);
}
