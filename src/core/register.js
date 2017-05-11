
import {compose, concat} from 'lodash/fp'

var globalComponentList = []

export const addComponentToList = component => {
  const add = concat(component)
  return compose(
    add
  )
}

export const register = component => {
  const addComponent = addComponentToList(component)
  globalComponentList = addComponent(globalComponentList)
}

export const getAllComponents = () => globalComponentList
