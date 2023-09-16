import { describe, expect, it } from 'vitest'

describe('Utils/error.ts', () => {
  it('identifies Error object as error', () => {
    const err = new Error('An error occurred')
    expect(isError(err)).toBe(true)
  })

  it('identifies string as not error', () => {
    expect(isError('This is a string')).toBe(false)
  })

  it('identifies number as not error', () => {
    expect(isError(123)).toBe(false)
  })

  it('identifies null as not error', () => {
    expect(isError(null)).toBe(false)
  })

  it('identifies undefined as not error', () => {
    expect(isError(undefined)).toBe(false)
  })

  it('identifies plain object as not error', () => {
    expect(isError({})).toBe(false)
  })

  it('identifies array as not error', () => {
    expect(isError([])).toBe(false)
  })

  it('identifies function as not error', () => {
    expect(isError(() => {})).toBe(false)
  })
})
