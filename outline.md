# Using Redux for State, Effects, and Routing

## About Me

I'm a software engineering intern at Jet.
Contact me at blake.zimmerman@jet.com
Code samples for this talk will be at: github.com/blakezimmerman/redux-tech-talk


## Overview

Redux lets you create web applications that are predictable, and easy to reason about.

State - react-redux

Effects - redux-observable

Routing - redux-first-router


## State

State is a fundamental piece of most interactive applications.

Needs to be managed predictably to prevent application from entering unaccounted states

Managing state with react-redux involves actions and reducers

*Examples of managing state*


## Effects

All of the previous examples only used synchronous actions, how to do async?

There are many ways to model async actions in redux, but I prefer using an effect model.

In an effect model, async actions are performed as reactions to synchronous actions.

This can be achieved with redux-observable, a library that uses rxjs (reactive javascript) to handle effects

*Examples of async actions*


## Routing

Routing is another important piece to many applications

Most routing solutions lead to two sources of truth — redux state and the url

However, with redux-first-router, the url is treated as redux state and this state is changed by dispatching actions.

*Show diagrams showing difference between most routing solutions and redux-first-router*

*Examples of using redux-first-router*


## Conclusion

How do we tie all these pieces together?

*Show index.tsx*

This all scales very nicely. As your application grows, there will be more code, but not much more complexity.
