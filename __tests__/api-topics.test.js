const request = require("supertest");
const app = require("../app.js");
const testData = require("../db/data/test-data");
const topicData = require("../db/data/test-data/topics.js");
const seed = require("../db/seeds/seed.js");
beforeEach(() => seed(testData));

describe("GET:200 - api/topics", () => {
  it("should respond with a 200 status code", () => {
    return request(app).get("/api/topics").expect(200);
  });
});

describe("404 - /api/pokemonGo", () => {
  it("should respond with a 404 error", () => {
    return request(app).get("/api/pokemonGo").expect(404);
  });
});

describe("GET:200 - /api/topics", () => {
  it("should respond with an array of topic objects with a slug array and a description array.", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then(({ body }) => {
        expect(body).toEqual(topicData);
      });
  });
});