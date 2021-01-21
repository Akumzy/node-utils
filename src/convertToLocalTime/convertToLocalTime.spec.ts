import convertToLocalTime from "."

const clientDates = [
  "2021-01-21T11:59:00.055Z",
  "2021-01-21T12:59:00.055Z",
  "2021-01-21T13:59:00.055Z",
]
const expectedResults = [
  "2021-01-21T02:59:00.000Z",
  "2021-01-21T03:59:00.000Z",
  "2021-01-21T04:59:00.000Z",
]
it("Should convert user dates to local server date", () => {
  expect(expectedResults).toEqual(
    clientDates.map((v) => convertToLocalTime(v, "America/Los_Angeles").toISOString()),
  )
})
