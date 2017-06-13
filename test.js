import test from 'ava'
import countryRegions from '.'

test('exports the expected format', t => {
  t.true(Array.isArray(countryRegions))

  const testCountry = countryRegions.find(country => country.abbreviation === 'US')
  t.is(typeof testCountry, 'object')
  t.is(testCountry.name, 'United States')
  t.true(Array.isArray(testCountry.regions))
  t.true(testCountry.regions.length > 50)

  const countryWithoutStates = countryRegions.find(country => country.abbreviation === 'NZ')
  t.is(typeof countryWithoutStates, 'object')
  t.is(countryWithoutStates.name, 'New Zealand')
  t.falsy(countryWithoutStates.regions)
})
