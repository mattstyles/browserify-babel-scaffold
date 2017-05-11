
import {fromEvent, merge} from 'most'
import {clamp} from 'lodash/fp'

import {register} from 'core/register'

const clamped = clamp(0, Number.MAX_SAFE_INTEGER)
const add = (count, additive) => clamped(count + additive)

class Counter {
  constructor (el) {
    this.addEl = el.querySelector('.js-counter-add')
    this.subtractEl = el.querySelector('.js-counter-sub')
    this.countEl = el.querySelector('.js-counter-count')

    this.attachHandlers()
  }

  attachHandlers = () => {
    const addEvent = fromEvent('click', this.addEl).map(() => 1)
    const subEvent = fromEvent('click', this.subtractEl).map(() => -1)
    const result = merge(addEvent, subEvent)
    result
      .scan(add, 0)
      .observe(this.render)
  }

  render = (count) => {
    this.countEl.innerHTML = count
  }
}

const init = counter => {
  register(new Counter(counter))
}

const counters = document.querySelectorAll('.js-counter')

if (counters) {
  counters.forEach(init)
}
