import React from 'react'
import './pages.css'

export default function HomePage(){
    return (

        <div className="Container">
            <div className="row generalText">
                <h1>Introducing Hooks</h1>
                <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
                
                <h2>No Breaking Changes </h2>
                <p>Before we continue, note that Hooks are:</p>
                <ul>
                    <li><strong>Completely opt-in.</strong> You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.</li>
                    <li><strong>100% backwards-compatible.</strong> Hooks don’t contain any breaking changes.</li>
                    <li><strong>Available now.</strong> Hooks are now available with the release of v16.8.0.</li>
                </ul>

                <p>There are no plans to remove classes from React. You can read more about the gradual adoption strategy for Hooks in the bottom section of this page.</p>

                <p>Hooks don’t replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. As we will show later, Hooks also offer a new powerful way to combine them.</p>

                <p>If you just want to start learning Hooks, feel free to jump directly to the next page! You can also keep reading this page to learn more about why we’re adding Hooks, and how we’re going to start using them without rewriting our applications.</p>


                <h2>Motivation</h2>
                <p>Hooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components. Whether you’re learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems.</p>


                <h2>Complex components become hard to understand</h2>
                <p>We’ve often had to maintain components that started out simple but grew into an unmanageable mess of stateful logic and side effects. Each lifecycle method often contains a mix of unrelated logic. For example, components might perform some data fetching in componentDidMount and componentDidUpdate. However, the same componentDidMount method might also contain some unrelated logic that sets up event listeners, with cleanup performed in componentWillUnmount. Mutually related code that changes together gets split apart, but completely unrelated code ends up combined in a single method. This makes it too easy to introduce bugs and inconsistencies.</p>
                <p>In many cases it’s not possible to break these components into smaller ones because the stateful logic is all over the place. It’s also difficult to test them. This is one of the reasons many people prefer to combine React with a separate state management library. However, that often introduces too much abstraction, requires you to jump between different files, and makes reusing components more difficult.</p>
                <p>To solve this, Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable.</p>
                <p>We’ll discuss this more in Using the Effect Hook.</p>

                <h2>Classes confuse both people and machines</h2>

                <p>In addition to making code reuse and code organization more difficult, we’ve found that classes can be a large barrier to learning React. You have to understand how this works in JavaScript, which is very different from how it works in most languages. You have to remember to bind the event handlers. Without unstable syntax proposals, the code is very verbose. People can understand props, state, and top-down data flow perfectly well but still struggle with classes. The distinction between function and class components in React and when to use each one leads to disagreements even between experienced React developers.</p>

                <p>Additionally, React has been out for about five years, and we want to make sure it stays relevant in the next five years. As Svelte, Angular, Glimmer, and others show, ahead-of-time compilation of components has a lot of future potential. Especially if it’s not limited to templates. Recently, we’ve been experimenting with component folding using Prepack, and we’ve seen promising early results. However, we found that class components can encourage unintentional patterns that make these optimizations fall back to a slower path. Classes present issues for today’s tools, too. For example, classes don’t minify very well, and they make hot reloading flaky and unreliable. We want to present an API that makes it more likely for code to stay on the optimizable path.</p>

                <p>To solve these problems, Hooks let you use more of React’s features without classes. Conceptually, React components have always been closer to functions. Hooks embrace functions, but without sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.</p>
            </div>
        </div>
      );
}