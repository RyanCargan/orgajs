import { compileSync } from '../src/compile'

const content = `
#+title: Next Example

[[file:../components/unicorn.png][the *large* unicorn]]

* Hi

Thanks for your interests in orga.

You can render react components directly in your org file like so:

#+begin_src org
,#+begin_export jsx
<div style={{
  backgroundColor: 'tomato',
  color: 'white',
  padding: '1em'
}}>tomato box</div>
,#+end_export
#+end_src

You should see it looks like this:
#+begin_export jsx
<div style={{
  backgroundColor: 'tomato',
  color: 'white',
  padding: '1em'
}}>tomato box</div>
#+end_export

[[file:special.org][Here is another page with custom layout]].

[[file:react-page.tsx][Here is a react page that imports org file as a component]].
`

const simple = `
#+title: Hello
* Hi
`

describe('compile', () => {
  it('works', () => {
    const result = compileSync(simple, {})

    console.log(result.contents)
  })
})
