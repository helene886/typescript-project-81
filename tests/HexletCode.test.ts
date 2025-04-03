import { expect, test } from 'vitest'
import fs from 'fs'
import path from 'path'
import HexletCode from '../src/HexletCode'

function getFixture(filename: string): string {
  return fs.readFileSync(path.join(__dirname.replace('tests', '__fixtures__'), filename), 'utf-8')
}

test('Form with just template correct', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' }
  const html = getFixture('onlyTemplate.html')
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  expect(HexletCode.formFor(template, {}, (f) => {})).toBe(html)
})

test('Form with template and action correct', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' }
  const html = getFixture('templateAndAction.html')
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  expect(HexletCode.formFor(template, { url: '/users' }, (f) => {})).toBe(html)
})

test('Form with simple input and textarea input correct', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' }
  const html = getFixture('simpleAndTextareaInput.html')
  expect(HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name')
    f.input('job', { as: 'textarea' })
  })).toBe(html)
})

test('Form with two simple inputs with and without non-textarea attributes correct', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' }
  const html = getFixture('nonTextareaInput.html')
  expect(HexletCode.formFor(template, {}, (f) => {
    f.input('name', { class: 'user-input' })
    f.input('job')
  })).toBe(html)
})

test('Form with with redefined fields correct', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' }
  const html = getFixture('redefinedFields.html')
  expect(HexletCode.formFor(template, { url: '#' }, f =>
    f.input('job', { as: 'textarea', rows: 50, cols: 50 }))).toBe(html)
})

test('Form throws error on input for a missing field', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' }
  expect(() => HexletCode.formFor(template, { url: '/users' }, (f) => {
    f.input('name')
    f.input('job', { as: 'textarea' })
    f.input('age')
  })).toThrowError('Field \'age\' does not exist in the template.')
})

test('Form with labels for input and submit correct', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' }
  const html = getFixture('submit.html')
  expect(HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name')
    f.input('job', { as: 'textarea' })
    f.submit()
  })).toBe(html)
})

test('Form with submit with name correct', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' }
  const html = getFixture('submitWithName.html')
  expect(HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name')
    f.input('job', { as: 'textarea' })
    f.submit('Wow')
  })).toBe(html)
})
