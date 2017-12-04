import reducer from './todo'

describe('Todo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'ANYTHING'})
        expect(result).toBeDefined()
    })
    test('add a todo', () => {
        const startState = {
            todos: [
                {id: 1, name:"Create Static UI", isComplete: true},
                {id: 2, name:"Create Initial State", isComplete: true},
                {id: 3, name:"Use State To Render UI", isComplete: true}
            ]
        }
        const expectedState = {
            todos: [
                {id: 1, name:"Create Static UI", isComplete: true},
                {id: 2, name:"Create Initial State", isComplete: true},
                {id: 3, name:"Use State To Render UI", isComplete: true},
                {id: 4, name:"Added Todo", isComplete: false}
            ]
        }
        const action = {type: 'TODO_ADD', payload: {id: 4, name:"Added Todo", isComplete: false}}
        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)
    })
})