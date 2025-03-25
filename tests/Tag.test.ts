import { expect, test } from 'vitest'
import { Tag } from '../src/Tag'

test('Single tag without attributes correct', () => {
  expect(new Tag('br').toString()).toBe('<br>')
})

test('Single tag with one attribute correct', () => {
  expect(new Tag('img', { src: 'path/to/image' }).toString()).toBe('<img src="path/to/image">')
})

test('Single tag with two attributes correct', () => {
  expect(new Tag('input', { type: 'submit', value: 'Save' }).toString()).toBe('<input type="submit" value="Save">')
})

test('Paired tag with empty attribute and with text correct', () => {
  expect(new Tag('label', {}, 'Email').toString()).toBe('<label>Email</label>')
})

test('Paired tag with one attribute and text correct', () => {
  expect(new Tag('label', { for: 'email' }, 'Email').toString()).toBe('<label for="email">Email</label>')
})

test('Paired tag without attributes and without text correct', () => {
  expect(new Tag('div').toString()).toBe('<div></div>')
})
